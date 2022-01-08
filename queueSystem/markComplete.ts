import { SQSRecord } from 'aws-lambda'
import safeAwait from '../safeAwait'
import { keyify } from './logics'
import readSQSRecord from './readSQSRecord'
import { RecordType, Status, StatusCode } from './types'
import updateMessageCluster from './updateMessageClusterRecord'
import { updateMessageRecord } from './updateMessageRecord'

/**
 * Mark a message as complete
 * @param record - The SQS record to parse
 * @returns The message record key
 */
export async function markComplete(record: SQSRecord): Promise<{ pKey: string; rKey: string }> {
  console.log('markComplete', JSON.stringify(record))
  // Step 1: Parse the SQS record to get the messageId as is
  // And if there is a pKey and rKey stored in the body, use those
  // Also get the type of the message, which is either stored in the body or default to message
  const { id, pKey, rKey, type } = readSQSRecord(record)
  console.log(`Marking ${type} ${id} as complete ${keyify(id || '')} ${rKey} ${pKey}`)

  // Step 2: Update the message record to mark it as complete
  const [error] = await safeAwait(updateMessageRecord({ pKey: keyify(id || ''), rKey }, (record) => {
    console.log('markComplete', JSON.stringify(record))
    return {
      ...record,
      status: Status.complete,
      updatedAt: new Date().toISOString(),
    }
  }))

  // Step 3: If the message is a task inside of a cluster, update the cluster record
  // using the pKey and rKey from the body of the message
  if (type === RecordType.task) {
    console.log(`Marking ${type} ${id} as complete ${pKey} ${rKey}`)
    const [clusterError] = await safeAwait(updateMessageCluster({ pKey, rKey }, (cluster) => {
      console.log('markComplete', JSON.stringify(cluster))
      const task = cluster.incompleteTasks.find(({ id: taskId }) => taskId === id)
      console.log('markComplete', JSON.stringify(task))
      if (!task)
        return cluster

      const determineClusterStatus = () => {
        if (cluster.incompleteTasks.length === 0)
          return { status: Status.complete, code: StatusCode.complete }

        if (cluster.status === Status.preFlight)
          return { status: Status.inProgress, code: StatusCode.inProgress }

        return { status: cluster.status, code: cluster.statusCode }
      }

      return {
        ...cluster,
        completedAt: cluster.incompleteTasks.length === 0 ? new Date().toISOString() : cluster.completedAt,
        status: determineClusterStatus().status,
        statusCode: determineClusterStatus().code,
        completedTasks: [...cluster.completedTasks, {
          ...task,
          status: Status.complete,
        }],
        incompleteTasks: [...cluster.incompleteTasks.filter(t => t.id !== id)],
        updatedAt: new Date().toISOString(),
      }
    }))

    if (clusterError) console.log('Error updating message record', JSON.stringify(clusterError))
  }

  if (error) console.log('Error updating message record', JSON.stringify(error))

  return { pKey, rKey }
}

export default markComplete
