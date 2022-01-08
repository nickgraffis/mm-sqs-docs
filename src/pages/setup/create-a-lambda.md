---
title: Create a Lambda
order: 3
lastUpdated: 2022-01-08T07:12:46.226Z
---

## How to create the lambda that will be triggered by the SQS poller

Inside of our `app` we have a directory `resources` that includes an `functions.yml` file.

```yaml
name: ${self:service}-${self:provider.stage}-example-queue-lambda
  description: Example of a lambda that can process messages
  handler: src/handler/example.handler
  memorySize: ${self:custom.env.LAMBDA_CONFIG.memorySize}
  timeout: ${self:custom.env.LAMBDA_CONFIG.timeout}
  dependsOn: mmRole
  role:
    Fn::GetAtt: [mmRole, Arn]
  environment:
    region: ${self:provider.region}
    LAMBDA_TIMEOUT: ${self:custom.env.LAMBDA_CONFIG.timeout}
    MAX_RECEIVE_COUNT: 2
    modelmatchTable:
      Fn::ImportValue:
        Fn::Sub: '${self:custom.env.APP_CONFIG.namespace}-repository-${self:custom.env.APP_CONFIG.environment}-modelmatchTable'
    queueUrl:
      Ref: mmQueue
  events:
    - sqs:
        batchSize: 3
        arn:
          Fn::GetAtt: [mmQueue, Arn]
```

In general this is the same as any other lambda, but we have added a few extra parameters:

### events - 
The events that trigger the lambda, and we want to add a SQS event.

### batchSize -
The number of messages to process at a time. If the number of messages in the queue is less than the batch size, then the batch size will be the number of messages in the queue, but it will wait the time specified in the `ReceiveMessageWaitTimeSeconds` (set at the queue level) parameter for messages to arrive.

## Important environment variables
1. `modelmatchTable` — We need this to work with the MM Messaging API.
2. `queueUrl` — We need this to work with the SQS API.
3. `LAMBDA_TIMEOUT` - We need this to make sure that we are not allowing messages that may still be working in another lambda.
4. `MAX_RECEIVE_COUNT` - We need to know this if we are working with a queue cluster, and need to know when to run potential hooks after we have given up on a message, and potentially a cluster.

## Important permissions
Whatever role you are depending on, it needs to have the following permissions:

### The SQS Policy
```yaml
PolicyDocument:
  Version: '2012-10-17'
  Statement:
    - Effect: Allow
      Action:
        - sqs:GetQueueAttributes
        - sqs:GetQueueUrl
        - sqs:SendMessage
        - sqs:SendMessageBatch
        - sqs:DeleteMessage
        - sqs:DeleteMessageBatch
        - sqs:ReceiveMessage
      Resource:
        - Fn::Sub: 'arn:aws:sqs:${AWS::Region}:${AWS::AccountId}:${self:service}-${self:provider.stage}-${self:custom.env.SQS.queueName}'
```

### The DynamoDB Policy
```yaml
PolicyDocument:
  Version: '2012-10-17'
  Statement:
    - Effect: Allow
      Action:
        - dynamodb:BatchGetItem
        - dynamodb:BatchWriteItem
        - dynamodb:GetItem
        - dynamodb:PutItem
        - dynamodb:DeleteItem
        - dynamodb:Query
        - dynamodb:Scan
        - dynamodb:UpdateItem
        - dynamodb:DescribeStream
        - dynamodb:GetRecords
        - dynamodb:GetShardIterator
        - dynamodb:ListStreams
      Resource:
        - Fn::Sub: 'arn:aws:dynamodb:${AWS::Region}:${AWS::AccountId}:table/${self:custom.env.APP_CONFIG.namespace}-repository-${self:custom.env.APP_CONFIG.environment}-modelmatchTable'
        - Fn::Sub: 'arn:aws:dynamodb:${AWS::Region}:${AWS::AccountId}:table/${self:custom.env.APP_CONFIG.namespace}-repository-${self:custom.env.APP_CONFIG.environment}-modelmatchTable/index/*'
        - Fn::Sub: 'arn:aws:dynamodb:${AWS::Region}:${AWS::AccountId}:table/${self:custom.env.APP_CONFIG.namespace}-repository-${self:custom.env.APP_CONFIG.environment}-modelmatchTable/stream/*'
```