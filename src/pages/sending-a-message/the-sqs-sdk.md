---
title: The SQS SDK
lastUpdated: 2022-01-08T07:12:46.226Z
---

## API use of the SQS SDK
When you `sendMessage` or `sendMessageBatch` you can pass in a `SendMessageRequest` or `SendMessageBatchRequest` object and this behind the scenes will simply use the `SQS` SDK to send the message.

```ts twoslash
import { SendMessageRequest } from 'aws-sdk/clients/sqs'

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
// ---cut---
import AWS, { SQS } from 'aws-sdk'

const sqs = new AWS.SQS()
sqs.sendMessage(messageParams).promise()
```

This is extreamly simple, and the API is mostly here to help set up the message record that will be used to track the message(s).

## Why not just send a message directly?

You could! You would just loose out on the tracking of the message, meaning that you might be processing this message more than once. You might be erroring out messages that are actually valid and you would not know when the message was processed.