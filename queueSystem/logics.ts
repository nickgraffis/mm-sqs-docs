import { SQSRecord } from 'aws-lambda'
import AWS from 'aws-sdk'
import safeAwait from '../safeAwait'
import { MessageClusterRecord, MessageRecord, RecordType, SQSMessageKey, Status, StatusCode } from './types'
const s3 = new AWS.S3()
const clientWrapper = require('dynamodb-doc-client-wrapper')
const ModelmatchRepository = require('../../repository/modelmatchRepository')
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper())

export function keyify(key: string): SQSMessageKey {
  return `SQSMessage$${key}`
}

export type BuildMessageRecordParams<Meta = any, Body = any> = {
  id: string
  body: String & Stringified<Body>
  url: string
  meta?: Meta
  type: RecordType
}
export function buildMessageRecord<Meta, Body>(params: BuildMessageRecordParams<Meta, Body>): MessageRecord<Meta, Body> {
  return {
    pKey: keyify(params.id),
    rKey: keyify(params.url),
    url: params.url,
    id: params.id,
    ...(params.meta) && { meta: params.meta },
    body: params.body,
    type: params.type,
    startedAt: new Date().toISOString(),
    status: Status.preFlight,
    statusCode: StatusCode.preFlight,
    consumtion_count: 0,
    completedAt: null,
    updatedAt: new Date().toISOString(),
    expiresAt: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  }
}

export async function createGlobalStore<Globals = any>(pKey: string, globals: Globals) {
  console.log(`Creating global store for ${pKey}`)
  const bucketParams = {
    Bucket: process.env.contactExportBucket || '',
    Key: `${pKey}-globals.json`,
    Body: JSON.stringify(globals || {}),
  }
  const [error, bucket] = await safeAwait(s3.putObject(bucketParams).promise())
  if (error) {
    console.error(`Failed to create global store for ${pKey}`)
    throw error
  }

  console.log('Created a bucket', JSON.stringify(bucket))
  return {
    Bucket: bucketParams.Bucket,
    Key: bucketParams.Key,
  }
}

async function insertItems(items: [{ item: any }] | any) {
  items = Array.isArray(items) ? items : [{ Item: items }]
  console.log(`Inserting ${items.length} items`, JSON.stringify(items))
  const [err, updatedQueueRecord] = await safeAwait(
    modelmatchRepository.putItems(items),
  )

  if (err) return err

  return updatedQueueRecord
}

export async function createMessageRecord<Meta = any>(params: MessageRecord<Meta>) {
  console.log(`Creating queue record for ${JSON.stringify(params)}`)

  const [err, updatedQueueRecord] = await safeAwait(
    insertItems(params),
  )

  if (err)
    throw err

  console.log('Created queue record', JSON.stringify(updatedQueueRecord))

  return {
    pKey: params.pKey,
    rKey: params.rKey,
  }
}

export async function createMessageClusterRecord<Meta = any, TaskMeta = any>(params: MessageClusterRecord<Meta, TaskMeta>) {
  console.log(`Creating queue record for ${JSON.stringify(params)}`)

  const [err, updatedQueueRecord] = await safeAwait(
    insertItems(params),
  )

  if (err)
    throw err

  console.log('Created queue record', JSON.stringify(updatedQueueRecord))

  return {
    pKey: params.pKey,
    rKey: params.rKey,
  }
}

export async function createMessageRecords<Meta = any>(params: MessageRecord<Meta>[]) {
  console.log(`Creating queue record for ${JSON.stringify(params)}`)
  const queueRecords: { Item: MessageRecord<Meta> }[] = params.map(param => ({
    Item: param,
  }))
  const [err, updatedQueueRecord] = await safeAwait(
    insertItems(queueRecords),
  )

  if (err)
    throw err

  console.log('Created queue record', JSON.stringify(updatedQueueRecord))

  return params.map(param => ({
    pKey: param.pKey,
    rKey: param.rKey,
  }))
}

export function getQueueUrl({ sqs, eventSourceARN }:
{ sqs: AWS.SQS; eventSourceARN: SQSRecord['eventSourceARN'] }): string {
  const [, , , , accountId, queueName] = eventSourceARN.split(':')
  return `${sqs.endpoint.href}${accountId}/${queueName}`
}
