---
title: What is SQS
order: 2
---

## 📤 Amazon Simple Queue Service

SQS is a durable, scaleable message queue that can support any volume of messages, and producers can push at any rate, and once the messages are enqueued into a queue, one of more consumers polls the queue to recieve those messages, and can recieve a batch of messages at the same request.

::: success
💡 To make this service easier to use, and work for _Model Match_ specifically, we have the `Model Match Message API`.
:::

## At least once delivery and visibility timeout
SQS has _at least once delivery_ semantics, meaning that the message will be recieved at least once. This is implemented through _Visability Timeouts_. When a pollers polls a message the message will become invisible for a short period of time. If the consumer process the message, it is deleted, if they fail to process the message, it is not deleted and will be sent back to the queue. Once the _Visability Timeouts_ have expired, the message will be recieved again.

::: warning
:warning: If you set the Visibility Timeout to shorter than the time it takes for a batch of messages to be processed, you will run the risk of likely processing messages multiple times.
:::

## Lambda Poll Based Invocation
The lambda service polls, on our behalf, the sqs queue and if and when there is a message in the queue, only then does it invoke our code for the lambda function to run.


## SQS to Lambda: Batching
The lambda service will poll the queue for messages, and if there are any messages in the queue, it will invoke the lambda function and bring in a match of messages. This can scale automatically. The lambda function will then process the messages and then delete them from the queue.

![AWS SQS to Lambda: Batching](/batching.png)

::: success
💡 Batching is set at the lambda level, and is extreamly cost effective. This will result is messages being processed faster, and less lambda invokations. Up to 10,000 messages can be processed at a time if we use batching properly.
:::

## Lambda Concurrency
With SQS each event is enqueued in a queue where they can be buffered and reate limited. And they have to ability to use batching, and we have the ability to rate limit this consumtion.

What if we are sending messages too quickly, and we have an issue with a downstream system, like DynamoDB or S3? Imagine we had 300 connections to the downstream system, and we are sending messages too quickly, and we have an issue with one of the connections.

![AWS SQS to Lambda: Concurrency](/downstream_pressure.png)

For these reasons we can rate limit the funciton consumtion. Per function we controll concurrency with `ReservedConcurrentExecutions`. This concurrency ceiling allows us to cap the speed at which we drain the queue. 

::: danger
⛔️ It is possible that we could crash elastic search, or S3, or DynamoDB, or whatever, if we are sending messages too quickly.
:::

## Lambda Poller Scaling
Lambda runs a poller on our behalf, startin with concurrent batchs of 5 invocations at any moment. But if those invocations are running and there are more messges remain in the queue, than an additional 60 invokations each minuet afterwords; scaling all the way up until we drain the queue or we reach 1,000 max concurrent invokations. Assuming a match batch size of 10, that means that a single function paired with an SQS event source can process 10,000 messages in parrellel. 

## Errors
If we send a message to the queue and the queue sends a batch of messages to the poller, and the poller spins up a lambda function. Lets say that 4 of the 5 messages are processed successfully, and the 5th message fails. This means that the lambda will stop and all of the messages will be sent back to the queue.

If the 1st message fails, the lambda will stop and all the message will be sent back to the queue. This means that either we will be processing messages more than once, or we will possibly never process messages. 

To solve this issue, the `Model Match Message API` will do a couple things:
1. It will try processing all messages, swallowing any errors, until all messages are processed, either succesfully, or rejected. We then manually delete all succesfully processed messages before we throw an error, allowing the _poison message_ to be sent back to the queue.
2. To ensure that we are not processing messages more than once, we check on each message processing weather or not the queue has already been processed. If it has, we will not process the message.

## :thinking: What if it is ok for my messages to be processed multiple times? 
You can generally destructure the API to allow you to do this and anything else you want. The use case for this may be creating new history records, or updating existing ones. This process does not require huge amounts of processing power, and data will not be ruined if processed multiple times.

The trade off is basically the time and resources it takes to run DyanmoDB looks ups are slowing down your processing, but are providing some benefit.

## 🙅‍♂️ Error Handelilng
The `Model Match Message API` processes messages in a way that it synchronously processes all messages, and if any message fails, it will throw an error after deleting the messages from the queue that succeded. This means that using this process will require almost no extra processing power.

::: warning
:warning: Use the `Model Match Message API` for processing message batches in almost all cases.
::: 

If you want to omit the use of Database writes and just process the messages, you are giving up the ability to check errors in Dynamo, meaning that any client side requirment to see errant messages will not be met. However, you can still find errored messages in the dead letter queue and you can go through logs to find specific errors.

## 👫 Getting Multiple Deliveries
The `Model Match Message API` will check to make sure that a message hasn't already been processed. It is possible, and out of our control, that a message will show up in the poller more than once, even though we are handeling messages errors. 

To solve the trade off here, you can create the DynamoDB look up at only the queue lambda level. So you are not actually initializing a `Message Record` until you see it the very first time. This reduces time and processing by 50%, if you do not need to be aware of the message in the database.

The queue lambda will upsert the `Message Record` to the database on the first invokation, and upsert it again on any further invokations. Deleting the record if the message processes succesfully. 