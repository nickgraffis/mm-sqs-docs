import safeAwait from '../safeAwait'
import { getMessageClusterGlobals } from './getQueueGlobals'
import { MessageRecord, MessageClusterRecord } from './types'
const clientWrapper = require('dynamodb-doc-client-wrapper')
const ModelmatchRepository = require('../../repository/modelmatchRepository')
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper())

/**
 * Get a message record
 * @param key - pKey and rKey of the message record
 * @param consistentRead - Whether to use a consistent read
 * @returns The message record
 */
export async function getMessageRecord<Meta = any, Body = any>(
  key: { pKey: string; rKey: string },
  consistentRead = false,
): Promise<MessageRecord<Meta>> {
  const [error, queueRecord] = await safeAwait<MessageRecord<Meta, Body>>(
    modelmatchRepository.getItem(key, consistentRead),
  )
  if (error)
    throw error || new Error('Failed to get back message response.')
  else if (!queueRecord)
    throw new Error('No message record found.')

  return queueRecord
}

/**
 * Get many message records
 * @param key - pKey and rKey of the message records
 * @returns The message records
 */
export async function getMessageRecords<Meta = any, Body = any>(
  keys: { pKey: string; rKey: string }[],
): Promise<MessageRecord<Meta>[]> {
  const [error, queueRecords] = await safeAwait<MessageRecord<Meta, Body>[]>(
    modelmatchRepository.getItems(keys),
  )

  if (error)
    throw error || new Error('Failed to get back message response.')
  else if (!queueRecords)
    throw new Error('No message record found.')

  return queueRecords
}

/**
 *
 * @param key - pKey and rKey of the connected message record
 * @param consistentRead - Whether to use a consistent read
 * @returns - The record and a helper function to get the globals
 */
export async function getMessageCluster<Meta = any, Globals = any, TaskMeta = any>(
  key: { pKey: string; rKey: string },
  consistentRead = false,
): Promise<{ record: MessageClusterRecord<Meta, TaskMeta>; getGlobals: () => Promise<Globals> }> {
  const [error, queueRecord] = await safeAwait<MessageClusterRecord<Meta>>(modelmatchRepository.getItem(key, consistentRead))

  if (error)
    throw error || new Error('Failed to get back message response.')
  else if (!queueRecord)
    throw new Error('No message record found.')

  return {
    record: queueRecord,
    getGlobals: () => getMessageClusterGlobals<Globals>(key.pKey),
  }
}
