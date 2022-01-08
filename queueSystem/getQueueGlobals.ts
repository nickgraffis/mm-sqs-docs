import AWS from 'aws-sdk'
import safeAwait from '../safeAwait'
const s3 = new AWS.S3()

/**
 * Get the queue globals that are stored in an S3 bucket
 * Return value is not the S3 object but the parsed JSON object
 * @param {String | { pKey: String, rKey: String}} key - the pKey of the queue or key of the queue record
 * @returns {Promise<any>}
 */
export async function getMessageClusterGlobals<Globals = any>(key: string | { pKey: string; rKey: string }):
Promise<Globals> {
  let _key
  if (typeof key === 'object') _key = key.pKey
  else _key = key

  console.log(`Reading queue globals for ${_key}`)
  const [error, globalsStore] = await safeAwait(
    s3.getObject({
      Bucket: process.env.contactExportBucket || '',
      Key: `${_key}-globals.json`,
    }).promise(),
  )

  if (error || !globalsStore || globalsStore instanceof Error)
    throw error || new Error('Failed to get back message response.')

  const { Body } = globalsStore
  if (!Body) throw new Error('Failed to get back message body.')

  return JSON.parse(Body.toString('utf-8'))
}

export default getMessageClusterGlobals
