import{_ as t,c as s,j as i,F as k,E as l,aQ as n,o as a,t as p}from"./chunks/framework.Dmg6k5lo.js";const C=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"demo/guide/devise.md","filePath":"demo/guide/devise.md","lastUpdated":1665313517000}'),e={name:"demo/guide/devise.md"},r=n('<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>vitepress-demoblock-plus 致力于为vitepress添加更专业的Demo演示能力</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在开始之前，推荐先学习 <a href="https://vuejs.org/" target="_blank" rel="noreferrer">vue</a>、<a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">vite</a>和 <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">vitepress</a>，并正确安装和配置了 Node.js v14 或以上。官方指南假设你已了解关于 vue 和 vitepress 的中级知识，并且已经完全掌握了 vitepress 的正确开发方式。</p></div><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>vitepress 本质上是一个 vite 插件，使用它开发的文档网站效果相当于 vue3 + vite 的 ssr 项目，它在内部帮你把所有逻辑都封装好了，你只需要写 markdown 就行。</p><p>vitepress 凭借着 vite 的秒级启动速度、markdown-it 的强大扩展能力、天然支持 vue3 在文档圈迅速流行开来，使用 vitepress 做 vue3 组件库文档也已经非常流行。</p><p>下面是一个基于vitepress的demo示例：</p><h5 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span v-for=&quot;i in 3&quot;&gt;{{ i }}&lt;/span&gt;</span></span></code></pre></div><h5 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h5>',10),d=n(`<p>在写文档的时候我们却要写两遍，一遍用来展示代码文字，一遍用来展示代码结果。这只是一行代码，如果我们在开发组件库或者大型vue组件时，代码可能成千百行，这样显得就很繁琐，且容易出错。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>你所写的 markdown 文档最终都会转成 vue 组件。其原理很简单：把 markdown 渲染成 html 字符串，然后动态生成一个 vue 组件，模版内容就是渲染好的 html 字符串。所以它支持在 markdown 里运行 vue 组件顺理成章。目前已有的解决方案也都是基于markdown插件进行着手的。</p><h5 id="vitepress-demoblock-plus" tabindex="-1">vitepress-demoblock-plus <a class="header-anchor" href="#vitepress-demoblock-plus" aria-label="Permalink to &quot;vitepress-demoblock-plus&quot;">​</a></h5><p>处理方式参照了vitepress-for-component的写法，全局注册demo组件进行实现。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;demo src=&quot;../component/button.vue&quot; desc=&quot;使用 \`type\`、\`plain\`、\`round\` 和 \`circle\` 来定义按钮的样式。&quot; lang=&quot;vue&quot;&gt;&lt;/demo&gt;</span></span></code></pre></div><p>内部原理基于 <a href="https://markdown-it.docschina.org/" target="_blank" rel="noreferrer">markdow-it</a> 插件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoReg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;demo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[\\s\\S]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[\\s\\S]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*?</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">demo&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 匹配demo标签</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoReg_g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoReg, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;g&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoLabels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoReg_g);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取所有的demo标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        demoLabels?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoSrc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDemoLableAttr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo src</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoLang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDemoLableAttr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lang&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo lang</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoDesc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getDemoLableAttr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;desc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo desc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(docPath, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, demoSrc);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo md的绝对路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> existSrc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demoSrc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">existsSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoPath); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断 src 是否存在且正确</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (existSrc) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> demoRelativePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getRelativePath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoComponentsPath, demoPath);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取demo的相对路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoPath).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo中间字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> htmlStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> codeToHtml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codeStr, { lang: demoLang });</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo的html字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> descStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renderInline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoDesc) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//demo的desc字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demoStr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &#39;&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    \` codeStr=&quot;\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        codeStr</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    )</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; htmlStr=&quot;\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">htmlStr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; description=&quot;\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">descStr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; codePath=&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">demoRelativePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;&gt;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo, demoStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h5 id="element-plus" tabindex="-1">element-plus <a class="header-anchor" href="#element-plus" aria-label="Permalink to &quot;element-plus&quot;">​</a></h5><p>element-plus 使用 <a href="https://github.com/markdown-it/markdown-it-container#readme" target="_blank" rel="noreferrer">markdown-it-container</a> 创建了一个自定义容器，使用方式类似于：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: demo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">alert/demo.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p>这里的 ::: 是容器的边界，demo 是容器名字，它的内容是 alert/demo.vue，element-plus 会去指定目录读取这个文件，然后渲染成一个 vue 组件，连同其文件内容呈现在（文档网站）页面上。</p><h5 id="vitepress-for-component" tabindex="-1">vitepress-for-component <a class="header-anchor" href="#vitepress-for-component" aria-label="Permalink to &quot;vitepress-for-component&quot;">​</a></h5><p>vitepress-for-component 则采用了另一种方式：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./demo-example.vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Demo演示&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  desc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是一个Demo渲染示例&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>其基本原理也是基于 <a href="https://markdown-it.docschina.org/" target="_blank" rel="noreferrer">markdow-it</a> 插件：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> demoPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MarkdownIt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">&lt;demo </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  md.renderer.rules.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html_inline</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tokens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tokens[idx].content;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">realPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">urlPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">importMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> md </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> absolutePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(realPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> urlPath, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, src)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path.sep)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> content.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \` componentName=&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; htmlStr=&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">htmlStr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; codeStr=&quot;\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">codeStr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; \${</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          importMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`importMap=&quot;\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">importMap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        } &gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&gt;&lt;/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> content;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>可以看出，这是自定义了 html 渲染，如果 html 标签是 demo 的话，就修改成自己想要的样子, 但是这里会有一个问题demo组件里如果还有script引入的资源将无法处理且 vitepress-for-component 是 fork vitepress 的，后期vipress升级之后，一些改动会变的很繁琐。所以vitepress-demoblock-plus采用非fork的形式开发。</p>`,18);function E(g,o,F,y,c,m){return a(),s("div",null,[r,i("p",null,[(a(),s(k,null,l(3,h=>i("span",null,p(h),1)),64))]),d])}const D=t(e,[["render",E]]);export{C as __pageData,D as default};
