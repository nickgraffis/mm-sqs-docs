---
title: Our DynamoDB MessageCluster Record
lastUpdated: 2022-01-08T07:12:46.226Z
---

The message cluster record is a record in dynamo that contains the following information:

```ts twoslash
export type SQSMessageKey = `SQSMessage$${string}`

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

export type ErroredTask = {
  id: string,
  reason: any
}

// @errors: 2304

// ---cut---

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: ErroredTask[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams?: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

```