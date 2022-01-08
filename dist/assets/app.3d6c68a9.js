var B=Object.defineProperty,L=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var K=(a,e,s)=>e in a?B(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,M=(a,e)=>{for(var s in e||(e={}))G.call(e,s)&&K(a,s,e[s]);if(x)for(var s of x(e))F.call(e,s)&&K(a,s,e[s]);return a},w=(a,e)=>L(a,N(e));import{N as P,o as u,c as l,a as d,b as W,u as V,d as z,e as f,f as b,i as Y,g as J,r as k,h as p,w as C,j as g,k as v,l as I,t as T,n as R,F as _,m as E,p as U,q as H,V as Z}from"./vendor.09be1bf3.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};X();const ee=({isClient:a,router:e})=>{a&&(e.beforeEach(()=>{P.start()}),e.afterEach(()=>{P.done()}))};var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ee});const se="modulepreload",O={},ne="/",r=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${ne}${n}`,n in O)return;O[n]=!0;const t=n.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":se,t||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),t)return new Promise((c,m)=>{o.addEventListener("load",c),o.addEventListener("error",m)})})).then(()=>e())},ae=[{name:"setup-give-initial-lambdas-permission",path:"/setup/give-initial-lambdas-permission",component:()=>r(()=>import("./give-initial-lambdas-permission.aab8e82c.js"),["assets/give-initial-lambdas-permission.aab8e82c.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"setup-create-a-queue",path:"/setup/create-a-queue",component:()=>r(()=>import("./create-a-queue.3f5bf388.js"),["assets/create-a-queue.3f5bf388.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Create a Queue",duration:"3 min read",content:`How to create a queue with CloudFormation
Inside of our app we have a directory resources that includes an sqs.yml file.
mmContactExportQueue:
  Type: &#39AWS::SQS::Queue&#39
  Properties:
    DelaySeconds: 5
    QueueName: \${self:service}-\${self:provider.stage}-\${self:custom.env.SQS.contactExportQueueName}
    ReceiveMessageWaitTimeSeconds: 10
    VisibilityTimeout: 60
    RedrivePolicy:
      deadLetterTargetArn:
        Fn::GetAtt: [mmDeadLetterQueue, Arn]
      maxReceiveCount: 2
QueueName \u2014 (String)
The name of the new queue. The following limits apply to this name:
A queue name can have up to 80 characters.
Valid values: alphanumeric characters, hyphens (-), and underscores (_).
A FIFO queue name must end with the .fifo suffix.
Queue URLs and names are case-sensitive.
VisibilityTimeout
The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
Values must be from 0 to 43,200 seconds (12 hours). If you don&amp#39;t specify a value, AWS CloudFormation uses the default value of 30 seconds.
Usually, the value of the visibility timeout should be set to the maximum time that it takes your consumer to process and delete a message from the queue. You can perform a series of load tests on the consumer and get a rough idea about how long will it take. And if you are batching messages, note that the this should be multiplied by the batch size.
ReceiveMessageWaitTimeSeconds
Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn&amp#39;t yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property.
DelaySeconds \u2013
The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0.
MaximumMessageSize \u2013
The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB).
MessageRetentionPeriod \u2013
The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days).
RedrivePolicy \u2013
The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. For more information about the redrive policy and dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.
deadLetterTargetArn \u2013 
The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded.
maxReceiveCount \u2013 
The number of times a message is delivered to the source queue before being moved to the dead-letter queue. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue.
Note: The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
VisibilityTimeout \u2013 The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.
The following attributes apply only to server-side-encryption:

`}}},{name:"setup-create-a-lambda",path:"/setup/create-a-lambda",component:()=>r(()=>import("./create-a-lambda.5ab63786.js"),["assets/create-a-lambda.5ab63786.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Create a Lambda",duration:"3 min read",content:`How to create the lambda that will be triggered by the SQS poller
Inside of our app we have a directory resources that includes an functions.yml file.
name: \${self:service}-\${self:provider.stage}-example-queue-lambda
  description: Example of a lambda that can process messages
  handler: src/handler/example.handler
  memorySize: \${self:custom.env.LAMBDA_CONFIG.memorySize}
  timeout: \${self:custom.env.LAMBDA_CONFIG.timeout}
  dependsOn: mmRole
  role:
    Fn::GetAtt: [mmRole, Arn]
  environment:
    region: \${self:provider.region}
    modelmatchTable:
      Fn::ImportValue:
        Fn::Sub: &#39\${self:custom.env.APP_CONFIG.namespace}-repository-\${self:custom.env.APP_CONFIG.environment}-modelmatchTable&#39
    queueUrl:
      Ref: mmQueue
  events:
    - sqs:
        batchSize: 3
        arn:
          Fn::GetAtt: [mmQueue, Arn]
In general this is the same as any other lambda, but we have added a few extra parameters:
events -
The events that trigger the lambda, and we want to add a SQS event.
batchSize -
The number of messages to process at a time. If the number of messages in the queue is less than the batch size, then the batch size will be the number of messages in the queue, but it will wait the time specified in the ReceiveMessageWaitTimeSeconds parameter for messages to arrive.
Important environment variables
modelmatchTable \u2014 We need this to work with the MM Messaging API.
queueUrl \u2014 We need this to work with the SQS API.

Important permissions
Whatever role you are depending on, it needs to have the following permissions:
The SQS Policy
PolicyDocument:
  Version: &#392012-10-17&#39
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
        - Fn::Sub: &#39arn:aws:sqs:\${AWS::Region}:\${AWS::AccountId}:\${self:service}-\${self:provider.stage}-\${self:custom.env.SQS.queueName}&#39
The DynamoDB Policy
PolicyDocument:
  Version: &#392012-10-17&#39
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
        - Fn::Sub: &#39arn:aws:dynamodb:\${AWS::Region}:\${AWS::AccountId}:table/\${self:custom.env.APP_CONFIG.namespace}-repository-\${self:custom.env.APP_CONFIG.environment}-modelmatchTable&#39
        - Fn::Sub: &#39arn:aws:dynamodb:\${AWS::Region}:\${AWS::AccountId}:table/\${self:custom.env.APP_CONFIG.namespace}-repository-\${self:custom.env.APP_CONFIG.environment}-modelmatchTable/index/*&#39
        - Fn::Sub: &#39arn:aws:dynamodb:\${AWS::Region}:\${AWS::AccountId}:table/\${self:custom.env.APP_CONFIG.namespace}-repository-\${self:custom.env.APP_CONFIG.environment}-modelmatchTable/stream/*&#39
`}}},{name:"sending-a-message-the-sqs-sdk",path:"/sending-a-message/the-sqs-sdk",component:()=>r(()=>import("./the-sqs-sdk.493f41f9.js"),["assets/the-sqs-sdk.493f41f9.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"The SQS SDK",duration:"1 min read",content:`API use of the SQS SDK
When you sendMessage or sendMessageBatch you can pass in a SendMessageRequest or SendMessageBatchRequest object and this behind the scenes will simply use the SQS SDK to send the message.
import { SendMessageRequest } from &#39aws-sdk/clients/sqs&#39

const messageParams: SendMessageRequest = {
  QueueUrl: &quothttps://sqs.us-east-1.amazonaws.com/123456789012/my-queue&quot,
  MessageBody: JSON.stringify({
    id: &quot12345&quot,
    type: &quotmy-message-type&quot,
    data: {
      foo: &quotbar&quot
    }
  })
}
// ---cut---
import AWS, { SQS } from &#39aws-sdk&#39

const sqs = new AWS.SQS()
sqs.sendMessage(messageParams).promise()
This is extreamly simple, and the API is mostly here to help set up the message record that will be used to track the message(s).
Why not just send a message directly?
You could! You would just loose out on the tracking of the message, meaning that you might be processing this message more than once. You might be erroring out messages that are actually valid and you would not know when the message was processed.
`}}},{name:"sending-a-message-our-dynamo-record",path:"/sending-a-message/our-dynamo-record",component:()=>r(()=>import("./our-dynamo-record.20acfcf3.js"),["assets/our-dynamo-record.20acfcf3.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Our DynamoDB Record",duration:"3 min read",content:`The Message Record
The message record that is stored for each message looks like this:
declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type SQSMessageKey = \`SQSMessage$\${string}\`

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

export type Error = {
  id: string,
  reason: any
}
// ---cut---
export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: Error[]
}
The Message Record id
This is assigned by the SQS queue when the message is sent. The pKey is always the same as this id with the prefix SQSMessage$. The message id comes with the message everytime the poller sends a message to a lambda.
The Message Record type
The type is one of three options. cluster, task, or message. If the message is part of a cluster then it is a task, but if the message is alone then it is a message.
The Message Record status and statusCode
This is the current status of the record. The status is one of four options: PRE FLIGHT, IN PROGRESS, COMPLETE, or ERROR. The status code is the numerical value of the status.
The Message Record consumtion_count
This is the number of times the message has attempted to be consumed by the lambda. This number should always be 0 or 1 if there was no error is processing the message. If the message is ever errored than we will continue to increment this number until the message is complete or the consumtion_count reaches the maxConsumtionCount set at the queue level.
The Message Record  error
When a message errors, we will store the error in this array with the id of the message and the reason of the error.
The Message Record meta
This is some meta data that can be used when processing the message. This can be larger than what is held in the body of the message, but accessing the meta data is slower than accessing the body.
The Message Record body
This is the body of the message. This is the data that is sent to the lambda.
The Message Record expiresAt
By default message records will expire after 30 days. However, if a message is completed, it will be deleted. So only errored message records will be kept.
More types
export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}
`}}},{name:"sending-a-message-getting-started",path:"/sending-a-message/getting-started",component:()=>r(()=>import("./getting-started.ecdbf0b6.js"),["assets/getting-started.ecdbf0b6.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Getting Started",duration:"3 min read",content:`You can send a message easily, and let the api handle most of the heavy lifting. 
TL;DR
You can send your message to the queue by passing in the aws send message request object. Along with a meta object that contains some information about the message and can be grabbed later on in the process from dynamo db.
import { SendMessageRequest } from &#39aws-sdk/clients/sqs&#39
export async function sendMessage(messageParams: SendMessageRequest, meta?: Meta) { 
  const pKey = &#39messageId&#39
  const rKey = &#39messageId&#39
  return { pKey, rKey }
}
// ---cut---

async function handler() {
  const key = await sendMessage({
    QueueUrl: &quothttps://sqs.us-east-1.amazonaws.com/123456789012/my-queue&quot,
      MessageBody: JSON.stringify({
        id: &quot12345&quot,
        type: &quotmy-message-type&quot,
        data: {
          foo: &quotbar&quot
        }
      })
    }, {
      name: &#39my-message-data&#39,
    })
}

You can also, similarly, send a batch of up to ten messages at a time. The aws send message batch request object requires an Entries array of objects that must include an Id unquie to the batch.
import { SendMessageBatchRequest } from &#39aws-sdk/clients/sqs&#39
export async function sendMessageBatch(messageParams: SendMessageBatchRequest, meta?: Meta) {
  const pKey = &#39messageId&#39
  const rKey = &#39messageId&#39
  return [{ pKey, rKey }]
}
// ---cut---

async function handler() {
  const key = await sendMessageBatch({
    QueueUrl: &quothttps://sqs.us-east-1.amazonaws.com/123456789012/my-queue&quot,
    Entries: [
      {
        Id: &quot1&quot,
        MessageBody: JSON.stringify({
        id: &quot12345&quot,
        type: &quotmy-message-type&quot,
          data: {
            foo: &quotbar&quot
          }
        })
      }
    ]
    }, {
      name: &#39my-message-data&#39,
    })
}

In the background both of these functions will create a message record in dynamo db and send the message(s) to the queue through the aws-sdk. Read more about how we use the aws-sdk and how we track messages with dynamo db.
Sending a message without creating a DynamoDB Record
In some cases you will want to send a message, or a batch of messages wihtout creating a DynamoDB record. This would be if the speed in returning to the client is extreamly important, and you don&amp#39;t need to be aware of the message.
To do this, just use the AWS SDK directly.
// @errors: 2769
import { SendMessageRequest, SendMessageBatchRequest } from &#39aws-sdk/clients/sqs&#39

const messageParams: SendMessageRequest = {
  QueueUrl: &quothttps://sqs.us-east-1.amazonaws.com/123456789012/my-queue&quot,
  MessageBody: JSON.stringify({
    id: &quot12345&quot,
    type: &quotmy-message-type&quot,
    data: {
      foo: &quotbar&quot
    }
  })
}

const batchMessageParams: SendMessageBatchRequest = {
  QueueUrl: &quothttps://sqs.us-east-1.amazonaws.com/123456789012/my-queue&quot,
  Entries: [
    {
      Id: &#39jfkdl&#39,
      MessageBody: JSON.stringify({
        id: &quot12345&quot,
        type: &quotmy-message-type&quot,
        data: {
          foo: &quotbar&quot
        }
      })
    }
  ]
}
// ---cut---
import AWS from &#39aws-sdk&#39

// Send a message
new AWS.SQS().sendMessage(messageParams).promise()

// Send batch messages
new AWS.SQS().sendMessageBatch(batchMessageParams).promise()
`}}},{name:"queueSystem-README",path:"/queuesystem/readme",component:()=>r(()=>import("./README.b6e3c9b6.js"),["assets/README.b6e3c9b6.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"4 min read",content:`Understanding Simple Queue Service
Queue Configuration
Visibility Timeout
Visibility timeout is an extreamly important pramater. It needs to always be greater than the function timeout to avoid duplicate invokes, and for low-concurrency, high-duration functions; we should set visibility timoeut to 6x funciton duration; this will avoid having that receive count move up unnecessarily and keep good messages out of the dead letter queue.
VisibilityTimeout: 60
Enable a Redrive Policy
It is extreamly important to enable a redrive policy to catch any messages that are poisen, meaning that they are causing a failure in the function. The maxReceiveCount is the number of times a message will be retried before being moved to the dead letter queue. The deadLetterTargetArn is the ARN of the queue that will receive the message.
RedrivePolicy:
  deadLetterTargetArn:
    Fn::GetAtt: [mmDeadLetterQueue, Arn]
  maxReceiveCount: 2
Function Configuration
Batching
It is imporant to enable batching on the lambda that the queue will invoke. This will allow the queue to batch up messages and invoke the function in a single request. The BatchSize is the number of batches of messages that will be processed at once, and the MaximumBathchingWindowInSeconds is the maximum amount of time that will be spent waiting for new messages to fill the batch before it just begins. This is set to 0 by default.
BatchSize: 5
MaximumBatchingWindowInSeconds: 1
Handeling Errors
We should handle errors and catch these ourselves. This means that if only one message in a batch is posien then we can manually delete the other messages in that batch that did succeed so they don&amp#39;t all get retired to the dead letter queue.
And also, manually set the the per-message visibility timeout to a low number on errors so that the retry process will occur quickly and the message can be sent to the dead letter queue.
What is an SQS Event
The SQS event is a JSON object that contains the details of the event. The top level of this is the Records array, which contains the details of each message.
{
    &quotRecords&quot: [
        {
            &quotmessageId&quot: &quot059f36b4-87a3-44ab-83d2-661975830a7d&quot,
            &quotreceiptHandle&quot: &quotAQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...&quot,
            &quotbody&quot: &quotTest message.&quot,
            &quotattributes&quot: {
                &quotApproximateReceiveCount&quot: &quot1&quot,
                &quotSentTimestamp&quot: &quot1545082649183&quot,
                &quotSenderId&quot: &quotAIDAIENQZJOLO23YVJ4VO&quot,
                &quotApproximateFirstReceiveTimestamp&quot: &quot1545082649185&quot
            },
            &quotmessageAttributes&quot: {},
            &quotmd5OfBody&quot: &quote4e68fb7bd0e697a0ae8f1bb342846b3&quot,
            &quoteventSource&quot: &quotaws:sqs&quot,
            &quoteventSourceARN&quot: &quotarn:aws:sqs:us-east-2:123456789012:my-queue&quot,
            &quotawsRegion&quot: &quotus-east-2&quot
        },
    ]
}
When you are handeling batches of messages, you can use the Records array to handle each of these messages. You can then also use the messageId to delete the message from the queue if it succeeded and, maybe, some message failed. 
Lets see an example of how to potentially handle a batch of messages where some fail.
const SQS = require(&#39aws-sdk/clients/sqs&#39)
const sqs = new SQS()

async function handler (event) {
  const messageProcessingPromises = event.Records.map(async (record, index) =&gt {
      const messageResult = await processMessage(record)
      await sqs.deleteMessage({
        QueueUrl: getQueueUrl({ sqs, eventSourceARN: record.eventSourceARN })
        ReceiptHandle: record.receiptHandle
      }).promise()

      return messageResult
  })

  const processedMessages = await Promise.allSettled(messageProcessingPromises)
  const failedMessages = processedMessages.filter((r) =&gt r.status === &#39rejected&#39)
  // At least one message failed to be processed; throw an error to keep the failed messages on the queue
  if (failedMessages.length) throw new Error(&#39Partial batch failure&#39)

  // All messages were processed successfully
  return null
}

async function processMessage(record) {
  ...
}

function getQueueUrl ({ sqs, eventSourceARN }) {
  const [, , , , accountId, queueName] = eventSourceARN.split(&#39:&#39)
  return \`\${sqs.endpoint.href}\${accountId}/\${queueName}\`
}

module.exports.handler = handler
In this example here we are going to process each message and delete that message from the queue. The onces that were rejected, were never deleted. And then when we throw the error, the retry will only effect the messages that have not yet been deleted.
What is a Dead Letter Queue
The dead letter queue is a queue that is used to store messages that failed to be processed. This is a queue that is configured to be a dead letter queue.
`}}},{name:"queueSystem-INSTRUCT",path:"/queuesystem/instruct",component:()=>r(()=>import("./INSTRUCT.298f72f4.js"),["assets/INSTRUCT.298f72f4.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"6 min read",content:`Functions for queue system
sendMessage: Send a single message to the queue and create a message record to track the message.
sendMessageBatch: Send a batch of messages (max 10) to the queue and create a message record to track each message.
getMessageRecords: Get the message record for a message. Optionally pass consistent read to ensure the message record is not modified by another process.
getMessageRecords: Get many message records. Cannot pass consistent read.
getMessageCluster: Get the record for a batch of connected messages (called a message cluster). Optionally pass consistent read to ensure the message record is not modified by another process.
getMessageClusterGlobals: Get the global variables for a batch of connected messages (called a message cluster).
isComplete: Check if a message is complete.
markeComplete: Mark a message as complete.
updateMessageRecord: Update a message record.
updateMessageCluster: Update a message cluter record.
updateMessageClusterGlobals: Update a message cluster globals. 
createMessageCluster: Create a message cluster.

Flow of a Message Cluster
From the initial Lambda. Call createMessageCluster to create a message cluster.
Pass the message cluster the following:meta: optional The meta data for the message cluster. A small piece of data stored in dynamo
globals: optional A large piece of data stored in s3. Can updated at any time
url: required The url of the queue
tasks: required Each task is any object that is an explicit set of instructions for a message to perform. This is passed in the body of each message under the key task and is stored inside the message record on dynamo, and stored inside each task of the message cluster record.
\`\`: typescript You can pass in the type of each task.
\`\`: typescript You can pass in the type of your global store.
\`\`: typescript You can pass in the type of your meta data.


The createMessageCluster function then sets up the following for you:It creates a global store in s3 with the name of SQSMESSAGE$-globals.json. This is where you can store any data that is needed to be shared between all messages in the cluster.
It creates a message cluster record in dynamo with the pKey of SQSMESSAGE$ and the rKey of SQSMESSAGE. This keeps track of the messages in the cluster.
It sends of batches of messages to the queue.
It creates a message record in dynamo for each task (message) in the cluster.




From the lambda that gets triggered by the poller poling messages from the queue:
You have to check if the message isComplete(record) and if it returns true you can just return null.
If the message is not complete, you can begin processing it.
You will probably start by using readSQSRecord(record) to get the message record.It returns to you the following: type Response = {
url: string,
pKey: SQSMessageKey,
rKey: SQSMessageKey,
task?: string,
id?: string,
body: Body,
type: RecordType,
getMessageCluster?: (consistentRead: boolean) =&gt Promise, getGlobals: () =&gt Promise }&gt,
getMessageRecord: (consistentRead: boolean) =&gt Promise&gt,
}

You get the url, the pKey (if the message is part of a cluster), the rKey (if the message is part of a cluster), the task (if the message is part of a cluster), the id of the message will always be returned. The body of the message will always be returned. And the type of the message will always be returned.
You can use the getMessageRecord function to get the message record. The use of this would be to gain access to the meta data.
You can use the getMessageCluster function to get the message cluster record. The use of this would be to gain access to the meta data, or the incomplete tasks, and complete tasks.
You can use getGlobals to get the global store for this cluster.


When you are done processing a record call markComplete(record) to mark the message as complete in both the message record and the message cluster record.



Sending a simple message
Call sendMessage(params: SendMessageRequest, meta?: Meta) which resolves into the { pKey: string, rKey: string } of the message record. Before it resolves it sends the message to the queue. Meta is some optional data that is stored on the dynamo record, but not on the message body.

When you get the message call isComplete(record) to check if the message is complete.

If the message is not complete you can begin processing it.

Call readSQSRecord(record) to parse some data from the message, like the body. You can also use the returned getMessageRecord() function to get the message record async.

When you are done processing a record call markComplete(record) to mark the message as complete.

What happens to the message record? It is deleted immediately.

What happens if there is an error? It is not deleted and sent back to the queue, if it passes the retry limit it is deleted from the queue, but the message record stays for 30 days.

What if I am allowing for batches of records? You can use the safeProcessBatch(event: SQSEvent, processRecord: (record: SQSRecord) =&ampgt; Promise) function to process a batch of records. In this case the message record is deleted and the message is delted from the queue if it is processed without an error, but if it fails to process it is not deleted from the queue or dynamo and it can be safely reporcessed.

You can do the same thing with a batch of messages with sendMessageBatch(params: SendMessageBatchRequest, meta?: Meta). The meta data in this case is stored on each message record.


Sending a message cluster
Create the cluster:export type MessageClusterParams = {
url: string,
globals?: Globals,
meta?: Meta,
tasks: TaskMeta[]
}



export type MessageClusterBody = {
  pKey: SQSMessageKey,
  rKey: SQSMessageKey,
  task?: TaskMeta,
  type: RecordType.task
}
createMessageCluster({ 
  url, 
  globals, 
  meta,
  tasks
}: MessageClusterParams)
\`\`\`
When you recieve the messgae you can process it like other messges:
Call isComplete(record) to check if the message is complete.
If the message is not complete you can begin processing it.
Call readSQSRecord(record) to parse some data from the message, like the body. You can also use the returned getMessageRecord() function to get the message record async. Or you can use the getMessageCluster() function to get the message cluster record async. Or you can use getGlobals() to get the global store for this cluster.
If you need you can update the globals with updateGlobals(globals: Globals | (globals: Globals) =&ampgt; Globals). This will update the globals with the new globals.
When you are done processing a record call markComplete(record) to mark the message as complete. This updates the message cluster as well.
If you need to run some logic when the cluster is complete you can use onClusterComplete(key: { pKey: string, rKey: string }, callback: (cluster: MessageCluster, globals) =&ampgt; Promise) to run the logic when the cluster is complete.


What happens to the message records? Message records are deleted immediately. The message cluster record is deleted after 30 days.

What happens to the globals? The globals are avaliable for 30 days.

What happens if there is an error in the cluster? The errored message is not deleted and is sent back to the queue to be retried.


`}}},{name:"processing-messages-processing-tasks-of-a-cluster",path:"/processing-messages/processing-tasks-of-a-cluster",component:()=>r(()=>import("./processing-tasks-of-a-cluster.cd81c032.js"),["assets/processing-tasks-of-a-cluster.cd81c032.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Processing Messages (Tasks) that are part of a Cluster",duration:"11 min read",content:`-
Reading the SQS Record for a Message, Message Record, and Message Cluster
You can start processing messages that are part of a cluster the same way that you would process a message that is not part of a cluster. You can use the readSQSRecord to get access to the message data and an additional getMessageCluster method to get access to the cluster data.
import { SQSRecord } from &#39aws-lambda&#39
import AWS from &#39aws-sdk&#39

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) =&gt Promise,
      getGlobals: () =&gt Promise 
    }&gt,
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord(record)

  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster &amp&amp 
    await getMessageCluster()
}

Getting the Globals for a Message Cluster
When you call getMessageCluster() you are returned a method to get the globals for the cluster.
import { SQSRecord } from &#39aws-lambda&#39
import AWS from &#39aws-sdk&#39

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) =&gt Promise,
      getGlobals: () =&gt Promise 
    }&gt,
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

type Globals = {
  firstName: string,
  lastName: string
}[]

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord(record)

  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster &amp&amp 
    await getMessageCluster()

  if (messageCluster) {
    const globals = await messageCluster.getGlobals()
  }
}

This is done so that you do not waste time fetching data from S3 if it is not needed. 
::: dracula
\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F Hey, a possible improvement here would be to store the s3 bucket params in the message body as well. This means that you could get global data without getting the message cluster record.
::: 
Updating Global Data
You can use updateClusterGlobals() to update the globals for a cluster. You can pass it the key as either the pKey and rKey object, or simply just the pKey as the global data store only uses the pKey. 
You can also pass it a new globals object, or pass it a function that returns a new globals object and accepts the old globals object.
import { SQSRecord } from &#39aws-lambda&#39
import AWS from &#39aws-sdk&#39

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) =&gt Promise,
      getGlobals: () =&gt Promise 
    }&gt,
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistentRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}
export async function updateClusterGlobals(
  key: { pKey: SQSMessageKey, rKey: SQSMessageKey }, 
  globals: Globals | ((globals: Globals) =&gt Globals)
): Promise {
  return { pKey: &#39&#39, rKey: &#39&#39 }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

type Globals = {
  firstName: string,
  lastName: string
}[]

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord(record)

  const messageRecord = await getMessageRecord()

  // Perform a total rewrite of the global store
  await updateClusterGlobals(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    [{ firstName: &#39John&#39, lastName: &#39Doe&#39 }]
  )

  // Perform a insert of data to the global store
  await updateClusterGlobals(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    (globals: Globals) =&gt [...globals, { firstName: &#39John&#39, lastName: &#39Doe&#39 }]
  )
}
`}}},{name:"processing-messages-getting-started",path:"/processing-messages/getting-started",component:()=>r(()=>import("./getting-started.a0268b5e.js"),["assets/getting-started.a0268b5e.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Processing Messages",duration:"10 min read",content:`The biggest thing the Model Match Message API does it to help process messages in a way that doesn&amp#39;t retry messages that were successfull. This means that we can accept batches of messages, without having to process the messages multiple times, or without filling up the queue with messages that have already been processed. 
Safely Process Message Batch - Sync
The basic method for this is the safeProcessBatchSync method. The sychronous part of this method is that it is not going to check DynamoDB at all for a message record. This means that if the message has already been processed, it will have no way of knowing. 
This will however, make sure that succsesfully processed messages are not retried, because of an error, and it is faster than checking DynamoDB for a message record.
Your processMessage callback needs to be an async function and can return null or void. It will recieve an indivudal message, not a batch. 
import { SQSEvent, SQSRecord } from &quotaws-lambda&quot;

export async function safeProcessBatchSync(event: SQSEvent, processMessage: (record: SQSRecord) =&gt Promise): Promise { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchSync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
Safely Process Message Batch - Async
This method, safeProcessBatchAsync will check DynamoDB for a message record, and if it doesn&amp#39;t find one, it will create one. This means that a message will not be tried more than once. As it will be checking the status of the message record.
You can use this method weather or not the message record currently exists. Meaning, that if you send a message to the queue through the AWS SDK - you can still process messages using the Model Match API.
import { SQSEvent, SQSRecord } from &quotaws-lambda&quot;

export async function safeProcessBatchAsync(event: SQSEvent, processMessage: (record: SQSRecord) =&gt Promise): Promise { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchAsync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
Actually Processing Messages
The actual processing that occurs in the callback should be seperated from the handler itself. This allows us to unit test processing functions.
You will probably start by reading the record itself and gaining access to any data that you might need to process the message. You can do that with the readSQSRecord method. 
import { SQSRecord } from &#39aws-lambda&#39
import AWS from &#39aws-sdk&#39

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistenRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

async function processMessage(record: SQSRecord) {
  const { body } = readSQSRecord(record)
}

In the event of a simple message, you could just take out the body from the message and use that for processing. You can also pass the generic Body type, to help read the Strigified body, as the body will be parsed when you recieve it. 
If your needs are more complex and you have to gain access to the meta data that you placed in the Meta field, you can use the getMessageRecord method to get the message record.
And because you are the one who sets the Meta field, you can pass the Meta type to ensure type safety.
import { SQSRecord } from &#39aws-lambda&#39
import AWS from &#39aws-sdk&#39

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistenRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord } = 
    readSQSRecord(record)

  const messageRecord = await getMessageRecord()
}

This metod is decoupled from the readSQSRecord method so that you can perform this async task in a different process, and only if necessary. 
::: success
\u{1F9E0} What is consistent read?
Consistent read can be passed to getMessageRecord to ensure that the message record is not modified by another process. If you&amp#39;re processing is updating the message record, you can set this to true to make sure you are getting the latest data. However, this is slower, than setting it to false, which is the default.
:::
Read SQS Record Response Type
Here is the return value of the readSQSRecord method.
export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export type MessageClusterRecord = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task[]
  incompleteTasks: Task[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}

export type Task = {
  meta: Meta
  type: &#39task&#39
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}
// ---cut---
type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead: boolean) =&gt Promise&gt,
  getMessageCluster?: 
    (consistentRead: boolean) =&gt Promise,
      getGlobals: () =&gt Promise 
    }&gt
}
`}}},{name:"processing-messages-advanced-features",path:"/processing-messages/advanced-features",component:()=>r(()=>import("./advanced-features.218af2d8.js"),["assets/advanced-features.218af2d8.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Advanced Features",duration:"7 min read",content:`Updating a Message Record
If you ever need to update a message record&amp#39;s meta data you can do so by using the updateMessageRecord function. You can update anything insdie the message record, except the pKey and rKey, but is advised not to update the message record directly, but rather, use methods to perform updates to status, statusCode, completedAt, updatedAt, expiresAt, consumtion_count, and error.
export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}
import { SQSRecord } from &#39aws-lambda&#39
export async function updateMessageRecord(
  key: { pKey: string; rKey: string },
  record: MessageRecord | ((record: MessageRecord) =&gt MessageRecord),
): Promise { return { pKey: &#39&#39, rKey: &#39&#39 } }


type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistenRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

// ---cut---

type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

async function processMessage(record: SQSRecord) {
  const { id, body, url, getMessageRecord } = 
    readSQSRecord(record)

  await updateMessageRecord(
    { pKey: \`SQSMessage$\${id}\`, rKey: \`SQSMessage$\${url}\` }, 
    (oldRecord) =&gt {
      return {
        ...oldRecord,
        meta: {
          stuff: &#39new stuff&#39
        }
      }
    }
  )
}
To make it easy to make certain that the record is not being fundamentally changed, you can pass the second parameter of updateMessageRecord a function that will get the old record and return the new record.
Marking a message as complete
If you use the safeProcessMessageAsync method, this will occur for you automatically. Marking a message as complete does several important things, incluing checking the timing of other concurrent messages and updating the record in the order recieved. 
::: danger
Avoid using updateMessageRecord to directly marke a message as complete. 
:::
import { SQSRecord } from &#39aws-lambda&#39
export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified extends String {
  private ___stringified: T
}

interface JSON {
  stringify(
    value: T,
    replacer?: (key: string, value: any) =&gt any,
    space?: string | number
  ): string &amp Stringified
  parse(text: Stringified, reviver?: (key: any, value: any) =&gt any): T
  parse(text: string, reviver?: (key: any, value: any) =&gt any): any
}

export enum RecordType {
  cluster = &#39cluster&#39,
  task = &#39task&#39,
  message = &#39message&#39
}

export enum Status {
  preFlight = &#39PRE FLIGHT&#39,
  inProgress = &#39IN PROGRESS&#39,
  complete = &#39COMPLETE&#39,
  error = &#39ERROR&#39
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

export type MessageRecord = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String &amp Stringified
  type: RecordType
  startedAt: string
  status: Status
  statusCode: StatusCode
  completedAt: string | null
  updatedAt: string
  expiresAt: string
  consumtion_count: number
  error?: any[]
}
export async function updateMessageRecord(
  key: { pKey: string; rKey: string },
  record: MessageRecord | ((record: MessageRecord) =&gt MessageRecord),
): Promise { return { pKey: &#39&#39, rKey: &#39&#39 } }


type Response = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead?: boolean) =&gt Promise&gt
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord(record: SQSRecord): Response {
  const body: any = JSON.parse(record.body)
  const url = &#39jfkdla;f&#39
  const pKey = \`SQSMesssage$\${&#39fdfdafda&#39}\` as SQSMessageKey
  const id = &#39jfkdlafjkdal;&#39
  const rKey = \`SQSMesssage$\${&#39jfkdla;fjkda&#39}\` as SQSMessageKey
  const task = undefined
  const type = RecordType.message || RecordType.cluster
  return {
    url,
    pKey,
    rKey,
    task,
    body,
    type,
    id: record.messageId,
    getMessageRecord: (consistenRead = false) =&gt
      (async () =&gt ({
        pKey,
        rKey,
        id,
        url,
        meta: body.meta,
        body: body.body,
        type,
        startedAt: body.startedAt,
        status: body.status,
        statusCode: body.statusCode,
        completedAt: body.completedAt,
        updatedAt: body.updatedAt,
        expiresAt: body.expiresAt,
        consumtion_count: body.consumtion_count,
        error: body.error
      }))(),
  }
}

export async function markComplete(record: SQSRecord): Promise {
  return { pKey: &#39&#39, rKey: &#39&#39 }
}
// ---cut---
type Body = {
  data: string,
  moreData: number
}

type MetaData = {
  stuff: string
}

async function processMessage(record: SQSRecord) {
  const { id, body, url, getMessageRecord } = 
    readSQSRecord(record)

  await markComplete(record)
}

Diving deeper into marking a message as complete
Read the SQS Record and get the message data.
Update the following on the message record:status - to COMPLETE
statusCode - to 200
completedAt - to the current time
updatedAt - to the current time
expiresAt - to the current time + the the MessageRetentionPeriod to ensure that the message record can exist for any messages that could possibly still come in. Those messages will need to know not to continue processing the message, because it is already complete.


Check the message type. If the message is a task then update the message cluster record. Moving this task from incompleteTasks to completeTasks and potentially updating the cluster record&amp#39;s status to show that the cluster is complete.

`}}},{name:"message-clusters-overview",path:"/message-clusters/overview",component:()=>r(()=>import("./overview.0b1b030a.js"),["assets/overview.0b1b030a.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"message-clusters-our-global-s3-storage",path:"/message-clusters/our-global-s3-storage",component:()=>r(()=>import("./our-global-s3-storage.eb6e2ca4.js"),["assets/our-global-s3-storage.eb6e2ca4.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"message-clusters-our-dynamo-records",path:"/message-clusters/our-dynamo-records",component:()=>r(()=>import("./our-dynamo-records.d8913487.js"),["assets/our-dynamo-records.d8913487.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"message-clusters-createing-a-cluster",path:"/message-clusters/createing-a-cluster",component:()=>r(()=>import("./createing-a-cluster.4fd5f3de.js"),["assets/createing-a-cluster.4fd5f3de.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"message-clusters-behind-the-hood",path:"/message-clusters/behind-the-hood",component:()=>r(()=>import("./behind-the-hood.9850273f.js"),["assets/behind-the-hood.9850273f.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"what-is-sqs",path:"/what-is-sqs",component:()=>r(()=>import("./what-is-sqs.6b90037b.js"),["assets/what-is-sqs.6b90037b.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"What is SQS",duration:"5 min read",content:`\u{1F4E4} Amazon Simple Queue Service
SQS is a durable, scaleable message queue that can support any volume of messages, and producers can push at any rate, and once the messages are enqueued into a queue, one of more consumers polls the queue to recieve those messages, and can recieve a batch of messages at the same request.
::: success
\u{1F4A1} To make this service easier to use, and work for Model Match specifically, we have the Model Match Message API.
:::
At least once delivery and visibility timeout
SQS has at least once delivery semantics, meaning that the message will be recieved at least once. This is implemented through Visability Timeouts. When a pollers polls a message the message will become invisible for a short period of time. If the consumer process the message, it is deleted, if they fail to process the message, it is not deleted and will be sent back to the queue. Once the Visability Timeouts have expired, the message will be recieved again.
::: warning
:warning: If you set the Visibility Timeout to shorter than the time it takes for a batch of messages to be processed, you will run the risk of likely processing messages multiple times.
:::
Lambda Poll Based Invocation
The lambda service polls, on our behalf, the sqs queue and if and when there is a message in the queue, only then does it invoke our code for the lambda function to run.
SQS to Lambda: Batching
The lambda service will poll the queue for messages, and if there are any messages in the queue, it will invoke the lambda function and bring in a match of messages. This can scale automatically. The lambda function will then process the messages and then delete them from the queue.
AWS SQS to Lambda: Batching
::: success
\u{1F4A1} Batching is set at the lambda level, and is extreamly cost effective. This will result is messages being processed faster, and less lambda invokations. Up to 10,000 messages can be processed at a time if we use batching properly.
:::
Lambda Concurrency
With SQS each event is enqueued in a queue where they can be buffered and reate limited. And they have to ability to use batching, and we have the ability to rate limit this consumtion.
What if we are sending messages too quickly, and we have an issue with a downstream system, like DynamoDB or S3? Imagine we had 300 connections to the downstream system, and we are sending messages too quickly, and we have an issue with one of the connections.
AWS SQS to Lambda: Concurrency
For these reasons we can rate limit the funciton consumtion. Per function we controll concurrency with ReservedConcurrentExecutions. This concurrency ceiling allows us to cap the speed at which we drain the queue. 
::: danger
\u26D4\uFE0F It is possible that we could crash elastic search, or S3, or DynamoDB, or whatever, if we are sending messages too quickly.
:::
Lambda Poller Scaling
Lambda runs a poller on our behalf, startin with concurrent batchs of 5 invocations at any moment. But if those invocations are running and there are more messges remain in the queue, than an additional 60 invokations each minuet afterwords; scaling all the way up until we drain the queue or we reach 1,000 max concurrent invokations. Assuming a match batch size of 10, that means that a single function paired with an SQS event source can process 10,000 messages in parrellel. 
Errors
If we send a message to the queue and the queue sends a batch of messages to the poller, and the poller spins up a lambda function. Lets say that 4 of the 5 messages are processed successfully, and the 5th message fails. This means that the lambda will stop and all of the messages will be sent back to the queue.
If the 1st message fails, the lambda will stop and all the message will be sent back to the queue. This means that either we will be processing messages more than once, or we will possibly never process messages. 
To solve this issue, the Model Match Message API will do a couple things:
It will try processing all messages, swallowing any errors, until all messages are processed, either succesfully, or rejected. We then manually delete all succesfully processed messages before we throw an error, allowing the poison message to be sent back to the queue.
To ensure that we are not processing messages more than once, we check on each message processing weather or not the queue has already been processed. If it has, we will not process the message.

:thinking: What if it is ok for my messages to be processed multiple times?
You can generally destructure the API to allow you to do this and anything else you want. The use case for this may be creating new history records, or updating existing ones. This process does not require huge amounts of processing power, and data will not be ruined if processed multiple times.
The trade off is basically the time and resources it takes to run DyanmoDB looks ups are slowing down your processing, but are providing some benefit.
\u{1F645}\u200D\u2642\uFE0F Error Handelilng
The Model Match Message API processes messages in a way that it synchronously processes all messages, and if any message fails, it will throw an error after deleting the messages from the queue that succeded. This means that using this process will require almost no extra processing power.
::: warning
:warning: Use the Model Match Message API for processing message batches in almost all cases.
::: 
If you want to omit the use of Database writes and just process the messages, you are giving up the ability to check errors in Dynamo, meaning that any client side requirment to see errant messages will not be met. However, you can still find errored messages in the dead letter queue and you can go through logs to find specific errors.
\u{1F46B} Getting Multiple Deliveries
The Model Match Message API will check to make sure that a message hasn&amp#39;t already been processed. It is possible, and out of our control, that a message will show up in the poller more than once, even though we are handeling messages errors. 
To solve the trade off here, you can create the DynamoDB look up at only the queue lambda level. So you are not actually initializing a Message Record until you see it the very first time. This reduces time and processing by 50%, if you do not need to be aware of the message in the database.
The queue lambda will upsert the Message Record to the database on the first invokation, and upsert it again on any further invokations. Deleting the record if the message processes succesfully. 
`}}},{name:"send-many-messages",path:"/send-many-messages",component:()=>r(()=>import("./send-many-messages.72b56ced.js"),["assets/send-many-messages.72b56ced.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"send-a-message",path:"/send-a-message",component:()=>r(()=>import("./send-a-message.0621fb9c.js"),["assets/send-a-message.0621fb9c.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"process-a-task",path:"/process-a-task",component:()=>r(()=>import("./process-a-task.ef203ef7.js"),["assets/process-a-task.ef203ef7.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"process-a-message",path:"/process-a-message",component:()=>r(()=>import("./process-a-message.98fd0b3d.js"),["assets/process-a-message.98fd0b3d.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Processing a message",duration:"2 min read",content:`When you recieve a message from the poller your lambda that you have created for this queue will be invoked and you can process the message.
TL;DR
You can use a really easy hook to process messages from the queue, that will remove a significant amount of boilerplate code. This will ensure that batches of messages are handled gracefully, and make sure that non erroring messages are processed, while erroring messages are retried.
It will also update your message records and message cluster records to ensure that the message is marked as processed or errored if they have exceeded the retry limit.
import { SQSEvent, SQSRecord } from &quotaws-lambda&quot;
const safeProcessBatch = (event: SQSEvent, processMessage: (record: SQSRecord) =&gt Promise) =&gt {
  return null
};
// ---cut---
async function handler (event: SQSEvent) {
  console.log(&#39Received event:&#39, JSON.stringify(event, null, 2));
  const processResult = await safeProcessBatch(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}

What is the best way to process a message?
That is mostly up to you, but the first place to start would likely be to read into the message and gain access to the data used for the processing.

// ---cut---

async function processMessage(record: SQSRecord): Promise {
  const { id, body, type, getMessageRecord } = readSQSRecord(record)
}
`}}},{name:"index",path:"/",component:()=>r(()=>import("./index.023c564d.js"),["assets/index.023c564d.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{title:"Hey, I'm Nick Graffis",duration:"1 min read",content:`interface IdLabel {id: number, /* some fields */ }
interface NameLabel {name: string, /* other fields */ }
type NameOrId = T extends number ? IdLabel : NameLabel;
// This comment should not be included

// ---cut---
function createLabel(idOrName: T): NameOrId {
  throw &quotunimplemented&quot
}

let a = createLabel(&quottypescript&quot);
`}}},{name:"create-a-queue",path:"/create-a-queue",component:()=>r(()=>import("./create-a-queue.0de511e7.js"),["assets/create-a-queue.0de511e7.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"create-a-message-cluster",path:"/create-a-message-cluster",component:()=>r(()=>import("./create-a-message-cluster.223e8545.js"),["assets/create-a-message-cluster.223e8545.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"create-a-lambda",path:"/create-a-lambda",component:()=>r(()=>import("./create-a-lambda.61dd72e4.js"),["assets/create-a-lambda.61dd72e4.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{frontmatter:{duration:"0 min read",content:""}}},{name:"all",path:"/:all(.*)*",component:()=>r(()=>import("./_...all_.e310dbe0.js"),["assets/_...all_.e310dbe0.js","assets/Post.3c6da465.js","assets/vendor.09be1bf3.js"]),props:!0,meta:{layout:404,frontmatter:{duration:"1 min read",content:`  404
meta:
  layout: 404
`}}}],oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 750 850"},re=d("path",{d:"M732 392q3-2 7-1t3 5q-4 76-36 142t-84 114t-122 74t-147 23q-71-4-133-33t-109-77t-77-109T1 397q-4-78 23-147t74-122t114-84T354 8q4 0 6 3t-2 7q-31 40-46 90t-8 106q5 45 25 85t51 71t71 51t85 25q56 7 106-8t90-46z",fill:"currentColor"},null,-1),ie=[re];function de(a,e){return u(),l("svg",oe,ie)}var ce={name:"il-moon",render:de};const ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},le=W('<g fill="none"><path d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path d="M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M38.5 12a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M44.5 26.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M38.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M3.5 26.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path><path d="M9.5 12a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z" fill="currentColor"></path></g>',1),me=[le];function ge(a,e){return u(),l("svg",ue,me)}var pe={name:"icon-park-outline-sun-one",render:ge};const $='"UIFO0{$*E*b]5S-:ShSi}?%2t8bcKPtRt7jv"';function We(a){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],n=new Date(a),t=new Date().getTime()/1e3-n.getTime()/1e3;return t<604800?t<3600?`${Math.floor(t/60)} minutes ago`:t<86400?`${Math.floor(t/3600)} hours ago`:t<60?"a few seconds ago":e[n.getDay()]:t<3154e3?`${s[n.getMonth()]} ${n.getDate()}`:`${s[n.getMonth()]} ${n.getDate()}`}ref(!1);ref(!1);const D=V(),j=z(D);ref("");ref({reactions:{}});const he={class:"px-4 m-auto py-6 text-sm z-50 flex items-center justify-between w-full font-semibold text-nosferatu dark:text-cullen border-b border-muted"},ye=d("div",{class:"relative"},[d("svg",{class:"",viewBox:"0 0 99 66"},[d("defs",null,[d("linearGradient",{id:"a",x1:".5",y1:"33",x2:"65.75",y2:"33",gradientUnits:"userSpaceOnUse"},[d("stop",{offset:"0","stop-color":"#3b3b3d"}),d("stop",{offset:"1","stop-color":"#cfd0d2"})]),d("linearGradient",{id:"b",x1:"33.25",y1:"33",x2:"98.5",y2:"33",gradientUnits:"userSpaceOnUse"},[d("stop",{offset:"0","stop-color":"#396eb5"}),d("stop",{offset:"1","stop-color":"#20386c"})])]),d("path",{d:"M65.75 36A32.76 32.76 0 0 1 .5 36h7.77a25.24 25.24 0 0 0 24.86 22.51A25.26 25.26 0 0 0 58 36zM58 30A25.26 25.26 0 0 0 33.13 7.49 25.24 25.24 0 0 0 8.27 30H.5a32.76 32.76 0 0 1 65.25 0z",style:{fill:"url(#a)"}}),d("path",{d:"M41 36a25 25 0 0 0 49.72 0h7.78a32.76 32.76 0 0 1-65.25 0zm-7.76-6a32.76 32.76 0 0 1 65.26 0h-7.77A25 25 0 0 0 41 30z",style:{fill:"url(#b)"}})])],-1),fe={class:"flex space-x-6 items-center text-lg"},Se=d("p",null,"AWS Documentation",-1),be=d("a",{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html",class:"cursor-pointer lg:text-xl !text-base hover:text-secondary transition-colors duration-150"},[d("p",null,"AWS Documentation")],-1),ve=f({setup(a){ref(null),ref(!1),ref(!0);const e=ref(null);return ref(!1),b(),onMounted(()=>{if(Y(JSON.parse($))){const s=J(JSON.parse($),32,32),n=new ImageData(s,32,32),t=e.value&&e.value.getContext("2d");t&&t.putImageData(n,0,0)}}),(s,n)=>{const t=k("router-link"),i=ce,o=pe;return u(),l("nav",he,[p(t,{to:"/",class:"flex items-center justify-center h-full flex-shrink-0"},{default:C(()=>[ye]),_:1}),d("div",fe,[p(t,{to:"/posts",class:"cursor-pointer lg:text-xl !text-base hover:text-secondary transition-colors duration-150"},{default:C(()=>[Se]),_:1}),be,d("a",{class:"cursor-pointer lg:text-xl !text-base hover:text-secondary transition-colors duration-150",onClick:n[0]||(n[0]=(...c)=>g(j)&&g(j)(...c))},[g(D)?(u(),v(i,{key:0})):(u(),v(o,{key:1}))])])])}}}),Re=d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),Me=[Re],we=["onClick"],ke=f({props:{page:null},setup(a){const e=b(),s=I(),n=ref(!1),t=i=>i.replace(/-/g," ").replace(/\w\S*/g,o=>o.charAt(0).toUpperCase()+o.substr(1).toLowerCase());return(i,o)=>(u(),l(_,null,[d("div",{class:"font-bold p-4 hover:bg-muted flex justify-between",onClick:o[0]||(o[0]=c=>n.value=!n.value)},[d("p",null,T(t(a.page.name)),1),(u(),l("svg",{xmlns:"http://www.w3.org/2000/svg",class:R([n.value?"rotate-0":"-rotate-90","h-6 w-6 transform"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Me,2))]),d("div",{class:R([n.value?"h-auto":"h-0","overflow-hidden"])},[(u(!0),l(_,null,E(a.page.children,(c,m)=>(u(),l("div",{key:m+c.name,class:"w-full hover:text-blade"},[c.children.length?U("v-if",!0):(u(),l("div",{key:0,class:R([g(s).path===c.path?"border-l-4":"","pl-8 py-4 border-blade"]),onClick:h=>g(e).push(c.path)},T(t(c.name)),11,we))]))),128))],2)],64))}}),Te=["onClick"],_e={key:1},Ae=f({props:{siteMap:null},setup(a){const e=I(),s=b(),n=t=>t.replace(/-/g," ").replace(/\w\S*/g,i=>i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());return(t,i)=>{const o=ke;return u(),l("div",null,[(u(!0),l(_,null,E(a.siteMap,(c,m)=>(u(),l("div",{key:m,class:"w-full"},[c.children.length?(u(),l("div",_e,[p(o,{page:c},null,8,["page"])])):(u(),l("div",{key:0,class:R([g(e).path===c.path?"border-l-4":"","p-4 border-blade hover:bg-muted"]),onClick:h=>g(s).push(c.path)},T(n(c.name)),11,Te))]))),128))])}}}),qe=f({setup(a){const s=b().getRoutes(),n=computed(()=>s.filter(o=>!o.path.endsWith(".html")&&o.name)),t=(o,c="")=>o.reduce((m,h)=>{const{path:A}=h,S=c?`${c}/${A}`:A,q=w(M({},h),{path:S,name:S.split("/").pop()}),Q=S.split("/");if(Q.length>2){const y=Q.slice(0,-1).join("/");m[y]||(m[y]=w(M({},h),{children:[],path:y,name:y.substring(1).replace(/\//g," ")})),m[y].children.push(q)}else m[S]=q;return m},{}),i=computed(()=>{const o=t(n.value);return Object.values(o)});return console.log(i.value),(o,c)=>(u(),v(Ae,{"site-map":g(i)},null,8,["site-map"]))}});var Qe=(a,e)=>{const s=a.__vccOpts||a;for(const[n,t]of e)s[n]=t;return s};const xe={},Ke={class:"h-screen flex flex-col"},Pe={class:"grid grid-cols-12 overflow-hidden flex-grow"},Ce={class:"col-span-3 overflow-scroll border-r border-muted"},Ie={class:"col-span-9 overflow-scroll h-full"};function Ee(a,e){const s=ve,n=qe,t=k("router-view");return u(),l("div",Ke,[p(s),d("div",Pe,[d("div",Ce,[p(n)]),d("div",Ie,[p(t)])])])}var Oe=Qe(xe,[["render",Ee]]);const $e={"404":()=>r(()=>import("./404.d8e502ed.js"),["assets/404.d8e502ed.js","assets/404.c354ebe2.css","assets/vendor.09be1bf3.js"]),default:Oe};function De(a){return a.map(e=>{var s;return{path:e.path,component:$e[((s=e.meta)==null?void 0:s.layout)||"default"],children:[e]}})}const je=f({setup(a){return H({title:"'Nick Graffis'",meta:[{name:"description",content:"Nick Graffis's Personal Website"}]}),(e,s)=>{const n=k("router-view");return u(),v(n)}}});const Be=De(ae),Le=(a,e,s)=>s||{top:0};Z(je,{routes:Be,scrollBehavior:Le},a=>{Object.values({"./modules/nprogress.ts":te}).map(e=>{var s;return(s=e.install)==null?void 0:s.call(e,a)})});export{We as f};
