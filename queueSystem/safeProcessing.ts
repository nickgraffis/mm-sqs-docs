import { SQSEvent, SQSRecord } from 'aws-lambda'
// import safeAwait from "../safeAwait";
// import { isComplete } from "./isComplete";
// import markComplete from "./markComplete";
import AWS from 'aws-sdk'
import { getQueueUrl, keyify } from './logics'
import readSQSRecord from './readSQSRecord'
import { MessageRecord, Status, StatusCode, RecordType } from './types'
import updateMessageCluster from './updateMessageClusterRecord'
import updateMessageRecord from './updateMessageRecord'
const sqs = new AWS.SQS()

export async function safeProcessBatch(event: SQSEvent, processMessage: (record: SQSRecord) => Promise<null | void>): Promise<null> {
  const messageProcessingPromises = event.Records.map(async(record, index) => {
    console.log(`Processing message batch, batch number: ${index}`)
    const messageResult = await processMessage(record)
    await sqs.deleteMessage({
      QueueUrl: getQueueUrl({ sqs, eventSourceARN: record.eventSourceARN }),
      ReceiptHandle: record.receiptHandle,
    }).promise()

    return messageResult
  })

  const processedMessages = await Promise.allSettled(messageProcessingPromises)
  const failedMessages = processedMessages.filter(async(r, i) => {
    if (r.status === 'rejected') {
      const rejectedMessage = event.Records[i].messageId
      console.log(`Message ${rejectedMessage} failed to process.`)
      const { url, id, pKey, rKey, type, getMessageRecord } = readSQSRecord(event.Records[i])
      let done = false
      const checkConsumtion = (record: MessageRecord) => {
        if (record.consumtion_count >= parseInt(process.env.maxConsumtionCount || '1')) {
          console.log(`Message ${rejectedMessage} failed to process.`)
          done = true
        }
      }

      const messageRecord = await getMessageRecord(true)
      checkConsumtion(messageRecord)
      const newRecord = {
        ...messageRecord,
        status: done ? Status.error : messageRecord.status,
        statusCode: done ? StatusCode.error : messageRecord.statusCode,
        error: [
          ...(messageRecord.error || []), {
            id: rejectedMessage,
            reason: r.reason,
          },
        ],
      }

      await updateMessageRecord({ pKey: keyify(id || ''), rKey: keyify(url) }, newRecord)

      if (type === RecordType.task) {
        await updateMessageCluster({ pKey, rKey }, (cluster) => {
          return {
            ...cluster,
            incompleteTasks: [
              ...(done ? cluster.incompleteTasks.filter(t => t.id !== rejectedMessage) : cluster.incompleteTasks),
            ],
            error: [
              ...(cluster.error || []), {
                id: rejectedMessage,
                reason: r.reason,
              },
            ],
          }
        })
      }
    }
    return r.status === 'rejected'
  })
  // At least one message failed to be processed; throw an error to keep the failed messages on the queue
  if (failedMessages.length) {
    console.log(`Failed to process ${failedMessages.length} messages`, failedMessages, processedMessages)
    throw new Error('Partial batch failure')
  }

  return null
}
