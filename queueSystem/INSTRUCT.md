## Functions for queue system

* `sendMessage`: Send a single message to the queue and create a message record to track the message.
* `sendMessageBatch`: Send a batch of messages (max 10) to the queue and create a message record to track each message.
* `getMessageRecords`: Get the message record for a message. Optionally pass consistent read to ensure the message record is not modified by another process.
* `getMessageRecords`: Get many message records. Cannot pass consistent read.
* `getMessageCluster`: Get the record for a batch of connected messages (called a message cluster). Optionally pass consistent read to ensure the message record is not modified by another process.
* `getMessageClusterGlobals`: Get the global variables for a batch of connected messages (called a message cluster).
* `isComplete`: Check if a message is complete.
* `markeComplete`: Mark a message as complete.
* `updateMessageRecord`: Update a message record.
* `updateMessageCluster`: Update a message cluter record.
* `updateMessageClusterGlobals`: Update a message cluster globals. 
* `createMessageCluster`: Create a message cluster.


## Flow of a Message Cluster
1. From the initial Lambda. Call `createMessageCluster` to create a message cluster.
  * Pass the message cluster the following:
    * `meta`: _optional_ The meta data for the message cluster. A small piece of data stored in dynamo
    * `globals`: _optional_ A large piece of data stored in s3. Can updated at any time
    * `url`: _required_ The url of the queue
    * `tasks`: _required_ Each task is any object that is an explicit set of instructions for a message to perform. This is passed in the body of each message under the key `task` and is stored inside the message record on dynamo, and stored inside each `task` of the message cluster record.
    * `<TaskMeta>`: _typescript_ You can pass in the type of each task.
    * `<Globals>`: _typescript_ You can pass in the type of your global store.
    * `<Meta>`: _typescript_ You can pass in the type of your meta data.
  * The `createMessageCluster` function then sets up the following for you:
    * It creates a global store in s3 with the name of `SQSMESSAGE$<uuid>-globals.json`. This is where you can store any data that is needed to be shared between all messages in the cluster.
    * It creates a message cluster record in dynamo with the pKey of `SQSMESSAGE$<uuid>` and the rKey of `SQSMESSAGE<url>`. This keeps track of the messages in the cluster.
    * It sends of batches of messages to the queue.
    * It creates a message record in dynamo for each task (message) in the cluster.

2. From the lambda that gets triggered by the poller poling messages from the queue:
  * You have to check if the message `isComplete(record)` and if it returns true you can just return null.
  * If the message is not complete, you can begin processing it.
  * You will probably start by using `readSQSRecord(record)` to get the message record.
    * It returns to you the following: 
```ts
type Response<Meta = any, Globals = any, Body = any> = {
  url: string,
  pKey: SQSMessageKey,
  rKey: SQSMessageKey,
  task?: string,
  id?: string,
  body: Body,
  type: RecordType,
  getMessageCluster?: (consistentRead: boolean) => Promise<{ record: MessageClusterRecord<Meta>, getGlobals: () => Promise<Globals> }>,
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>,
}
```
    * You get the url, the pKey (if the message is part of a cluster), the rKey (if the message is part of a cluster), the task (if the message is part of a cluster), the id of the message will always be returned. The body of the message will always be returned. And the type of the message will always be returned.
    * You can use the `getMessageRecord` function to get the message record. The use of this would be to gain access to the meta data.
    * You can use the `getMessageCluster` function to get the message cluster record. The use of this would be to gain access to the meta data, or the incomplete tasks, and complete tasks.
    * You can use `getGlobals` to get the global store for this cluster.
  * When you are done processing a record call `markComplete(record)` to mark the message as complete in both the message record and the message cluster record.




# Sending a simple message
1. Call `sendMessage<Meta>(params: SendMessageRequest, meta?: Meta)` which resolves into the `{ pKey: string, rKey: string }` of the message record. Before it resolves it sends the message to the queue. Meta is some optional data that is stored on the dynamo record, but not on the message body.

2. When you get the message call `isComplete(record)` to check if the message is complete.

3. If the message is not complete you can begin processing it.

4. Call `readSQSRecord(record)` to parse some data from the message, like the body. You can also use the returned `getMessageRecord()` function to get the message record async.

5. When you are done processing a record call `markComplete(record)` to mark the message as complete.

6. What happens to the message record? It is deleted immediately.

7. What happens if there is an error? It is not deleted and sent back to the queue, if it passes the retry limit it is deleted from the queue, but the message record stays for 30 days.

8. What if I am allowing for batches of records? You can use the `safeProcessBatch(event: SQSEvent, processRecord: (record: SQSRecord) => Promise<void>)` function to process a batch of records. In this case the message record is deleted and the message is delted from the queue if it is processed without an error, but if it fails to process it is not deleted from the queue or dynamo and it can be safely reporcessed.

9. You can do the same thing with a batch of messages with `sendMessageBatch<Meta>(params: SendMessageBatchRequest, meta?: Meta)`. The meta data in this case is stored on each message record.


# Sending a message cluster
1. Create the cluster:
```ts
export type MessageClusterParams<Meta = any, Globals = any, TaskMeta = any> = {
  url: string,
  globals?: Globals,
  meta?: Meta,
  tasks: TaskMeta[]
}

export type MessageClusterBody<TaskMeta = any> = {
  pKey: SQSMessageKey,
  rKey: SQSMessageKey,
  task?: TaskMeta,
  type: RecordType.task
}

createMessageCluster<Meta, Globals, TaskMeta>({ 
  url, 
  globals, 
  meta,
  tasks
}: MessageClusterParams<Meta, Globals, TaskMeta>)
```

2. When you recieve the messgae you can process it like other messges:
  1. Call `isComplete(record)` to check if the message is complete.
  2. If the message is not complete you can begin processing it.
  3. Call `readSQSRecord(record)` to parse some data from the message, like the body. You can also use the returned `getMessageRecord()` function to get the message record async. Or you can use the `getMessageCluster()` function to get the message cluster record async. Or you can use `getGlobals()` to get the global store for this cluster.
  4. If you need you can update the globals with `updateGlobals<Globals>(globals: Globals | (globals: Globals) => Globals)`. This will update the globals with the new globals.
  5. When you are done processing a record call `markComplete(record)` to mark the message as complete. This updates the message cluster as well.
  6. If you need to run some logic when the cluster is complete you can use `onClusterComplete(key: { pKey: string, rKey: string }, callback: (cluster: MessageCluster<Meta, TaskMeta>, globals) => Promise<void>)` to run the logic when the cluster is complete.

3. What happens to the message records? Message records are deleted immediately. The message cluster record is deleted after 30 days.

4. What happens to the globals? The globals are avaliable for 30 days.

5. What happens if there is an error in the cluster? The errored message is not deleted and is sent back to the queue to be retried.