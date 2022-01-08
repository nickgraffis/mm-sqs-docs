# Understanding Simple Queue Service

## Queue Configuration
### Visibility Timeout
Visibility timeout is an extreamly important pramater. It needs to always be greater than the function timeout to avoid duplicate invokes, and for low-concurrency, high-duration functions; we should set visibility timoeut to 6x funciton duration; this will avoid having that receive count move up unnecessarily and keep good messages out of the dead letter queue.

```yaml
VisibilityTimeout: 60
```

### Enable a Redrive Policy
It is extreamly important to enable a redrive policy to catch any messages that are _poisen_, meaning that they are causing a failure in the function. The `maxReceiveCount` is the number of times a message will be retried before being moved to the dead letter queue. The `deadLetterTargetArn` is the ARN of the queue that will receive the message.

```yaml
RedrivePolicy:
  deadLetterTargetArn:
    Fn::GetAtt: [mmDeadLetterQueue, Arn]
  maxReceiveCount: 2
```
## Function Configuration

### Batching
It is imporant to enable batching on the lambda that the queue will invoke. This will allow the queue to batch up messages and invoke the function in a single request. The `BatchSize` is the number of batches of messages that will be processed at once, and the `MaximumBathchingWindowInSeconds` is the maximum amount of time that will be spent waiting for new messages to fill the batch before it just begins. This is set to 0 by default.

```yaml
BatchSize: 5
MaximumBatchingWindowInSeconds: 1
```

### Handeling Errors
We should handle errors and catch these ourselves. This means that if only one message in a batch is _posien_ then we can manually delete the other messages in that batch that did succeed so they don't all get retired to the dead letter queue.

And also, manually set the the per-message visibility timeout to a low number on errors so that the retry process will occur quickly and the message can be sent to the dead letter queue.

## What is an SQS Event
The SQS event is a JSON object that contains the details of the event. The top level of this is the `Records` array, which contains the details of each message.

```json
{
    "Records": [
        {
            "messageId": "059f36b4-87a3-44ab-83d2-661975830a7d",
            "receiptHandle": "AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...",
            "body": "Test message.",
            "attributes": {
                "ApproximateReceiveCount": "1",
                "SentTimestamp": "1545082649183",
                "SenderId": "AIDAIENQZJOLO23YVJ4VO",
                "ApproximateFirstReceiveTimestamp": "1545082649185"
            },
            "messageAttributes": {},
            "md5OfBody": "e4e68fb7bd0e697a0ae8f1bb342846b3",
            "eventSource": "aws:sqs",
            "eventSourceARN": "arn:aws:sqs:us-east-2:123456789012:my-queue",
            "awsRegion": "us-east-2"
        },
    ]
}
```

When you are handeling batches of messages, you can use the `Records` array to handle each of these messages. You can then also use the `messageId` to delete the message from the queue if it succeeded and, maybe, some message failed. 

Lets see an example of how to potentially handle a batch of messages where some fail.

```js
const SQS = require('aws-sdk/clients/sqs')
const sqs = new SQS()

async function handler (event) {
  const messageProcessingPromises = event.Records.map(async (record, index) => {
      const messageResult = await processMessage(record)
      await sqs.deleteMessage({
        QueueUrl: getQueueUrl({ sqs, eventSourceARN: record.eventSourceARN })
        ReceiptHandle: record.receiptHandle
      }).promise()

      return messageResult
  })

  const processedMessages = await Promise.allSettled(messageProcessingPromises)
  const failedMessages = processedMessages.filter((r) => r.status === 'rejected')
  // At least one message failed to be processed; throw an error to keep the failed messages on the queue
  if (failedMessages.length) throw new Error('Partial batch failure')
  
  // All messages were processed successfully
  return null
}

async function processMessage(record) {
  ...
}

function getQueueUrl ({ sqs, eventSourceARN }) {
  const [, , , , accountId, queueName] = eventSourceARN.split(':')
  return `${sqs.endpoint.href}${accountId}/${queueName}`
}

module.exports.handler = handler
```

In this example here we are going to process each message and delete that message from the queue. The onces that were rejected, were never deleted. And then when we throw the error, the retry will only effect the messages that have not yet been deleted.

## What is a Dead Letter Queue
The dead letter queue is a queue that is used to store messages that failed to be processed. This is a queue that is configured to be a dead letter queue.

