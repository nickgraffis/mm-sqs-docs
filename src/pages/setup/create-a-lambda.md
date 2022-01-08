---
title: Create a Lambda
order: 3
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
The number of messages to process at a time. If the number of messages in the queue is less than the batch size, then the batch size will be the number of messages in the queue, but it will wait the time specified in the `ReceiveMessageWaitTimeSeconds` parameter for messages to arrive.

## Important environment variables
1. `modelmatchTable` — We need this to work with the MM Messaging API.
2. `queueUrl` — We need this to work with the SQS API.

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