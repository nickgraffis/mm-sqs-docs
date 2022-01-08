import AWS from 'aws-sdk'
import { SQSMessageKey, MessageClusterRecord } from './types'
import { getMessageCluster } from './getQueueRecord'
const { getQueueRecord } = require('./getQueueRecord')
const clientWrapper = require('dynamodb-doc-client-wrapper')
const safeAwait = require('../safeAwait')
const ModelmatchRepository = require('../../repository/modelmatchRepository')
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper())
const s3 = new AWS.S3()
const { v4: uuid } = require('uuid')
const getQueueGlobals = require('./getQueueGlobals')
const sqs = new AWS.SQS()

/**
 *
 * @param {{ pKey: String, rKey: String }} key
 * @typedef {Object} QueueRecord
 * @property {String} url - the url of the queue lambda
 * @property {String} pKey - the pKey of the queue record
 * @property {String} rKey - the rKey of the queue record
 * @property {String} status - the status of the queue record
 * @property {String} error - the error of the queue record
 * @property {Number} statusCode - the status code of the queue record
 * @property {String} startedAt - the startedAt of the queue record
 * @property {Array} completedTasks - the completedTasks of the queue record
 * @property {Array} incompleteTasks - the incompleteTasks of the queue record
 * @property {Object} bucketParams - the bucketParams of the queue record
 * @property {Object} meta - the meta data of the queue record
 * @param {async (record: QueueRecord, globals: Object) => void} onCompletedCallback
 * @param {*} onStoppedCallback
 * @returns {Promise<String>}
 */
export async function onClusterComplete<Meta = any, Globals = any>(
  key: { pKey: SQSMessageKey; rKey: SQSMessageKey },
  onCompletedCallback: (record: MessageClusterRecord<Meta>, globals: Globals) => Promise<void>,
) {
  const { record, getGlobals } = await getMessageCluster<Meta, Globals>(key, true)
  console.log('ON QUEUE COMPLETE', record.incompleteTasks, record.completedTasks)
  if (!record.incompleteTasks.length) {
    const globals = await getGlobals()
    console.log('ON QUEUE COMPLETE CALLBACK', JSON.stringify(record), JSON.stringify(globals))
    await onCompletedCallback(record, globals)
  }
  else { return 'not completed' }

  await s3.deleteObject({
    Bucket: process.env.contactExportBucket || '',
    Key: `${record.pKey}-globals.json`,
  }).promise()

  return 'completed'
}

export default onClusterComplete
