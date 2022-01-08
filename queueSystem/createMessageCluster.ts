import { v4 as uuid } from 'uuid'
import AWS from 'aws-sdk'
import safeAwait from '../safeAwait'
import { MessageClusterRecord, MessageRecord, RecordType, Status, StatusCode, SQSMessageKey } from './types'
import { createGlobalStore, createMessageClusterRecord, buildMessageRecord, createMessageRecords, keyify } from './logics'
const sqs = new AWS.SQS()
const clientWrapper = require('dynamodb-doc-client-wrapper')
const ModelmatchRepository = require('../../repository/modelmatchRepository')
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper())

export type MessageClusterParams<Meta = any, Globals = any, TaskMeta = any> = {
  url: string
  globals?: Globals
  meta?: Meta
  tasks: TaskMeta[]
}

export type MessageClusterBody<TaskMeta = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: TaskMeta
  type: RecordType.task
}

/**
 * @typedef {Object} MessageClusterRecord
 * @property {string} url - The url of the queue.
 * @property {globals} Globals - You can pass in the globals type.
 * Globals are what is stored in s3 for you.
 * @property {meta} Meta - You can pass in the meta type. Meta will
 * be stored in dynamo for you.
 * @property {tasks} TaskMeta[] - The tasks to be run. You can pass in
 * the tasks type. Each task in dynamo has this metadata.
 * Tasks are also stored in the body of the message.
 * @returns
 */
export async function createMessageCluster<Meta = any, Globals = any, TaskMeta = any>({
  url,
  globals,
  meta,
  tasks,
}: MessageClusterParams<Meta, Globals, TaskMeta>) {
  // Step 1: Create a unique identifier for the entire connected tasks
  const pKey = keyify(uuid())
  console.log(`pKey: ${pKey}`)
  console.log(`url: ${url}`)
  console.log(`globals: ${JSON.stringify(globals)}`)
  console.log(`meta: ${JSON.stringify(meta)}`)
  console.log(`tasks: ${JSON.stringify(tasks)}`)

  // Step 2: Create a global store for the connected tasks
  const [s3Error, bucketParams] = await safeAwait(createGlobalStore(pKey, globals))

  if (s3Error) {
    console.log(`s3Error: ${s3Error}`)
    throw s3Error
  }
  else if (!bucketParams) {
    console.log(`bucketParams: ${bucketParams}`)
    throw new Error('bucketParams is undefined')
  }

  console.log(`bucketParams: ${JSON.stringify(bucketParams)}`)

  // Step 3: Create a queue record for the connected tasks
  const [dynamoError, key] = await safeAwait(createMessageClusterRecord<Meta, TaskMeta>({
    pKey,
    rKey: keyify(url),
    url,
    meta,
    type: RecordType.cluster,
    startedAt: new Date().toISOString(),
    status: Status.preFlight,
    statusCode: StatusCode.preFlight,
    completedTasks: [],
    updatedAt: new Date().toISOString(),
    expiresAt: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    completedAt: null,
    bucketParams,
    incompleteTasks: tasks.map(task => ({
      meta: task,
      type: 'task',
    })),
  }))

  if (dynamoError) {
    console.log(`dynamoError: ${dynamoError}`)
    throw dynamoError
  }
  else if (!key) {
    console.log(`key: ${key}`)
    throw new Error('key is undefined')
  }

  console.log(`key: ${JSON.stringify(key)}`)

  const chunk = (arr: any[], chunkSize: number) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += chunkSize)
      chunks.push(arr.slice(i, i + chunkSize))

    return chunks
  }

  // Step 4: Create an array of messageBatches to be sent for each task
  const chunks = chunk(tasks, 10)
  const queue = []
  for (let i = 0; i < chunks.length; i++) {
    queue.push(
      sqs
        .sendMessageBatch({
          QueueUrl: url,
          Entries: chunks[i].map((task, i) => {
            return {
              Id: i.toString(),
              MessageBody: JSON.stringify<MessageClusterBody<TaskMeta>>({
                pKey: key.pKey,
                rKey: key.rKey,
                type: RecordType.task,
                task,
              }),
            }
          }),
        }),
    )
  }

  // Step 5: Wait for all the messages to be sent and store their ids
  const messageIds: string[] = []
  for (let i = 0; i < queue.length; i++) {
    const [error, res] = await safeAwait(queue[i].promise())
    if (error) {
      console.log(`error sending the message${i}: ${error}`)
      throw error
    }
    else if (!res) {
      console.log(`res sending the message${i}: ${res}`)
      throw new Error('res is undefined')
    }

    res.Successful.forEach(({ MessageId }) => {
      messageIds.push(MessageId)
    })
  }

  console.log(`messageIds: ${JSON.stringify(messageIds)}`)

  // Step 6: Update the queue record with the message ids
  const [error, updateMessageClusterRecord] = await safeAwait(
    modelmatchRepository.betterUpdateDocument(
      { pKey, rKey: keyify(url) },
      (record: MessageClusterRecord<Meta, TaskMeta>) => {
        console.log(`record: ${JSON.stringify(record)}`)
        console.log('tasks: ', JSON.stringify(tasks))
        record.incompleteTasks = record.incompleteTasks.map((task, i) => ({
          ...task,
          status: Status.preFlight,
          id: messageIds[i],
        }))
        return record
      },
    ),
  )

  if (error) {
    console.log(`error updating the message cluster record: ${error}`)
    throw error
  }

  console.log(`updateMessageClusterRecord: ${JSON.stringify(updateMessageClusterRecord)}`)

  // Step 7: Batch create individual message records for each task
  const messageRecords: MessageRecord[] = messageIds.map((id, i) =>
    buildMessageRecord<Meta, MessageClusterBody<TaskMeta>>({
      id,
      url,
      ...(meta) && { meta },
      body: JSON.stringify<MessageClusterBody<TaskMeta>>({
        pKey: key.pKey,
        rKey: key.rKey,
        task: tasks[i],
        type: RecordType.task,
      }),
      type: RecordType.task,
    }),
  )

  const [createMessageError, records] = await safeAwait(
    createMessageRecords(messageRecords),
  )

  if (createMessageError) {
    console.log(`createMessageError: ${createMessageError}`)
    throw createMessageError
  }

  console.log(`records: ${JSON.stringify(records)}`)

  return {
    pKey,
    rKey: keyify(url),
  }
}
