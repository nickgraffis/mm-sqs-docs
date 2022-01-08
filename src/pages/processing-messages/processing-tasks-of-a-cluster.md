---
title: Processing Messages (Tasks) that are part of a Cluster
----

## Reading the SQS Record for a Message, Message Record, and Message Cluster
You can start processing messages that are part of a cluster the same way that you would process a message that is not part of a cluster. You can use the `readSQSRecord` to get access to the message data and an additional `getMessageCluster` method to get access to the cluster data.


```ts twoslash
import { SQSRecord } from 'aws-lambda'
import AWS from 'aws-sdk'

export type SQSMessageKey = `SQSMessage$${string}`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task<Meta = any> = {
  meta: Meta
  type: 'task'
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = 'cluster',
  task = 'task',
  message = 'message'
}

export enum Status {
  preFlight = 'PRE FLIGHT',
  inProgress = 'IN PROGRESS',
  complete = 'COMPLETE',
  error = 'ERROR'
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
  getMessageRecord: (consistentRead?: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Body = any, Meta = any, Globals = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = 'jfkdla;f'
  const pKey = `SQSMesssage$${'fdfdafda'}` as SQSMessageKey
  const id = 'jfkdlafjkdal;'
  const rKey = `SQSMesssage$${'jfkdla;fjkda'}` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =>
      (async <Meta>() => ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord<Body, MetaData>(record)
  
  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster && 
    await getMessageCluster()
}

```

## Getting the Globals for a Message Cluster
When you call `getMessageCluster()` you are returned a method to get the globals for the cluster.

```ts twoslash
import { SQSRecord } from 'aws-lambda'
import AWS from 'aws-sdk'

export type SQSMessageKey = `SQSMessage$${string}`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task<Meta = any> = {
  meta: Meta
  type: 'task'
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = 'cluster',
  task = 'task',
  message = 'message'
}

export enum Status {
  preFlight = 'PRE FLIGHT',
  inProgress = 'IN PROGRESS',
  complete = 'COMPLETE',
  error = 'ERROR'
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
  getMessageRecord: (consistentRead?: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Body = any, Meta = any, Globals = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = 'jfkdla;f'
  const pKey = `SQSMesssage$${'fdfdafda'}` as SQSMessageKey
  const id = 'jfkdlafjkdal;'
  const rKey = `SQSMesssage$${'jfkdla;fjkda'}` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =>
      (async <Meta>() => ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

type Globals = {
  firstName: string,
  lastName: string
}[]

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord<Body, MetaData, Globals>(record)
  
  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster && 
    await getMessageCluster()

  if (messageCluster) {
    const globals = await messageCluster.getGlobals()
  }
}

```

This is done so that you do not waste time fetching data from S3 if it is not needed. 

::: dracula
🧛🏻‍♂️ Hey, a possible improvement here would be to store the s3 bucket params in the message body as well. This means that you could get global data without getting the message cluster record.
::: 

## Updating Global Data

You can use `updateClusterGlobals()` to update the globals for a cluster. You can pass it the key as either the `pKey` and `rKey` object, or simply just the `pKey` as the global data store only uses the `pKey`. 

You can also pass it a new globals object, or pass it a function that returns a new globals object and accepts the old globals object.

```ts twoslash
import { SQSRecord } from 'aws-lambda'
import AWS from 'aws-sdk'

export type SQSMessageKey = `SQSMessage$${string}`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task<Meta = any> = {
  meta: Meta
  type: 'task'
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = 'cluster',
  task = 'task',
  message = 'message'
}

export enum Status {
  preFlight = 'PRE FLIGHT',
  inProgress = 'IN PROGRESS',
  complete = 'COMPLETE',
  error = 'ERROR'
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
  getMessageRecord: (consistentRead?: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Body = any, Meta = any, Globals = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = 'jfkdla;f'
  const pKey = `SQSMesssage$${'fdfdafda'}` as SQSMessageKey
  const id = 'jfkdlafjkdal;'
  const rKey = `SQSMesssage$${'jfkdla;fjkda'}` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =>
      (async <Meta>() => ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}
export async function updateClusterGlobals<Globals = any>(
  key: { pKey: SQSMessageKey, rKey: SQSMessageKey }, 
  globals: Globals | ((globals: Globals) => Globals)
): Promise<{ pKey: string, rKey: string }> {
  return { pKey: '', rKey: '' }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

type Globals = {
  firstName: string,
  lastName: string
}[]

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord<Body, MetaData, Globals>(record)
  
  const messageRecord = await getMessageRecord()

  // Perform a total rewrite of the global store
  await updateClusterGlobals<Globals>(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    [{ firstName: 'John', lastName: 'Doe' }]
  )

  // Perform a insert of data to the global store
  await updateClusterGlobals<Globals>(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    (globals: Globals) => [...globals, { firstName: 'John', lastName: 'Doe' }]
  )
}
```