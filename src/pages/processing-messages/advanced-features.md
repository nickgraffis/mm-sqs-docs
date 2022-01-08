---
title: Advanced Features
lastUpdated: 2022-01-08T07:12:46.226Z
---

## Updating a Message Record
If you ever need to update a message record's `meta` data you can do so by using the `updateMessageRecord` function. You can update anything insdie the message record, except the `pKey` and `rKey`, but is advised not to update the message record directly, but rather, use methods to perform updates to `status`, `statusCode`, `completedAt`, `updatedAt`, `expiresAt`, `consumtion_count`, and `error`.

```ts twoslash
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
import { SQSRecord } from 'aws-lambda'
export async function updateMessageRecord<Meta = any, Body = any>(
  key: { pKey: string; rKey: string },
  record: MessageRecord<Meta> | ((record: MessageRecord<Meta, Body>) => MessageRecord<Meta, Body>),
): Promise<{ pKey: string; rKey: string }> { return { pKey: '', rKey: '' } }


type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
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
    getMessageRecord: (consistenRead = false) =>
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
  const { id, body, url, getMessageRecord } = 
    readSQSRecord<Body, MetaData>(record)
  
  await updateMessageRecord<MetaData, Body>(
    { pKey: `SQSMessage$${id}`, rKey: `SQSMessage$${url}` }, 
    (oldRecord) => {
      return {
        ...oldRecord,
        meta: {
          stuff: 'new stuff'
        }
      }
    }
  )
}
```

To make it easy to make certain that the record is not being fundamentally changed, you can pass the second parameter of `updateMessageRecord` a function that will get the old record and return the new record.

## Marking a message as complete

If you use the `safeProcessMessageAsync` method, this will occur for you automatically. Marking a message as complete does several important things, incluing checking the timing of other concurrent messages and updating the record in the order recieved. 

::: danger
Avoid using `updateMessageRecord` to directly marke a message as complete. 
:::

```ts twoslash
import { SQSRecord } from 'aws-lambda'
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
export async function updateMessageRecord<Meta = any, Body = any>(
  key: { pKey: string; rKey: string },
  record: MessageRecord<Meta> | ((record: MessageRecord<Meta, Body>) => MessageRecord<Meta, Body>),
): Promise<{ pKey: string; rKey: string }> { return { pKey: '', rKey: '' } }


type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
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
    getMessageRecord: (consistenRead = false) =>
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

export async function markComplete(record: SQSRecord): Promise<{ pKey: string; rKey: string }> {
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

async function processMessage(record: SQSRecord) {
  const { id, body, url, getMessageRecord } = 
    readSQSRecord<Body, MetaData>(record)
  
  await markComplete(record)
}

```

## Diving deeper into marking a message as complete

1. Read the SQS Record and get the message data.
2. Update the following on the message record:
  * `status` - to `COMPLETE`
  * `statusCode` - to `200`
  * `completedAt` - to the current time
  * `updatedAt` - to the current time
  * `expiresAt` - to the current time + the the `MessageRetentionPeriod` to ensure that the message record can exist for any messages that could possibly still come in. Those messages will need to know not to continue processing the message, because it is already complete.
3. Check the message type. If the message is a `task` then update the message cluster record. Moving this task from `incompleteTasks` to `completeTasks` and potentially updating the cluster record's status to show that the cluster is complete.