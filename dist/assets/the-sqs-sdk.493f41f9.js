import{_ as l}from"./Post.3c6da465.js";import{q as t,o as p,k as c,w as r,a as s,z as e}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const F=s("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[s("h2",{id:"api-use-of-the-sqs-sdk",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#api-use-of-the-sqs-sdk","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"API use of the SQS SDK"),e(" API use of the SQS SDK ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"When you "),e(" When you ")]),s("code",null,"sendMessage"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," or "),e(" or ")]),s("code",null,"sendMessageBatch"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," you can pass in a "),e(" you can pass in a ")]),s("code",null,"SendMessageRequest"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," or "),e(" or ")]),s("code",null,"SendMessageBatchRequest"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," object and this behind the scenes will simply use the "),e(" object and this behind the scenes will simply use the ")]),s("code",null,"SQS"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," SDK to send the message."),e(" SDK to send the message. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> AWS</span></code></div></pre>`},"AWS"),e(", { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">class</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">SQS</span>
<span style="color: #F8F8F2">(</span><span style="color: #8BE9FD">alias</span><span style="color: #F8F8F2">) </span><span style="color: #8BE9FD">namespace</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">SQS</span>
<span style="color: #8BE9FD">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD">SQS</span></code></div></pre>`},"SQS"),e(" } ")]),s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"aws-sdk"),s("span",{style:{color:"#E9F284"}},"'")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> sqs</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD; font-style: italic">SQS</span></code></div></pre>`},"sqs"),e()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6","font-weight":"bold"}},"new"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> AWS</span></code></div></pre>`},"AWS")]),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6; font-weight: bold">new</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">SQS</span><span style="color: #F8F8F2">(options</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">SQS</span><span style="color: #F8F8F2">.ClientConfiguration </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span><span style="color: #F8F8F2">): </span><span style="color: #BD93F9">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #BD93F9">SQS</span>
<span style="color: #FF79C6">import</span><span style="color: #F8F8F2"> SQS </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">require</span><span style="color: #F8F8F2">(</span><span style="color: #E9F284">'</span><span style="color: #F1FA8C">./sqs</span><span style="color: #E9F284">'</span><span style="color: #F8F8F2">)</span></code></div></pre>`},"SQS")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> sqs</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD; font-style: italic">SQS</span></code></div></pre>`},"sqs"),e(".")]),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(method) </span><span style="color: #BD93F9">SQS</span><span style="color: #F8F8F2">.</span><span style="color: #50FA7B">sendMessage</span><span style="color: #F8F8F2">(params: SendMessageRequest, callback</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">err</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD; font-style: italic">AWSError</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQS</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD; font-style: italic">SendMessageResult</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">void</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span><span style="color: #F8F8F2">): </span><span style="color: #BD93F9">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #50FA7B">Request</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">SQS</span><span style="color: #F8F8F2">.</span><span style="color: #FFB86C; font-style: italic">SendMessageResult</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">AWS</span><span style="color: #F8F8F2">.</span><span style="color: #FFB86C; font-style: italic">AWSError</span><span style="color: #F8F8F2">&gt; (</span><span style="color: #FF79C6">+</span><span style="color: #BD93F9">1</span><span style="color: #F8F8F2"> overload)</span></code></div></pre>`},"sendMessage")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageParams</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SendMessageRequest</span></code></div></pre>`},"messageParams"),e(").")]),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(method) Request</span><span style="color: #FF79C6">&lt;</span><span style="color: #BD93F9">SQS</span><span style="color: #F8F8F2">.SendMessageResult, AWSError</span><span style="color: #FF79C6">&gt;</span><span style="color: #F8F8F2">.</span><span style="color: #50FA7B">promise</span><span style="color: #F8F8F2">(): </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">PromiseResult</span><span style="color: #FF79C6">&lt;</span><span style="color: #BD93F9">SQS</span><span style="color: #F8F8F2">.SendMessageResult, </span><span style="color: #BD93F9">AWS</span><span style="color: #F8F8F2">.AWSError</span><span style="color: #FF79C6">&gt;&gt;</span></code></div></pre>`},"promise")]),s("span",{style:{color:"#F8F8F2"}},"()")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SendMessageRequest } from <SINGLE-QUOTE>aws-sdk/clients/sqs<SINGLE-QUOTE>

const messageParams: SendMessageRequest = {
  QueueUrl: <DOUBLE-QUOTE>https://sqs.us-east-1.amazonaws.com/123456789012/my-queue<DOUBLE-QUOTE>,
  MessageBody: JSON.stringify({
    id: <DOUBLE-QUOTE>12345<DOUBLE-QUOTE>,
    type: <DOUBLE-QUOTE>my-message-type<DOUBLE-QUOTE>,
    data: {
      foo: <DOUBLE-QUOTE>bar<DOUBLE-QUOTE>
    }
  })
}
// ---cut---
import AWS, { SQS } from <SINGLE-QUOTE>aws-sdk<SINGLE-QUOTE>

const sqs = new AWS.SQS()
sqs.sendMessage(messageParams).promise()
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"This is extreamly simple, and the API is mostly here to help set up the message record that will be used to track the message(s)."),e(" This is extreamly simple, and the API is mostly here to help set up the message record that will be used to track the message(s). ")])]),s("h2",{id:"why-not-just-send-a-message-directly%3F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#why-not-just-send-a-message-directly%3F","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Why not just send a message directly?"),e(" Why not just send a message directly? ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You could! You would just loose out on the tracking of the message, meaning that you might be processing this message more than once. You might be erroring out messages that are actually valid and you would not know when the message was processed."),e(" You could! You would just loose out on the tracking of the message, meaning that you might be processing this message more than once. You might be erroring out messages that are actually valid and you would not know when the message was processed. ")])])],-1),S={setup(i,{expose:o}){const a={title:"The SQS SDK",duration:"1 min read",content:`API use of the SQS SDK
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
`,meta:[{property:"og:title",content:"The SQS SDK"}]};return o({frontmatter:a}),t({title:"The SQS SDK",meta:[{property:"og:title",content:"The SQS SDK"}]}),(y,m)=>{const n=l;return p(),c(n,{frontmatter:a},{default:r(()=>[F]),_:1})}}};export{S as default};
