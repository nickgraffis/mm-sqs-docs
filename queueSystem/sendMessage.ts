import AWS, { SQS } from 'aws-sdk'
import { SendMessageRequest } from 'aws-sdk/clients/sqs'
import safeAwait from '../safeAwait'
import { buildMessageRecord, keyify, createMessageRecord } from './logics'
import { MessageRecord, RecordType } from './types'
const sqs = new AWS.SQS()

/**
 * Send a single SQS Message to a Queue with the given QueueURL.
 * Creates a message record to track the message.
 * @param messageParams - AWS SQS Message Request Parameters
 * @returns - Promise that resolves with the pKey and rKey of the message record
 */
export async function sendMessage<Meta = any, Body = any>(messageParams: SendMessageRequest, meta?: Meta) {
  if (!messageParams.QueueUrl)
    throw new Error('QueueUrl is required')

  const [sqsError, res] = await safeAwait<SQS.SendMessageResult>(
    sqs.sendMessage(messageParams).promise(),
  )

  if (sqsError || !res || res instanceof Error || !res.MessageId)
    throw sqsError || new Error('Failed to get back message response.')

  const pKey = keyify(res.MessageId)

  if (!pKey)
    throw new Error('Failed to get back message id.')

  const params: MessageRecord<Meta> = buildMessageRecord<Meta, Body>({
    id: res.MessageId,
    url: messageParams.QueueUrl,
    ...(meta) && { meta },
    body: (messageParams.MessageBody as any),
    type: RecordType.message,
  })

  const [dynamoError, key] = await safeAwait(createMessageRecord(params))

  if (dynamoError || !key || key instanceof Error)
    throw dynamoError || new Error('Failed to create queue record. The message was sent, but will be lost.')

  return key
}

export default sendMessage
