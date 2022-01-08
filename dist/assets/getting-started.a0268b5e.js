import{_ as t}from"./Post.3c6da465.js";import{q as l,o as p,k as c,w as r,a as s,z as e}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const F=s("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"The biggest thing the "),e(" The biggest thing the ")]),s("code",null,"Model Match Message API"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," does it to help process messages in a way that doesn\u2019t retry messages that were successfull. This means that we can accept batches of messages, without having to process the messages multiple times, or without filling up the queue with messages that have already been processed."),e(" does it to help process messages in a way that doesn\u2019t retry messages that were successfull. This means that we can accept batches of messages, without having to process the messages multiple times, or without filling up the queue with messages that have already been processed. ")])]),s("h2",{id:"safely-process-message-batch---sync",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#safely-process-message-batch---sync","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Safely Process Message Batch - Sync"),e(" Safely Process Message Batch - Sync ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"The basic method for this is the "),e(" The basic method for this is the ")]),s("code",null,"safeProcessBatchSync"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method. The sychronous part of this method is that it is not going to check DynamoDB at all for a message record. This means that if the message has already been processed, it will have no way of knowing."),e(" method. The sychronous part of this method is that it is not going to check DynamoDB at all for a message record. This means that if the message has already been processed, it will have no way of knowing. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"This will however, make sure that succsesfully processed messages are not retried, because of an error, and it is faster than checking DynamoDB for a message record."),e(" This will however, make sure that succsesfully processed messages are not retried, because of an error, and it is faster than checking DynamoDB for a message record. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Your "),e(" Your ")]),s("code",null,"processMessage"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," callback needs to be an async function and can return "),e(" callback needs to be an async function and can return ")]),s("code",null,"null"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," or "),e(" or ")]),s("code",null,"void"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},". It will recieve an indivudal message, not a batch."),e(" . It will recieve an indivudal message, not a batch. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">handler</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"handler")]),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span></code></div></pre>`},"SQSEvent")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult"),e()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">safeProcessBatchSync</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">, </span><span style="color: #50FA7B">processMessage</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"safeProcessBatchSync")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage"),e(")")])]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"// do something with the message")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSEvent, SQSRecord } from <DOUBLE-QUOTE>aws-lambda<DOUBLE-QUOTE>;

