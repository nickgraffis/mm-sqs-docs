---
title: Processing Messages
order: 5
lastUpdated: 2022-01-08T07:12:46.226Z
---
The biggest thing the `Model Match Message API` does it to help process messages in a way that doesn't retry messages that were successfull. This means that we can accept batches of messages, without having to process the messages multiple times, or without filling up the queue with messages that have already been processed. 

## Safely Process Message Batch - Sync
The basic method for this is the `safeProcessBatchSync` method. The sychronous part of this method is that it is not going to check DynamoDB at all for a message record. This means that if the message has already been processed, it will have no way of knowing. 

This will however, make sure that succsesfully processed messages are not retried, because of an error, and it is faster than checking DynamoDB for a message record.

Your `processMessage` callback needs to be an async function and can return `null` or `void`. It will recieve an indivudal message, not a batch. 

```ts twoslash
import { SQSEvent, SQSRecord } from "aws-lambda";

export async function safeProcessBatchSync(event: SQSEvent, processMessage: (record: SQSRecord) => Promise<null | void>): Promise<null> { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchSync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
```

## Safely Process Message Batch - Async
This method, `safeProcessBatchAsync` will check DynamoDB for a message record, and if it doesn't find one, it will create one. This means that a message will not be tried more than once. As it will be checking the status of the message record.

You can use this method weather or not the message record currently exists. Meaning, that if you send a message to the queue through the `AWS SDK` - you can still process messages using the `Model Match API`.

```ts twoslash
import { SQSEvent, SQSRecord } from "aws-lambda";

export async function safeProcessBatchAsync(event: SQSEvent, processMessage: (record: SQSRecord) => Promise<null | void>): Promise<null> { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchAsync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
```

## Actually Processing Messages
The actual processing that occurs in the callback should be seperated from the handler itself. This allows us to unit test processing functions.

You will probably start by reading the record itself and gaining access to any data that you might need to process the message. You can do that with the `readSQSRecord` method. 

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
  type: RecordType
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>
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

async function processMessage(record: SQSRecord) {
  const { body } = readSQSRecord<Body>(record)
}

```

In the event of a simple message, you could just take out the `body` from the message and use that for processing. You can also pass the generic `Body` type, to help read the Strigified body, as the body will be parsed when you recieve it. 

If your needs are more complex and you have to gain access to the meta data that you placed in the Meta field, you can use the `getMessageRecord` method to get the message record.

And because you are the one who sets the Meta field, you can pass the `Meta` type to ensure type safety.

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
  const { id, body, getMessageRecord } = 
    readSQSRecord<Body, MetaData>(record)
  
  const messageRecord = await getMessageRecord()
}

```

This metod is decoupled from the `readSQSRecord` method so that you can perform this async task in a different process, and only if necessary. 

::: success
🧠 What is consistent read?

Consistent read can be passed to `getMessageRecord` to ensure that the message record is not modified by another process. If you're processing is updating the message record, you can set this to `true` to make sure you are getting the latest data. However, this is slower, than setting it to `false`, which is the default.
:::

## Read SQS Record Response Type
Here is the return value of the `readSQSRecord` method.

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
// ---cut---
type Response<Body = any, Meta = any, Globals = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>,
  getMessageCluster?: 
    (consistentRead: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>
}
```
