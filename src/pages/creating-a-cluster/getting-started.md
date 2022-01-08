--- 
title: Creating a Message Cluster
order: 4
lastUpdated: 2022-01-08T07:12:46.226Z
---

When you create a cluster, you are actually performing the following steps: 
1. Create a message cluster record in dynamo db
  a. Create a global storage bucket in s3, unless you decide not too by setting `omitGlobals` in the `MessageClusterParams` to `true`.
2. Send several batches of messages to the queue. The `API` will batch tasks up into the proper groups to be sent off to the queue.
3. When messages have been enqueued, use the response to create a message record for each message. This also uses batch write to dynamo to ensure efficency.
4. Update the message cluster record to indicate that the messages have been enqueued.

```ts twoslash
export type SQSMessageKey = `SQSMessage$${string}`;
// @errors: 2339
export type MessageClusterParams<Meta = any, Globals = any, TaskMeta = any> = {
  url: string;
  globals?: Globals;
  meta?: Meta;
  omitGlobal?: boolean;
  tasks: TaskMeta[]
}

export enum RecordType {
  cluster = 'cluster',
  task = 'task',
  message = 'message'
}

export type MessageClusterBody<TaskMeta = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: TaskMeta
  type: RecordType.task
}

export async function createMessageCluster<Meta = any, Globals = any, TaskMeta = any>({
  url,
  globals,
  meta,
  tasks,
  omitGlobals
}: MessageClusterParams<Meta, Globals, TaskMeta>) { return { pKey: `SQSMessage$${'jfkdld'}`, rKey: `SQSMessage$${url}` } }

// ---cut---

async function handler() {
  const { pKey, rKey } = await createMessageCluster({
    url: 'https://aws.sqs.us-east-1.amazonaws.com/123456789012/my-queue',
    globals: {
      initial: 'initial',
    },
    meta: {
      userId: '123456789012',
    },
    tasks: [
      {
        reqId: '123456789012',
      },
      {
        reqId: '123456789012',
      }
    ]
  })
}
```

This is creating a relatively small cluster of 2 messages. And in the case of message clusters each message body is formatted in a consistent way. Where the pKey and the rKey are for the message cluster record, and the task is the specific task that is being performed for that message.

```ts twoslash
export type SQSMessageKey = `SQSMessage$${string}`;
export enum RecordType {
  cluster = 'cluster',
  task = 'task',
  message = 'message'
}

// ---cut---
type TaskMeta = {
  reqId: string
}

export type MessageClusterBody<TaskMeta = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: TaskMeta
  type: RecordType.task
}

```