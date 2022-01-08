import{_ as o}from"./Post.3c6da465.js";import{q as t,o as p,k as F,w as r,a as s,z as a}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const c=s("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[s("ul",null,[s("li")]),s("h2",{id:"reading-the-sqs-record-for-a-message%2C-message-record%2C-and-message-cluster",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#reading-the-sqs-record-for-a-message%2C-message-record%2C-and-message-cluster","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Reading the SQS Record for a Message, Message Record, and Message Cluster"),a(" Reading the SQS Record for a Message, Message Record, and Message Cluster ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You can start processing messages that are part of a cluster the same way that you would process a message that is not part of a cluster. You can use the "),a(" You can start processing messages that are part of a cluster the same way that you would process a message that is not part of a cluster. You can use the ")]),s("code",null,"readSQSRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to get access to the message data and an additional "),a(" to get access to the message data and an additional ")]),s("code",null,"getMessageCluster"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method to get access to the cluster data."),a(" method to get access to the cluster data. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"getMessageCluster"),a(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},[a(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),a(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">} </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"messageCluster"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("    "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"getMessageCluster"),a()]),s("span",{style:{color:"#FF79C6"}},"&&"),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;</span></code></div></pre>`},"getMessageCluster")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
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
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
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
    getMessageRecord: (consistentRead = false) =>
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
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord<Body, MetaData>(record)
  
  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster && 
    await getMessageCluster()
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("h2",{id:"getting-the-globals-for-a-message-cluster",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-the-globals-for-a-message-cluster","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Getting the Globals for a Message Cluster"),a(" Getting the Globals for a Message Cluster ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"When you call "),a(" When you call ")]),s("code",null,"getMessageCluster()"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," you are returned a method to get the globals for the cluster."),a(" you are returned a method to get the globals for the cluster. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) firstName: string</span></code></div></pre>`},"firstName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) lastName: string</span></code></div></pre>`},"lastName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}[]")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"getMessageCluster"),a(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},[a(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),a(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">} </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"messageCluster"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("    "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"getMessageCluster"),a()]),s("span",{style:{color:"#FF79C6"}},"&&"),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;</span></code></div></pre>`},"getMessageCluster")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"if"),s("span",{style:{color:"#F8F8F2"}},[a(" ("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">} </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"messageCluster"),a(") {")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> globals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span></code></div></pre>`},"globals"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"messageCluster"),a(".")]),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) getGlobals: () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">Globals</span><span style="color: #FF79C6">&gt;</span></code></div></pre>`},"getGlobals")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  }")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
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
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
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
    getMessageRecord: (consistentRead = false) =>
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

type Globals = {
  firstName: string,
  lastName: string
}[]

async function processMessage(record: SQSRecord) {
  const { id, body, getMessageRecord, getMessageCluster } = 
    readSQSRecord<Body, MetaData, Globals>(record)
  
  const messageRecord = await getMessageRecord()

  const messageCluster = 
    getMessageCluster && 
    await getMessageCluster()

  if (messageCluster) {
    const globals = await messageCluster.getGlobals()
  }
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"This is done so that you do not waste time fetching data from S3 if it is not needed."),a(" This is done so that you do not waste time fetching data from S3 if it is not needed. ")])]),s("div",{class:"alert alert-dracula",role:"alert"},[s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F Hey, a possible improvement here would be to store the s3 bucket params in the message body as well. This means that you could get global data without getting the message cluster record."),s("img",{class:"twemoji",draggable:"false",alt:"\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F",src:"https://twemoji.maxcdn.com/v/13.1.0/72x72/1f9db-1f3fb-200d-2642-fe0f.png"}),a(" Hey, a possible improvement here would be to store the s3 bucket params in the message body as well. This means that you could get global data without getting the message cluster record. ")])])]),s("h2",{id:"updating-global-data",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#updating-global-data","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Updating Global Data"),a(" Updating Global Data ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You can use "),a(" You can use ")]),s("code",null,"updateClusterGlobals()"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to update the globals for a cluster. You can pass it the key as either the "),a(" to update the globals for a cluster. You can pass it the key as either the ")]),s("code",null,"pKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," and "),a(" and ")]),s("code",null,"rKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," object, or simply just the "),a(" object, or simply just the ")]),s("code",null,"pKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," as the global data store only uses the "),a(" as the global data store only uses the ")]),s("code",null,"pKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"."),a(" . ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"You can also pass it a new globals object, or pass it a function that returns a new globals object and accepts the old globals object."),a(" You can also pass it a new globals object, or pass it a function that returns a new globals object and accepts the old globals object. ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) firstName: string</span></code></div></pre>`},"firstName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) lastName: string</span></code></div></pre>`},"lastName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}[]")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> getMessageCluster</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">MessageClusterRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">    </span><span style="color: #50FA7B">getGlobals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> () </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #FFB86C; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;;</span>
<span style="color: #F8F8F2">}&gt;) </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"getMessageCluster"),a(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},[a(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),a(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a()]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"()")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"// Perform a total rewrite of the global store")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">updateClusterGlobals</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">key</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">\`SQSMessage$</span><span style="color: #FF79C6">\${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">\`</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">\`SQSMessage$</span><span style="color: #FF79C6">\${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">\`</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}, </span><span style="color: #FFB86C; font-style: italic">globals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">globals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2">))</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}&gt;</span></code></div></pre>`},"updateClusterGlobals")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},">(")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("    { "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) pKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"pKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a("."),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) pKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"pKey"),a(", "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) rKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"rKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a("."),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) rKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"rKey"),a(" },")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("    [{ "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) firstName: string</span></code></div></pre>`},"firstName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"John"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},[a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) lastName: string</span></code></div></pre>`},"lastName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Doe"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," }]")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#6272A4"}},"// Perform a insert of data to the global store")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">updateClusterGlobals</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Globals</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">key</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">\`SQSMessage$</span><span style="color: #FF79C6">\${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">\`</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #F1FA8C">\`SQSMessage$</span><span style="color: #FF79C6">\${</span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">\`</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}, </span><span style="color: #FFB86C; font-style: italic">globals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">globals</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2">))</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}&gt;</span></code></div></pre>`},"updateClusterGlobals")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},">(")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[a("    { "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) pKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"pKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a("."),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) pKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"pKey"),a(", "),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) rKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"rKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}},[a(),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> messageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"messageRecord"),a("."),s("data-lsp",{lsp:'<pre class="shiki"><div class="language-id">ts</div><div class=\'code-container\'><code><span style="color: #F8F8F2">(property) rKey: </span><span style="color: #F1FA8C">`SQSMessage$</span><span style="color: #FF79C6">${</span><span style="color: #F8F8F2">string</span><span style="color: #FF79C6">}</span><span style="color: #F1FA8C">`</span></code></div></pre>'},"rKey"),a(" },")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) globals: Globals</span></code></div></pre>`},"globals")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Globals</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    firstName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    lastName</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}[]</span></code></div></pre>`},"Globals")]),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," ["),s("span",{style:{color:"#FF79C6"}},"..."),s("span",{style:{color:"#F8F8F2"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) globals: Globals</span></code></div></pre>`},"globals"),a(", { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) firstName: string</span></code></div></pre>`},"firstName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"John"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},[a(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) lastName: string</span></code></div></pre>`},"lastName")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"Doe"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}}," }]")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
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
  type: RecordType,
  getMessageCluster?: 
    (consistentRead?: boolean) => Promise<{ 
      record: MessageClusterRecord<Meta>,
      getGlobals: () => Promise<Globals> 
    }>,
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
    getMessageRecord: (consistentRead = false) =>
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
export async function updateClusterGlobals<Globals = any>(
  key: { pKey: SQSMessageKey, rKey: SQSMessageKey }, 
  globals: Globals | ((globals: Globals) => Globals)
): Promise<{ pKey: string, rKey: string }> {
  return { pKey: <SINGLE-QUOTE><SINGLE-QUOTE>, rKey: <SINGLE-QUOTE><SINGLE-QUOTE> }
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
    readSQSRecord<Body, MetaData, Globals>(record)
  
  const messageRecord = await getMessageRecord()

  // Perform a total rewrite of the global store
  await updateClusterGlobals<Globals>(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    [{ firstName: <SINGLE-QUOTE>John<SINGLE-QUOTE>, lastName: <SINGLE-QUOTE>Doe<SINGLE-QUOTE> }]
  )

  // Perform a insert of data to the global store
  await updateClusterGlobals<Globals>(
    { pKey: messageRecord.pKey, rKey: messageRecord.rKey },
    (globals: Globals) => [...globals, { firstName: <SINGLE-QUOTE>John<SINGLE-QUOTE>, lastName: <SINGLE-QUOTE>Doe<SINGLE-QUOTE> }]
  )
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])])],-1),v={setup(y,{expose:e}){const n={title:"Processing Messages (Tasks) that are part of a Cluster",duration:"11 min read",content:`-
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
`,meta:[{property:"og:title",content:"Processing Messages (Tasks) that are part of a Cluster"}]};return e({frontmatter:n}),t({title:"Processing Messages (Tasks) that are part of a Cluster",meta:[{property:"og:title",content:"Processing Messages (Tasks) that are part of a Cluster"}]}),(d,g)=>{const l=o;return p(),F(l,{frontmatter:n},{default:r(()=>[c]),_:1})}}};export{v as default};
