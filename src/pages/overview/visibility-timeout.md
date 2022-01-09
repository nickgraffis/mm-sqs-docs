--- 
title: Visibility Timeout Explained
lastUpdated: 2022-01-08T23:16:46.226Z
---

In short, the visibility timeout is the time that a message is unconsumable to a consumer. If a consumer process a message, it is deleted. If they fail to process the message, it is not deleted. Once the visibility timeout has expired, the message will be can be polled for again by a consumer.

![Visibility Timeout Succcess](/visability-timeout-success.png)

In this example the clock starts at `0:00`. Lambda A requests a message from the queue and is given back `message A`. Lambda A begins processing the message and after 20 seconds, Lambda B requests a message from hte queue, but because only `message A` is in the queue, and it's visibility timeout period is still ongoing, it is given nothing. 

After 25 seconds Lambda A finishes processing the message and it is deleted from the queue.

![Visibility Timeout Error](/visability-timeout-error.png)

In this example the same occurs, Lambda A gets `message A` and begins to process. after 10 seconds there is an error, and Lambda A is finished processing with an error. Although `message A` is not activily being processed, Lambda B cannot get it because it's visibility timeout period has not expired.

After 30 seconds (_the visibility timeout period_), Lambda C requests a message from the queue, and is given `message A` to try processing again.

::: success
💡 This process will continue until either the `maxReceiveCount` is reached, or the `MessageRetentionPeriod` is reached.
::: 

![Visibility Timeout Overflow](/visability-timeout-overflow.png)

It is possible for a message to take longer than the visibility timeout period to process. Let's say we have a lambda time limit of 60 seconds, but the visibility timeout is set to 30 seconds. If the message takes longer than 30 seconds to process, another lambda, Lambda C, could get the message and begin to process it. Meaning that the messsage will be process twice.

::: warning
:warning: AWS recommends that you set the visibility timeout to be 5 times the lambda execution time.
:::

In the `Model Match API` we can check for this issue in the `safeProcessAsync` function which uses the `isComplete` hook to check not only if the record is marked as complete on the message record, and the time that record was `updatedAt` - the current time is greater than the Lambda timeout.

We do this checking even if you do not create the message record ahead of time. Because message records are upserted into Dynamo DB.

![Message deduplication](/message-dedup.png)