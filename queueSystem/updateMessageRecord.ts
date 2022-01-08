import safeAwait from '../safeAwait'
import { getMessageRecord } from './getQueueRecord'
import { MessageRecord } from './types'
const clientWrapper = require('dynamodb-doc-client-wrapper')
const ModelmatchRepository = require('../../repository/modelmatchRepository')
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper())

export async function updateMessageRecord<Meta = any>(
  key: { pKey: string; rKey: string },
  record: MessageRecord<Meta> | ((record: MessageRecord<Meta>) => MessageRecord<Meta>),
): Promise<{ pKey: string; rKey: string }> {
  if (typeof record === 'function') {
    const oldRecord = await getMessageRecord(key, true)
    const newRecord = record(oldRecord)
    const [error] = await safeAwait(
      modelmatchRepository.betterUpdateDocument(
        { pKey: key.pKey, rKey: key.rKey },
        newRecord,
      ),
    )

    if (error) throw error

    return key
  }
  else {
    const [error] = await safeAwait(
      modelmatchRepository.betterUpdateDocument(
        { pKey: key.pKey, rKey: key.rKey },
        record,
      ),
    )

    if (error) throw error

    return key
  }
}

export default updateMessageRecord
