---
title: Getting Started
order: 4
---

You can send a message easily, and let the api handle most of the heavy lifting. 

## TL;DR

You can send your message to the queue by passing in the [aws send message request object](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#sendMessage-property). Along with a meta object that contains some information about the message and can be grabbed later on in the process from dynamo db.

```ts twoslash
import { SendMessageRequest } from 'aws-sdk/clients/sqs'
export async function sendMessage<Meta = any, Body = any>(messageParams: SendMessageRequest, meta?: Meta) { 
  const pKey = 'messageId'
  const rKey = 'messageId'
  return { pKey, rKey }
}
// ---cut---

async function handler() {
  const key = await sendMessage({
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/my-queue",
      MessageBody: JSON.stringify({
        id: "12345",
        type: "my-message-type",
        data: {
          foo: "bar"
        }
      })
    }, {
      name: 'my-message-data',
    })
}

```

You can also, similarly, send a batch of up to ten messages at a time. The [aws send message batch request object](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#sendMessageBatch-property) requires an `Entries` array of objects that must include an `Id` unquie to the batch.

```ts twoslash
import { SendMessageBatchRequest } from 'aws-sdk/clients/sqs'
export async function sendMessageBatch<Meta = any, Body = any>(messageParams: SendMessageBatchRequest, meta?: Meta) {
  const pKey = 'messageId'
  const rKey = 'messageId'
  return [{ pKey, rKey }]
}
// ---cut---

async function handler() {
  const key = await sendMessageBatch({
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/my-queue",
    Entries: [
      {
        Id: "1",
        MessageBody: JSON.stringify({
        id: "12345",
        type: "my-message-type",
          data: {
            foo: "bar"
          }
        })
      }
    ]
    }, {
      name: 'my-message-data',
    })
}

```

In the background both of these functions will create a message record in dynamo db and send the message(s) to the queue through the `aws-sdk`. Read more about how we use the [aws-sdk](/sending-a-message/the-sqs-sdk) and how we track messages with [dynamo db](/sending-a-message/our-dynamo-record).

## Sending a message without creating a DynamoDB Record
In some cases you will want to send a message, or a batch of messages wihtout creating a DynamoDB record. This would be if the speed in returning to the client is extreamly important, and you don't need to be aware of the message.

To do this, just use the `AWS SDK` directly.

```ts twoslash
// @errors: 2769
import { SendMessageRequest, SendMessageBatchRequest } from 'aws-sdk/clients/sqs'

const messageParams: SendMessageRequest = {
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/my-queue",
  MessageBody: JSON.stringify({
    id: "12345",
    type: "my-message-type",
    data: {
      foo: "bar"
    }
  })
}

const batchMessageParams: SendMessageBatchRequest = {
  QueueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/my-queue",
  Entries: [
    {
      Id: 'jfkdl',
      MessageBody: JSON.stringify({
        id: "12345",
        type: "my-message-type",
        data: {
          foo: "bar"
        }
      })
    }
  ]
}
// ---cut---
import AWS from 'aws-sdk'

// Send a message
new AWS.SQS().sendMessage(messageParams).promise()

// Send batch messages
new AWS.SQS().sendMessageBatch(batchMessageParams).promise()
```