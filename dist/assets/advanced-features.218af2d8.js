import{_ as t}from"./Post.3c6da465.js";import{q as l,o as r,k as p,w as c,a as s,z as e}from"./vendor.09be1bf3.js";import"./app.3d6c68a9.js";const F=s("div",{class:"prose prose-sm text-left max-w-3xl mx-auto"},[s("h2",{id:"updating-a-message-record",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#updating-a-message-record","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Updating a Message Record"),e(" Updating a Message Record ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"If you ever need to update a message record\u2019s "),e(" If you ever need to update a message record\u2019s ")]),s("code",null,"meta"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," data you can do so by using the "),e(" data you can do so by using the ")]),s("code",null,"updateMessageRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," function. You can update anything insdie the message record, except the "),e(" function. You can update anything insdie the message record, except the ")]),s("code",null,"pKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," and "),e(" and ")]),s("code",null,"rKey"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", but is advised not to update the message record directly, but rather, use methods to perform updates to "),e(" , but is advised not to update the message record directly, but rather, use methods to perform updates to ")]),s("code",null,"status"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", "),e(" , ")]),s("code",null,"statusCode"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", "),e(" , ")]),s("code",null,"completedAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", "),e(" , ")]),s("code",null,"updatedAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", "),e(" , ")]),s("code",null,"expiresAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", "),e(" , ")]),s("code",null,"consumtion_count"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},", and "),e(" , and ")]),s("code",null,"error"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"."),e(" . ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span></code></div></pre>`},"url"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),e(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},[e(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),e(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">updateMessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">key</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}, </span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt; </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> ((</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;...&gt;))</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;...&gt;</span></code></div></pre>`},"updateMessageRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},">(")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("    { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) pKey: string</span></code></div></pre>`},"pKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"`SQSMessage$"),s("span",{style:{color:"#FF79C6"}},"${"),s("span",{style:{color:"#F8F8F2"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id")]),s("span",{style:{color:"#FF79C6"}},"}"),s("span",{style:{color:"#F1FA8C"}},"`"),s("span",{style:{color:"#F8F8F2"}},[e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) rKey: string</span></code></div></pre>`},"rKey")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#F1FA8C"}},"`SQSMessage$"),s("span",{style:{color:"#FF79C6"}},"${"),s("span",{style:{color:"#F8F8F2"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span></code></div></pre>`},"url")]),s("span",{style:{color:"#FF79C6"}},"}"),s("span",{style:{color:"#F1FA8C"}},"`"),s("span",{style:{color:"#F8F8F2"}}," }, ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    ("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) oldRecord: MessageRecord</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">MetaData, Body</span><span style="color: #FF79C6">&gt;</span></code></div></pre>`},"oldRecord")]),s("span",{style:{color:"#F8F8F2"}},") "),s("span",{style:{color:"#FF79C6"}},"=>"),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      "),s("span",{style:{color:"#FF79C6"}},"return"),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        "),s("span",{style:{color:"#FF79C6"}},"..."),s("span",{style:{color:"#F8F8F2"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) oldRecord: MessageRecord</span><span style="color: #FF79C6">&lt;</span><span style="color: #F8F8F2">MetaData, Body</span><span style="color: #FF79C6">&gt;</span></code></div></pre>`},"oldRecord"),e(",")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("        "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) meta</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> MetaData </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #BD93F9">undefined</span></code></div></pre>`},"meta")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("          "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"new stuff"),s("span",{style:{color:"#E9F284"}},"'")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        }")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"      }")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    }")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  )")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
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
import { SQSRecord } from <SINGLE-QUOTE>aws-lambda<SINGLE-QUOTE>
export async function updateMessageRecord<Meta = any, Body = any>(
  key: { pKey: string; rKey: string },
  record: MessageRecord<Meta> | ((record: MessageRecord<Meta, Body>) => MessageRecord<Meta, Body>),
): Promise<{ pKey: string; rKey: string }> { return { pKey: <SINGLE-QUOTE><SINGLE-QUOTE>, rKey: <SINGLE-QUOTE><SINGLE-QUOTE> } }


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
  const { id, body, url, getMessageRecord } = 
    readSQSRecord<Body, MetaData>(record)
  
  await updateMessageRecord<MetaData, Body>(
    { pKey: \`SQSMessage$\${id}\`, rKey: \`SQSMessage$\${url}\` }, 
    (oldRecord) => {
      return {
        ...oldRecord,
        meta: {
          stuff: <SINGLE-QUOTE>new stuff<SINGLE-QUOTE>
        }
      }
    }
  )
}
`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"To make it easy to make certain that the record is not being fundamentally changed, you can pass the second parameter of "),e(" To make it easy to make certain that the record is not being fundamentally changed, you can pass the second parameter of ")]),s("code",null,"updateMessageRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," a function that will get the old record and return the new record."),e(" a function that will get the old record and return the new record. ")])]),s("h2",{id:"marking-a-message-as-complete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#marking-a-message-as-complete","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Marking a message as complete"),e(" Marking a message as complete ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"If you use the "),e(" If you use the ")]),s("code",null,"safeProcessMessageAsync"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," method, this will occur for you automatically. Marking a message as complete does several important things, incluing checking the timing of other concurrent messages and updating the record in the order recieved."),e(" method, this will occur for you automatically. Marking a message as complete does several important things, incluing checking the timing of other concurrent messages and updating the record in the order recieved. ")])]),s("p",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"::: danger"),e(" ::: danger ")]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Avoid using "),e(" Avoid using ")]),s("code",null,"updateMessageRecord"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to directly marke a message as complete."),e(" to directly marke a message as complete. ")]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},":::"),e(" ::: ")])]),s("div",{style:{position:"relative"}},[s("pre",{class:"shiki dracula twoslash lsp",style:{"background-color":"#282A36",color:"#F8F8F2"}},[s("div",{class:"language-id"},"ts"),s("code",{class:"code-container"},[s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) data: string</span></code></div></pre>`},"data")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string"),s("span",{style:{color:"#F8F8F2"}},",")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) moreData: number</span></code></div></pre>`},"moreData")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"number")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"type"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},[e("  "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(property) stuff: string</span></code></div></pre>`},"stuff")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},"string")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0"),s("div",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"async"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"function"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">processMessage</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #8BE9FD; font-style: italic">void</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"processMessage")]),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record")]),s("span",{style:{color:"#FF79C6"}},":"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#8BE9FD","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(alias) </span><span style="color: #FF79C6">interface</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span>
<span style="color: #8BE9FD; font-style: italic">import</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span></code></div></pre>`},"SQSRecord")]),s("span",{style:{color:"#F8F8F2"}},") {")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"const"),s("span",{style:{color:"#F8F8F2"}},[e(" { "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> id</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span></code></div></pre>`},"id"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> body</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span></code></div></pre>`},"body"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> url</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span></code></div></pre>`},"url"),e(", "),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">const</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">getMessageRecord</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> (</span><span style="color: #FFB86C; font-style: italic">consistentRead</span><span style="color: #FF79C6">?:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">boolean</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">|</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">undefined</span><span style="color: #F8F8F2">) </span><span style="color: #FF79C6">=&gt;</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MessageRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;&gt;</span></code></div></pre>`},"getMessageRecord"),e(" } ")]),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">readSQSRecord</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">&gt;(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Response</span><span style="color: #F8F8F2">&lt;</span><span style="color: #FFB86C; font-style: italic">MetaData</span><span style="color: #F8F8F2">, </span><span style="color: #8BE9FD; font-style: italic">any</span><span style="color: #F8F8F2">, </span><span style="color: #FFB86C; font-style: italic">Body</span><span style="color: #F8F8F2">&gt;</span></code></div></pre>`},"readSQSRecord")]),s("span",{style:{color:"#F8F8F2"}},"<"),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Body</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    data</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    moreData</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">number</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"Body")]),s("span",{style:{color:"#F8F8F2"}},", "),s("span",{style:{color:"#FFB86C","font-style":"italic"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">type</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">MetaData</span><span style="color: #F8F8F2"> </span><span style="color: #FF79C6">=</span><span style="color: #F8F8F2"> {</span>
<span style="color: #F8F8F2">    stuff</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}</span></code></div></pre>`},"MetaData")]),s("span",{style:{color:"#F8F8F2"}},[e(">("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),e(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  ")]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"  "),s("span",{style:{color:"#FF79C6"}},"await"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},[s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #FF79C6">function</span><span style="color: #F8F8F2"> </span><span style="color: #50FA7B">markComplete</span><span style="color: #F8F8F2">(</span><span style="color: #FFB86C; font-style: italic">record</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">SQSRecord</span><span style="color: #F8F8F2">)</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">Promise</span><span style="color: #F8F8F2">&lt;{</span>
<span style="color: #F8F8F2">    pKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">    rKey</span><span style="color: #FF79C6">:</span><span style="color: #F8F8F2"> </span><span style="color: #8BE9FD; font-style: italic">string</span><span style="color: #F8F8F2">;</span>
<span style="color: #F8F8F2">}&gt;</span></code></div></pre>`},"markComplete")]),s("span",{style:{color:"#F8F8F2"}},[e("("),s("data-lsp",{lsp:`<pre class="shiki"><div class="language-id">ts</div><div class='code-container'><code><span style="color: #F8F8F2">(parameter) record: SQSRecord</span></code></div></pre>`},"record"),e(")")])]),s("div",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),s("div",{class:"line"},"\xA0")])]),s("button",{class:"markdown-it-code-copy","data-clipboard-text":`
	import { SQSRecord } from <SINGLE-QUOTE>aws-lambda<SINGLE-QUOTE>
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
export async function updateMessageRecord<Meta = any, Body = any>(
  key: { pKey: string; rKey: string },
  record: MessageRecord<Meta> | ((record: MessageRecord<Meta, Body>) => MessageRecord<Meta, Body>),
): Promise<{ pKey: string; rKey: string }> { return { pKey: <SINGLE-QUOTE><SINGLE-QUOTE>, rKey: <SINGLE-QUOTE><SINGLE-QUOTE> } }


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

export async function markComplete(record: SQSRecord): Promise<{ pKey: string; rKey: string }> {
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

async function processMessage(record: SQSRecord) {
  const { id, body, url, getMessageRecord } = 
    readSQSRecord<Body, MetaData>(record)
  
  await markComplete(record)
}

`,style:{position:"absolute",top:"7.5px",right:"6px",cursor:"pointer",outline:"none"},title:"Copy"},[s("span",{style:{},class:"heroicon heroicon-duplicate"})])]),s("h2",{id:"diving-deeper-into-marking-a-message-as-complete",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#diving-deeper-into-marking-a-message-as-complete","aria-hidden":"true"},"#"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"})]),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Diving deeper into marking a message as complete"),e(" Diving deeper into marking a message as complete ")])]),s("ol",null,[s("li",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Read the SQS Record and get the message data."),e(" Read the SQS Record and get the message data. ")])]),s("li",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Update the following on the message record:"),e(" Update the following on the message record: ")])])]),s("ul",null,[s("li",null,[s("code",null,"status"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - to "),e(" - to ")]),s("code",null,"COMPLETE")]),s("li",null,[s("code",null,"statusCode"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - to "),e(" - to ")]),s("code",null,"200")]),s("li",null,[s("code",null,"completedAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - to the current time"),e(" - to the current time ")])]),s("li",null,[s("code",null,"updatedAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - to the current time"),e(" - to the current time ")])]),s("li",null,[s("code",null,"expiresAt"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," - to the current time + the the "),e(" - to the current time + the the ")]),s("code",null,"MessageRetentionPeriod"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to ensure that the message record can exist for any messages that could possibly still come in. Those messages will need to know not to continue processing the message, because it is already complete."),e(" to ensure that the message record can exist for any messages that could possibly still come in. Those messages will need to know not to continue processing the message, because it is already complete. ")])])]),s("ol",{start:"3"},[s("li",null,[s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"},"Check the message type. If the message is a "),e(" Check the message type. If the message is a ")]),s("code",null,"task"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," then update the message cluster record. Moving this task from "),e(" then update the message cluster record. Moving this task from ")]),s("code",null,"incompleteTasks"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," to "),e(" to ")]),s("code",null,"completeTasks"),s("span",{class:"emoji-wrapper"},[s("span",{class:"native-emoji"}," and potentially updating the cluster record\u2019s status to show that the cluster is complete."),e(" and potentially updating the cluster record\u2019s status to show that the cluster is complete. ")])])])],-1),f={setup(i,{expose:n}){const a={title:"Advanced Features",duration:"7 min read",content:`Updating a Message Record
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

`,meta:[{property:"og:title",content:"Advanced Features"}]};return n({frontmatter:a}),l({title:"Advanced Features",meta:[{property:"og:title",content:"Advanced Features"}]}),(y,g)=>{const o=t;return r(),p(o,{frontmatter:a},{default:c(()=>[F]),_:1})}}};export{f as default};
