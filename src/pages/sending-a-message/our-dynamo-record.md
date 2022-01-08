---
title: Our DynamoDB Record
---

## The Message Record

The message record that is stored for each message looks like this:

```ts twoslash include main
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

export type SQSMessageKey = `SQSMessage$${string}`

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

export type Error = {
  id: string,
  reason: any
}
// ---cut---
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
  error?: Error[]
}
```

### The Message Record _**id**_
This is assigned by the SQS queue when the message is sent. The `pKey` is always the same as this `id` with the prefix `SQSMessage$`. The message id comes with the message everytime the poller sends a message to a lambda.

### The Message Record _**type**_
The type is one of three options. `cluster`, `task`, or `message`. If the message is part of a `cluster` then it is a `task`, but if the message is alone then it is a `message`.

### The Message Record _**status**_ and _**statusCode**_
This is the current status of the record. The status is one of four options: `PRE FLIGHT`, `IN PROGRESS`, `COMPLETE`, or `ERROR`. The status code is the numerical value of the status.

### The Message Record _**consumtion_count**_
This is the number of times the message has attempted to be consumed by the lambda. This number should always be `0` or `1` if there was no error is processing the message. If the message is ever errored than we will continue to increment this number until the message is complete or the `consumtion_count` reaches the `maxConsumtionCount` set at the queue level.

### The Message Record  _**error**_
When a message errors, we will store the error in this array with the `id` of the message and the `reason` of the error.

### The Message Record _**meta**_
This is some meta data that can be used when processing the message. This can be larger than what is held in the body of the message, but accessing the meta data is _slower_ than accessing the body.

### The Message Record _**body**_
This is the body of the message. This is the data that is sent to the lambda.

### The Message Record _**expiresAt**_
By default message records will expire after 30 days. However, if a message is completed, it will be deleted. So only errored message records will be kept.

## More types

```ts twoslash
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
```