export async function safeProcessBatchSync(event: SQSEvent, processMessage: (record: SQSRecord) => Promise<null | void>): Promise<null> { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchSync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("h2",{id:"safely-process-message-batch---async",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#safely-process-message-batch---async","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Safely Process Message Batch - Async"),e(" Safely Process Message Batch - Async ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"This method, "),e(" This method, ")]),s("code",null,"safeProcessBatchAsync"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," will check DynamoDB for a message record, and if it doesn\u2019t find one, it will create one. This means that a message will not be tried more than once. As it will be checking the status of the message record."),e(" will check DynamoDB for a message record, and if it doesn\u2019t find one, it will create one. This means that a message will not be tried more than once. As it will be checking the status of the message record. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You can use this method weather or not the message record currently exists. Meaning, that if you send a message to the queue through the "),e(" You can use this method weather or not the message record currently exists. Meaning, that if you send a message to the queue through the ")]),s("code",null,"AWS SDK"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - you can still process messages using the "),e(" - you can still process messages using the ")]),s("code",null,"Model Match API"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"."),e(" . ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">handler</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"handler")]),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span></code></div></pre>`},"SQSEvent")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult"),e()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">safeProcessBatchAsync</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">event</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSEvent</span><span style="color: #F8F8F2">, </span><span style="color: #50FA7B">processMessage</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"safeProcessBatchAsync")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) event: SQSEvent</span></code></div></pre>`},"event"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage"),e(")")])]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> processResult</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span></code></div></pre>`},"processResult")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"// do something with the message")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSEvent, SQSRecord } from <DOUBLE-QUOTE>aws-lambda<DOUBLE-QUOTE>;

export async function safeProcessBatchAsync(event: SQSEvent, processMessage: (record: SQSRecord) => Promise<null | void>): Promise<null> { return null }

// ---cut---

async function handler (event: SQSEvent) {
  const processResult = 
    await safeProcessBatchAsync(event, processMessage)

  return processResult
}

async function processMessage(record: SQSRecord) {
  // do something with the message
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("h2",{id:"actually-processing-messages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#actually-processing-messages","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Actually Processing Messages"),e(" Actually Processing Messages ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"The actual processing that occurs in the callback should be seperated from the handler itself. This allows us to unit test processing functions."),e(" The actual processing that occurs in the callback should be seperated from the handler itself. This allows us to unit test processing functions. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You will probably start by reading the record itself and gaining access to any data that you might need to process the message. You can do that with the "),e(" You will probably start by reading the record itself and gaining access to any data that you might need to process the message. You can do that with the ")]),s("code",null,"readSQSRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method."),e(" method. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),e(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},[e(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),e(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSRecord } from <SINGLE-QUOTE>aws-lambda<SINGLE-QUOTE>
import AWS from <SINGLE-QUOTE>aws-sdk<SINGLE-QUOTE>

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
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

export type Task<Meta = any> = {
  meta: Meta
  type: <SINGLE-QUOTE>task<SINGLE-QUOTE>
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = <SINGLE-QUOTE>cluster<SINGLE-QUOTE>,
  task = <SINGLE-QUOTE>task<SINGLE-QUOTE>,
  message = <SINGLE-QUOTE>message<SINGLE-QUOTE>
}

export enum Status {
  preFlight = <SINGLE-QUOTE>PRE FLIGHT<SINGLE-QUOTE>,
  inProgress = <SINGLE-QUOTE>IN PROGRESS<SINGLE-QUOTE>,
  complete = <SINGLE-QUOTE>COMPLETE<SINGLE-QUOTE>,
  error = <SINGLE-QUOTE>ERROR<SINGLE-QUOTE>
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Body = any, Meta = any, Globals = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = <SINGLE-QUOTE>jfkdla;f<SINGLE-QUOTE>
  const pKey = \`SQSMesssage$\${<SINGLE-QUOTE>fdfdafda<SINGLE-QUOTE>}\` as SQSMessageKey
  const id = <SINGLE-QUOTE>jfkdlafjkdal;<SINGLE-QUOTE>
  const rKey = \`SQSMesssage$\${<SINGLE-QUOTE>jfkdla;fjkda<SINGLE-QUOTE>}\` as SQSMessageKey
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
    getMessageRecord: (consistenRead = false) =>
      (async <Meta>() => ({
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
  const { body } = readSQSRecord<Body>(record)
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"In the event of a simple message, you could just take out the "),e(" In the event of a simple message, you could just take out the ")]),s("code",null,"body"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," from the message and use that for processing. You can also pass the generic "),e(" from the message and use that for processing. You can also pass the generic ")]),s("code",null,"Body"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," type, to help read the Strigified body, as the body will be parsed when you recieve it."),e(" type, to help read the Strigified body, as the body will be parsed when you recieve it. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"If your needs are more complex and you have to gain access to the meta data that you placed in the Meta field, you can use the "),e(" If your needs are more complex and you have to gain access to the meta data that you placed in the Meta field, you can use the ")]),s("code",null,"getMessageRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method to get the message record."),e(" method to get the message record. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"And because you are the one who sets the Meta field, you can pass the "),e(" And because you are the one who sets the Meta field, you can pass the ")]),s("code",null,"Meta"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," type to ensure type safety."),e(" type to ensure type safety. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),e(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},[e(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),e(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),e()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSRecord } from <SINGLE-QUOTE>aws-lambda<SINGLE-QUOTE>
import AWS from <SINGLE-QUOTE>aws-sdk<SINGLE-QUOTE>

export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
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

export type Task<Meta = any> = {
  meta: Meta
  type: <SINGLE-QUOTE>task<SINGLE-QUOTE>
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = <SINGLE-QUOTE>cluster<SINGLE-QUOTE>,
  task = <SINGLE-QUOTE>task<SINGLE-QUOTE>,
  message = <SINGLE-QUOTE>message<SINGLE-QUOTE>
}

export enum Status {
  preFlight = <SINGLE-QUOTE>PRE FLIGHT<SINGLE-QUOTE>,
  inProgress = <SINGLE-QUOTE>IN PROGRESS<SINGLE-QUOTE>,
  complete = <SINGLE-QUOTE>COMPLETE<SINGLE-QUOTE>,
  error = <SINGLE-QUOTE>ERROR<SINGLE-QUOTE>
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}

type Response<Meta = any, Globals = any, Body = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead?: boolean) => Promise<MessageRecord<Meta>>
}

/**
 * Parse the SQS record to gain access to helpful meta data and getters
 * @param event - The SQS record to parse
 * @returns The basic meta data for the message and getters for globals and record
 */
function readSQSRecord<Body = any, Meta = any, Globals = any>(record: SQSRecord): Response<Meta, Globals, Body> {
  const body: any = JSON.parse(record.body)
  const url = <SINGLE-QUOTE>jfkdla;f<SINGLE-QUOTE>
  const pKey = \`SQSMesssage$\${<SINGLE-QUOTE>fdfdafda<SINGLE-QUOTE>}\` as SQSMessageKey
  const id = <SINGLE-QUOTE>jfkdlafjkdal;<SINGLE-QUOTE>
  const rKey = \`SQSMesssage$\${<SINGLE-QUOTE>jfkdla;fjkda<SINGLE-QUOTE>}\` as SQSMessageKey
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
    getMessageRecord: (consistenRead = false) =>
      (async <Meta>() => ({
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
    readSQSRecord<Body, MetaData>(record)
  
  const messageRecord = await getMessageRecord()
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"This metod is decoupled from the "),e(" This metod is decoupled from the ")]),s("code",null,"readSQSRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method so that you can perform this async task in a different process, and only if necessary."),e(" method so that you can perform this async task in a different process, and only if necessary. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"::: success"),e(" ::: success ")]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"\u{1F9E0} What is consistent read?"),s("img",{class:"twemoji",draggable:"false",alt:"\u{1F9E0}",src:"https://twemoji.maxcdn.com/v/13.1.0/72x72/1f9e0.png"}),e(" What is consistent read? ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Consistent read can be passed to "),e(" Consistent read can be passed to ")]),s("code",null,"getMessageRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to ensure that the message record is not modified by another process. If you\u2019re processing is updating the message record, you can set this to "),e(" to ensure that the message record is not modified by another process. If you\u2019re processing is updating the message record, you can set this to ")]),s("code",null,"true"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to make sure you are getting the latest data. However, this is slower, than setting it to "),e(" to make sure you are getting the latest data. However, this is slower, than setting it to ")]),s("code",null,"false"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", which is the default."),e(" , which is the default. ")]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},":::"),e(" ::: ")])]),s("h2",{id:"read-sqs-record-response-type",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#read-sqs-record-response-type","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Read SQS Record Response Type"),e(" Read SQS Record Response Type ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Here is the return value of the "),e(" Here is the return value of the ")]),s("code",null,"readSQSRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method."),e(" method. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt; </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    task</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    id</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    type</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">RecordType</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;;</span>
<span style="color: #F8F8F2">    getMessageCluster</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;...&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Response")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Body </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Meta </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Meta")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Globals </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"any"),s("span",{style:{color:"#F8F8F2"}},"> "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) url: string</span></code></div></pre>`},"url")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) pKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"pKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"SQSMessageKey")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) rKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"rKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"SQSMessageKey")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) task</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> string </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span></code></div></pre>`},"task")]),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) id</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> string </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span></code></div></pre>`},"id")]),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) body: Body </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> any</span></code></div></pre>`},"body")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Body </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Body")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) type: RecordType</span></code></div></pre>`},"type")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">enum</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">RecordType</span></code></div></pre>`},"RecordType")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) getMessageRecord: (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">MessageRecord</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">Meta, any</span><span style="color: #FF79C6">&gt;&gt;</span></code></div></pre>`},"getMessageRecord")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) consistentRead: boolean</span></code></div></pre>`},"consistentRead")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Promise")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt; </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    meta</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">String</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">&</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Stringified</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    type</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">RecordType</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    startedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    status</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Status</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    statusCode</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">StatusCode</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    completedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    updatedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    expiresAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    consumtion_count</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    error</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">[] </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Meta </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Meta")]),s("span",{style:{color:"#F8F8F2"}},">>,")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) getMessageCluster</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span></code></div></pre>`},"getMessageCluster")]),s("span",{style:{color:"#FF79C6"}},"?:"),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) consistentRead: boolean</span></code></div></pre>`},"consistentRead")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"boolean"),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Promise")]),s("span",{style:{color:"#F8F8F2"}},"<{ ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("      "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) record: MessageClusterRecord</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">Meta, any</span><span style="color: #FF79C6">&gt;</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">TaskMeta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt; </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    type</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">RecordType</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSMessageKey</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    status</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Status</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    error</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">[] </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    statusCode</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">StatusCode</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    startedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    completedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">null</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    completedTasks</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Task</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">TaskMeta</span><span style="color: #F8F8F2">&gt;[];</span>
<span style="color: #F8F8F2">    incompleteTasks</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Task</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">TaskMeta</span><span style="color: #F8F8F2">&gt;[];</span>
<span style="color: #F8F8F2">    bucketParams</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">        Bucket</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">        Key</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    };</span>
<span style="color: #F8F8F2">    meta</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    updatedAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    expiresAt</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MessageClusterRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Meta </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Meta")]),s("span",{style:{color:"#F8F8F2"}},">,")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) getGlobals: () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">Globals</span><span style="color: #FF79C6">&gt;</span></code></div></pre>`},"getGlobals")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," () "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Promise")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(type parameter) Globals </span><span style="color: #FF79C6">in</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Meta</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},"> ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    }>")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	export type SQSMessageKey = \`SQSMessage$\${string}\`

