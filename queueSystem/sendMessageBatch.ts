import AWS, { SQS } from 'aws-sdk'
import safeAwait from '../safeAwait'
import { createMessageRecords, buildMessageRecord } from './logics'
import { MessageRecord, RecordType } from './types'
const sqs = new AWS.SQS()

export async function sendMessageBatch<Meta = any, Body = any>(messageParams: SQS.SendMessageBatchRequest, meta?: Meta) {
  if (!messageParams.QueueUrl)
    throw new Error('QueueUrl is required')

  const [sqsError, res] = await safeAwait<SQS.SendMessageBatchResult>(
    sqs.sendMessageBatch(messageParams).promise(),
  )

  if (sqsError || !res || res instanceof Error)
    throw sqsError || new Error('Failed to get back message response.')

  const params: MessageRecord<Meta, Body>[] = res.Successful.map(({ MessageId }, i) =>
    buildMessageRecord<Meta, Body>({
      id: MessageId,
      url: messageParams.QueueUrl,
      ...(meta) && { meta },
      body: (messageParams.Entries[i].MessageBody as any),
      type: RecordType.message,
    }))

  const [dynamoError, keys] = await safeAwait(createMessageRecords(params))

  if (dynamoError || !keys || keys instanceof Error)
    throw dynamoError || new Error('Failed to create queue record. The message was sent, but will be lost.')

  return keys
}

export default sendMessageBatch
