import{_ as t}from"./Post.3c6da465.js";import{q as n,o as c,k as r,w as p,a as s,z as e}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const F=s("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"When you recieve a message from the poller your lambda that you have created for this queue will be invoked and you can process the message."),e(" When you recieve a message from the poller your lambda that you have created for this queue will be invoked and you can process the message. ")])]),s("h2",{id:"tl%3Bdr",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tl%3Bdr","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"TL;DR"),e(" TL;DR ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You can use a really easy hook to process messages from the queue, that will remove a significant amount of boilerplate code. This will ensure that batches of messages are handled gracefully, and make sure that non erroring messages are processed, while erroring messages are retried."),e(" You can use a really easy hook to process messages from the queue, that will remove a significant amount of boilerplate code. This will ensure that batches of messages are handled gracefully, and make sure that non erroring messages are processed, while erroring messages are retried. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"It will also update your message records and message cluster records to ensure that the message is marked as processed or errored if they have exceeded the retry limit."),e(" It will also update your message records and message cluster records to ensure that the message is marked as processed or errored if they have exceeded the retry limit. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">handler</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"handler")]),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span></code></div></pre>`},"SQSEvent")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">var</span><span style="color: #F8F8F2"> console</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Console</span></code></div></pre>`},"console"),e(".")]),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(method) Console.</span><span style="color: #50FA7B">log</span><span style="color: #F8F8F2">(</span><span style="color: #FF79C6">...</span><span style="color: #F8F8F2">data: any[]): </span><span style="color: #FF79C6">void</span></code></div></pre>`},"log")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Received event:"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#BD93F9"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">var</span><span style="color: #F8F8F2"> JSON</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">JSON</span></code></div></pre>`},"JSON")]),s("span",{style:{color:"#F8F8F2"}},"."),s("span",{style:{color:"#8BE9FD"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(method) </span><span style="color: #BD93F9">JSON</span><span style="color: #F8F8F2">.</span><span style="color: #8BE9FD">stringify</span><span style="color: #F8F8F2">(value: any, replacer</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> (string </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> number)[] </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">null</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span><span style="color: #F8F8F2">, space</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> string </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> number </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span><span style="color: #F8F8F2">): </span><span style="color: #50FA7B">string</span><span style="color: #F8F8F2"> (</span><span style="color: #FF79C6">+</span><span style="color: #BD93F9">1</span><span style="color: #F8F8F2"> overload)</span></code></div></pre>`},"stringify")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event"),e(", ")]),s("span",{style:{color:"#BD93F9"}},"null"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#BD93F9"}},"2"),s("span",{style:{color:"#F8F8F2"}},"));")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult"),e()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">safeProcessBatch</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">, </span><span style="color: #50FA7B">processMessage</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"safeProcessBatch")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage"),e(")")])]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"// do something with the message")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSEvent, SQSRecord } from <DOUBLE-QUOTE>aws-lambda<DOUBLE-QUOTE>;
const safeProcessBatch = (event: SQSEvent, processMessage: (record: SQSRecord) => Promise<void>) => {
  return null
};
// ---cut---
async function handler (event: SQSEvent) {
  console.log(<SINGLE-QUOTE>Received event:<SINGLE-QUOTE>, JSON.stringify(event, null, 2));
  const processResult = await safeProcessBatch(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("h2",{id:"what-is-the-best-way-to-process-a-message%3F",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-is-the-best-way-to-process-a-message%3F","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"What is the best way to process a message?"),e(" What is the best way to process a message? ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"That is mostly up to you, but the first place to start would likely be to read into the message and gain access to the data used for the processing."),e(" That is mostly up to you, but the first place to start would likely be to read into the message and gain access to the data used for the processing. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"}),s("div",{class:"line"},[s("span",{style:{color:"#6272A4"},class:"[object Object],[object Object]"},"// ---cut---")]),s("div",{class:"line"}),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"},class:"[object Object]"},"async"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),s("span",{style:{color:"#FF79C6"},class:"[object Object]"},"function"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),s("span",{style:{color:"#50FA7B"},class:"[object Object]"},"processMessage"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"},class:"[object Object]"},"record"),s("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"},class:"[object Object]"},"SQSRecord"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"},")"),s("span",{style:{color:"#FF79C6"},class:"[object Object]"},":"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"},class:"[object Object]"},"Promise"),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"<"),s("span",{style:{color:"#8BE9FD","font-style":"italic"},class:"[object Object]"},"void"),s("span",{style:{color:"#F8F8F2"},class:"[object Object],[object Object],[object Object]"},"> {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"  "),s("span",{style:{color:"#FF79C6"},class:"[object Object]"},"const"),s("span",{style:{color:"#F8F8F2"},class:"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"}," { id, body, type, getMessageRecord } "),s("span",{style:{color:"#FF79C6"},class:"[object Object]"},"="),s("span",{style:{color:"#F8F8F2"},class:"[object Object]"}," "),s("span",{style:{color:"#50FA7B"},class:"[object Object]"},"readSQSRecord"),s("span",{style:{color:"#F8F8F2"},class:"[object Object],[object Object],[object Object]"},"(record)")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"},class:"[object Object]"},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	
// ---cut---

async function processMessage(record: SQSRecord): Promise<void> {
  const { id, body, type, getMessageRecord } = readSQSRecord(record)
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])])],-1),b={setup(i,{expose:a}){const o={title:"Processing a message",duration:"2 min read",content:`When you recieve a message from the poller your lambda that you have created for this queue will be invoked and you can process the message.
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
`,meta:[{property:"og:title",content:"Processing a message"}]};return a({frontmatter:o}),n({title:"Processing a message",meta:[{property:"og:title",content:"Processing a message"}]}),(y,u)=>{const l=t;return c(),r(l,{frontmatter:o},{default:p(()=>[F]),_:1})}}};export{b as default};