declare class Stringified<T> extends String {
  private ___stringified: T
}

interface JSON {
  stringify<T>(
    value: T,
    replacer?: (key: string, value: any) => any,
    space?: string | number
  ): string & Stringified<T>
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T
  parse(text: string, reviver?: (key: any, value: any) => any): any
}

export type MessageClusterRecord<Meta = any, TaskMeta = any> = {
  type: RecordType
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  status: Status
  error?: any[]
  statusCode: StatusCode
  startedAt: string
  completedAt: string | null
  completedTasks: Task<TaskMeta>[]
  incompleteTasks: Task<TaskMeta>[]
  bucketParams: {
    Bucket: string
    Key: string
  }
  meta?: Meta
  updatedAt: string
  expiresAt: string
}

export type MessageRecord<Meta = any, Body = any> = {
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  id: string
  url: string
  meta?: Meta
  body: String & Stringified<Body>
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

export type Task<Meta = any> = {
  meta: Meta
  type: <SINGLE-QUOTE>task<SINGLE-QUOTE>
  id?: string
  status?: Status
}

export enum RecordType {
  cluster = <SINGLE-QUOTE>cluster<SINGLE-QUOTE>,
  task = <SINGLE-QUOTE>task<SINGLE-QUOTE>,
  message = <SINGLE-QUOTE>message<SINGLE-QUOTE>
}

export enum Status {
  preFlight = <SINGLE-QUOTE>PRE FLIGHT<SINGLE-QUOTE>,
  inProgress = <SINGLE-QUOTE>IN PROGRESS<SINGLE-QUOTE>,
  complete = <SINGLE-QUOTE>COMPLETE<SINGLE-QUOTE>,
  error = <SINGLE-QUOTE>ERROR<SINGLE-QUOTE>
}

export enum StatusCode {
  preFlight = 0,
  inProgress = 100,
  complete = 200,
  error = 400,
  stopped = 500
}
// ---cut---
type Response<Body = any, Meta = any, Globals = any> = {
  url: string
  pKey: SQSMessageKey
  rKey: SQSMessageKey
  task?: string
  id?: string
  body: Body
  type: RecordType
  getMessageRecord: (consistentRead: boolean) => Promise<MessageRecord<Meta>>,
  getMessageCluster?: 
    (consistentRead: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])])],-1),v={setup(i,{expose:n}){const a={title:"Processing Messages",duration:"10 min read",content:`The biggest thing the Model Match Message API does it to help process messages in a way that doesn&amp#39;t retry messages that were successfull. This means that we can accept batches of messages, without having to process the messages multiple times, or without filling up the queue with messages that have already been processed. 
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
`,meta:[{property:"og:title",content:"Processing Messages"}]};return n({frontmatter:a}),l({title:"Processing Messages",meta:[{property:"og:title",content:"Processing Messages"}]}),(d,g)=>{const o=t;return p(),c(o,{frontmatter:a},{default:r(()=>[F]),_:1})}}};export{v as default};
