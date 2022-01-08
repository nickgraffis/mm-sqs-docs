---
title: What can still be improved?
lastUpdated: 2022-01-08T07:12:46.226Z
---

## Movement of data
We end up looking up data multiple times in the lifecycle of a single message, if that message is part of a cluster. 

We perform a look up in the beginning to ensure that the message has not already been completed, and we perform once at the end to mark the message as complete. We might perform another in the middle if we need to use it to process somewhere.

We also use it in the `onClusterComplete` hook. Can we imporve the movement of this data to avoid multiple look ups, while still making sure to consistently read the latest data from dynamo? At what points are timing most important in this?

## FIFO Queues
Fifo queues (first in first out) ensure messages are processed in a certain order and guarantee exactly once delivery. 

## Dynamo DB Streaming
We can use the `DynamoDBStreams` API to get the latest data from dynamo, send that to a lambda and then to a websocket connection on API Gateway. 

## AWS now offers partial batch failure resolution
A lot of what we've worked on solves the problem, amazon finally decided to solve themselves. We can look into this, but although this feature is nice, it is not make or break, and our `API` is more robust.