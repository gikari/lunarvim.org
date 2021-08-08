(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[789],{8833:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-2600f030",path:"/languages/python.html",title:"Python",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]},{level:2,title:"Linters",slug:"linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/python.md",git:{updatedTime:162819342e4,contributors:[]}}},1096:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall <span class="token keyword">python</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall <span class="token keyword">python</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>python<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be yapf, or isort as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> Linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>python<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;flake8&quot;</span><span class="token punctuation">,</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>NlspConfig pyright\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>DIInstall python_dbg\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- ~/.config/lvim/ftplugin/python.lua</span>\n<span class="token keyword">local</span> dap_install <span class="token operator">=</span> require <span class="token string">&quot;dap-install&quot;</span>\ndap_install<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token string">&quot;python_dbg&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',14),t={render:function(n,a){return e}}}}]);