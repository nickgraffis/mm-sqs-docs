import { SQSRecord } from 'aws-lambda'
import AWS from 'aws-sdk'
import { SQSMessageKey, RecordType, MessageRecord, MessageClusterRecord } from './types'
import { keyify, getQueueUrl } from './logics'
import { getMessageCluster, getMessageRecord } from './getQueueRecord'

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageCluster?: (consistentRead: boolean) => Promise<{ record: MessageClusterRecord<Meta>; getGlobals: () => Promise<Globals> }>
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Meta = any, Globals = any, Body = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = getQueueUrl({ sqs: new AWS.SQS(), eventSourceARN: record.eventSourceARN })
  const pKey = body.pKey
  const id = keyify(record.messageId)
  const rKey = body.rKey || keyify(url)
  const task = body.task || undefined
  const type = body.type || RecordType.message
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistenRead = false) =>
      getMessageRecord<Meta>({ pKey: id, rKey }, consistenRead),
    ...(type === RecordType.cluster)
      && {
        getMessageCluster: (consistenRead = false) =>
          getMessageCluster<Meta, Globals>({ pKey, rKey }, consistenRead),
      },
  }
}

export default readSQSRecord
