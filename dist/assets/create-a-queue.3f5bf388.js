import{_ as i}from"./Post.3c6da465.js";import{q as n,o as l,k as c,w as r,a as e,z as s}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const u=e("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[e("h2",{id:"how-to-create-a-queue-with-cloudformation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-create-a-queue-with-cloudformation","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"How to create a queue with CloudFormation"),s(" How to create a queue with CloudFormation ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Inside of our "),s(" Inside of our ")]),e("code",null,"app"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"}," we have a directory "),s(" we have a directory ")]),e("code",null,"resources"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"}," that includes an "),s(" that includes an ")]),e("code",null,"sqs.yml"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"}," file."),s(" file. ")])]),e("div",{style:{position:"relative"}},[e("pre",{class:"shiki dracula",style:{"background-color":"#282A36",color:"#F8F8F2"}},[e("div",{class:"language-id"},"yaml"),e("code",{class:"code-container"},[e("div",{class:"line"},[e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"mmContactExportQueue"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"  "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"Type"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#E9F284"},class:"[object Object]"},"'"),e("span",{style:{color:"#F1FA8C"},class:"[object Object]"},"AWS::SQS::Queue"),e("span",{style:{color:"#E9F284"},class:"[object Object]"},"'")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"  "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"Properties"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"    "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"DelaySeconds"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#BD93F9"},class:"[object Object]"},"5")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"    "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"QueueName"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#F1FA8C"},class:"[object Object],[object Object]"},"${self:service}-${self:provider.stage}-${self:custom.env.SQS.contactExportQueueName}")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"    "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"ReceiveMessageWaitTimeSeconds"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#BD93F9"},class:"[object Object]"},"10")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"    "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"VisibilityTimeout"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#BD93F9"},class:"[object Object]"},"60")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"    "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"RedrivePolicy"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"      "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"deadLetterTargetArn"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"        "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"Fn::GetAtt"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object],[object Object]"}," ["),e("span",{style:{color:"#F1FA8C"},class:"[object Object],[object Object]"},"mmDeadLetterQueue"),e("span",{style:{color:"#F8F8F2"},class:"[object Object],[object Object]"},", "),e("span",{style:{color:"#F1FA8C"},class:"[object Object],[object Object]"},"Arn"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"]")]),e("div",{class:"line"},[e("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"      "),e("span",{style:{color:"#8BE9FD"},class:"[object Object],[object Object]"},"maxReceiveCount"),e("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),e("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),e("span",{style:{color:"#BD93F9"},class:"[object Object]"},"2")])])]),e("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	mmContactExportQueue:
  Type: <SINGLE-QUOTE>AWS::SQS::Queue<SINGLE-QUOTE>
  Properties:
    DelaySeconds: 5
    QueueName: \${self:service}-\${self:provider.stage}-\${self:custom.env.SQS.contactExportQueueName}
    ReceiveMessageWaitTimeSeconds: 10
    VisibilityTimeout: 60
    RedrivePolicy:
      deadLetterTargetArn:
        Fn::GetAtt: [mmDeadLetterQueue, Arn]
      maxReceiveCount: 2
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[e("span",{style:{},class:"heroicon heroicon-duplicate"})])]),e("h3",{id:"queuename-%E2%80%94-(string)",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#queuename-%E2%80%94-(string)","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"QueueName \u2014 (String)"),s(" QueueName \u2014 (String) ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The name of the new queue. The following limits apply to this name:"),s(" The name of the new queue. The following limits apply to this name: ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"A queue name can have up to 80 characters."),s(" A queue name can have up to 80 characters. ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Valid values: alphanumeric characters, hyphens (-), and underscores (_)."),s(" Valid values: alphanumeric characters, hyphens (-), and underscores (_). ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"A FIFO queue name must end with the .fifo suffix."),s(" A FIFO queue name must end with the .fifo suffix. ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Queue URLs and names are case-sensitive."),s(" Queue URLs and names are case-sensitive. ")])]),e("h3",{id:"visibilitytimeout",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#visibilitytimeout","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"VisibilityTimeout"),s(" VisibilityTimeout ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue."),s(" The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue. ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Values must be from 0 to 43,200 seconds (12 hours). If you don\u2019t specify a value, AWS CloudFormation uses the default value of 30 seconds."),s(" Values must be from 0 to 43,200 seconds (12 hours). If you don\u2019t specify a value, AWS CloudFormation uses the default value of 30 seconds. ")])]),e("p",null,[e("em",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Usually, the value of the visibility timeout should be set to the maximum time that it takes your consumer to process and delete a message from the queue. You can perform a series of load tests on the consumer and get a rough idea about how long will it take. And if you are batching messages, note that the this should be multiplied by the batch size."),s(" Usually, the value of the visibility timeout should be set to the maximum time that it takes your consumer to process and delete a message from the queue. You can perform a series of load tests on the consumer and get a rough idea about how long will it take. And if you are batching messages, note that the this should be multiplied by the batch size. ")])])]),e("h3",{id:"receivemessagewaittimeseconds",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receivemessagewaittimeseconds","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"ReceiveMessageWaitTimeSeconds"),s(" ReceiveMessageWaitTimeSeconds ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn\u2019t yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property."),s(" Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn\u2019t yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. ")])]),e("h3",{id:"delayseconds-%E2%80%93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#delayseconds-%E2%80%93","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"DelaySeconds \u2013"),s(" DelaySeconds \u2013 ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0."),s(" The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. ")])]),e("h3",{id:"maximummessagesize-%E2%80%93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maximummessagesize-%E2%80%93","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"MaximumMessageSize \u2013"),s(" MaximumMessageSize \u2013 ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB)."),s(" The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). ")])]),e("h3",{id:"messageretentionperiod-%E2%80%93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messageretentionperiod-%E2%80%93","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"MessageRetentionPeriod \u2013"),s(" MessageRetentionPeriod \u2013 ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days)."),s(" The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). ")])]),e("h3",{id:"redrivepolicy-%E2%80%93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redrivepolicy-%E2%80%93","aria-hidden":"true"},"#"),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"RedrivePolicy \u2013"),s(" RedrivePolicy \u2013 ")])]),e("p",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. For more information about the redrive policy and dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide."),s(" The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. For more information about the redrive policy and dead-letter queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide. ")])]),e("ul",null,[e("li",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("strong",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"deadLetterTargetArn"),s(" deadLetterTargetArn ")])]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"}," \u2013"),s(" \u2013 ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded."),s(" The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. ")])]),e("li",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"})]),e("strong",null,[e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"maxReceiveCount"),s(" maxReceiveCount ")])]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"}," \u2013"),s(" \u2013 ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The number of times a message is delivered to the source queue before being moved to the dead-letter queue. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue."),s(" The number of times a message is delivered to the source queue before being moved to the dead-letter queue. When the ReceiveCount for a message exceeds the maxReceiveCount for a queue, Amazon SQS moves the message to the dead-letter-queue. ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"Note: The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue."),s(" Note: The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue. ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"VisibilityTimeout \u2013 The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide."),s(" VisibilityTimeout \u2013 The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide. ")]),e("span",{class:"emoji-wrapper"},[e("span",{class:"native-emoji"},"The following attributes apply only to server-side-encryption:"),s(" The following attributes apply only to server-side-encryption: ")])])])],-1),v={setup(m,{expose:t}){const a={title:"Create a Queue",duration:"3 min read",content:`How to create a queue with CloudFormation
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

`,meta:[{property:"og:title",content:"Create a Queue"}]};return t({frontmatter:a}),n({title:"Create a Queue",meta:[{property:"og:title",content:"Create a Queue"}]}),(d,h)=>{const o=i;return l(),c(o,{frontmatter:a},{default:r(()=>[u]),_:1})}}};export{v as default};