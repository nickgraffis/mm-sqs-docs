import { SQSMessageKey } from './types';
import { MessageClusterRecord } from './types';
import { getMessageCluster } from './getQueueRecord';
import AWS from 'aws-sdk';
const s3 = new AWS.S3();
const clientWrapper = require('dynamodb-doc-client-wrapper');
import safeAwait from '../safeAwait';
import getMessageClusterGlobals from './getQueueGlobals';
const ModelmatchRepository = require('../../repository/modelmatchRepository');
const modelmatchRepository = new ModelmatchRepository(process.env.modelmatchTable, clientWrapper());


export async function updateMessageCluster<Meta = any>(
  key: { pKey: string, rKey: string }, 
  record: MessageClusterRecord<Meta> | ((record: MessageClusterRecord<Meta>) => MessageClusterRecord<Meta>)
): Promise<{ pKey: string, rKey: string }> {
  if (typeof record === 'function') {
    const { record: oldRecord } = await getMessageCluster(key, true)
    const newRecord = record(oldRecord)
    const [error] = await safeAwait(
      modelmatchRepository.betterUpdateDocument(
        { pKey: key.pKey, rKey: key.rKey },
        newRecord
      )
    )

    if (error) throw error

    return key
  } else {
    const [error] = await safeAwait(
      modelmatchRepository.betterUpdateDocument(
        { pKey: key.pKey, rKey: key.rKey },
        record
      )
    )

    if (error) throw error

    return key
  }
}

export async function updateClusterGlobals<Globals = any>(
  key: { pKey: SQSMessageKey, rKey: SQSMessageKey }, 
  globals: Globals | ((globals: Globals) => Globals)
): Promise<{ pKey: string, rKey: string }> {
  if (typeof globals === 'function') {
    const [readError, oldGlobals] = await safeAwait(getMessageClusterGlobals<Globals>(key))
    if (readError || !oldGlobals || oldGlobals instanceof Error) {
      console.log(`Error reading globals for ${key.pKey} ${key.rKey}`, readError || oldGlobals)
      throw readError || oldGlobals
    }
    
    const newGlobals = (globals as ((globals: Globals) => Globals))(oldGlobals)
    const [error] = await safeAwait(
      s3.putObject({
        Bucket: process.env.contactExportBucket || '',
        Key: `${key.pKey}-globals.json`,
        Body: JSON.stringify(newGlobals)
      }).promise()
    )

    if (error) throw error

    return key
  } else {
    const [error] = await safeAwait(
      s3.putObject({
        Bucket: process.env.contactExportBucket || '',
        Key: `${key.pKey}-globals.json`,
        Body: JSON.stringify(globals)
      }).promise()
    )

    if (error) throw error

    return key
  }
}

export default updateMessageCluster