---
title: Create a Queue
---

## How to create a queue with CloudFormation

Inside of our `app` we have a directory `resources` that includes an `sqs.yml` file.

```yaml
mmContactExportQueue:
  Type: 'AWS::SQS::Queue'
  Properties:
    DelaySeconds: 5
    QueueName: ${self:service}-${self:provider.stage}-${self:custom.env.SQS.contactExportQueueName}
    ReceiveMessageWaitTimeSeconds: 10
    VisibilityTimeout: 60
    RedrivePolicy:
      deadLetterTargetArn:
        Fn::GetAtt: [mmDeadLetterQueue, Arn]
      maxReceiveCount: 2
```

### QueueName — (String)
The name of the new queue. The following limits apply to this name:

A queue name can have up to 80 characters.
Valid values: alphanumeric characters, hyphens (-), and underscores (_).
A FIFO queue name must end with the .fifo suffix.
Queue URLs and names are case-sensitive.

### VisibilityTimeout
The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.

Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.

_Usually, the value of the visibility timeout should be set to the maximum time that it takes your consumer to process and delete a message from the queue. You can perform a series of load tests on the consumer and get a rough idea about how long will it take. And if you are batching messages, note that the this should be multiplied by the batch size._

### ReceiveMessageWaitTimeSeconds
Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property.

### DelaySeconds – 

The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0.

### MaximumMessageSize – 

The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB).

### MessageRetentionPeriod – 

The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days).

### RedrivePolicy – 

The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. For more information about the redrive policy and dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

* **deadLetterTargetArn** – 
The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded.
* **maxReceiveCount** – 
The number of times a message is delivered to the source queue before being moved to the dead-letter queue. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue.
Note: The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
VisibilityTimeout – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.
The following attributes apply only to server-side-encryption: