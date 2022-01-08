import { SQSRecord } from 'aws-lambda'
import safeAwait from '../safeAwait'
import readSQSRecord from './readSQSRecord'
import { Status } from './types'
import { updateMessageRecord } from './updateMessageRecord'

/**
 * Check if a record is in progress or complete. Works for both queue and task records.
 * If the message is marked as complete, it will return true.
 * If the message is not complete and the difference between
 * the updatedAt timestamp and the current time exceeds the lambda function timeout,
 * it will return false and it will increase the consumtion_count and.
 * And it is safe to continue to process the message.
 * If the difference between the updatedAt timestamp and the current time
 * does not exceed the lambda function timeout, an error will be thrown. Sending the message
 * back to the queue and eventually to the dead letter queue.
 * @param record The SQS Record to check against
 * @returns A promise that resolves to true if the record is complete
 */
export async function isComplete(record: SQSRecord): Promise<boolean> {
  const { id, getMessageRecord } = readSQSRecord(record)
  const { status, type, updatedAt, pKey, rKey } = await getMessageRecord(true)

  if (status === Status.complete) return true
  if (status === Status.inProgress || status === Status.preFlight) {
    const diff = new Date(updatedAt).getTime() - new Date().getTime()
    if (!process.env.LAMBDA_TIMEOUT) throw new Error('LAMBDA_TIMEOUT is not set')
    if (diff <= parseInt(process.env.LAMBDA_TIMEOUT)) {
      console.log(`${type} ${id} is in progress and has been running for ${diff}ms.`)
      throw new Error(`${type} ${id} is in progress and has been running for ${diff}ms.`)
    }
    else {
      console.log(`${type} ${id} is in progress and has been running for ${diff}ms.`)
      const [error] = await safeAwait(updateMessageRecord({ pKey, rKey }, (record) => {
        return {
          ...record,
          status: Status.inProgress,
          updatedAt: new Date().toISOString(),
          consumption_count: record.consumtion_count ? record.consumtion_count + 1 : 1,
        }
      }))

      if (error) console.log('Error updating message record', JSON.stringify(error))
      return false
    }
  }

  return false
}

export default isComplete
