import{_ as s,c as a,o as i,aQ as n}from"./chunks/framework.Dmg6k5lo.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1665547718000}'),e={name:"README.md"},t=n(`<div align="center"><h1 align="center">vitepress-demoblock-plus</h1></div><p>  为vitepress添加更专业的Demo演示能力，让您在开发vue组件库或者vue相关文档编写时，可以通过引入vue文件的时候结果显示和代码演示。</p><p><strong>PS：原插件作者不更新了，还有很多 bug 呢，那么我就来自己 fork 更新一波</strong></p><p><strong>欢迎提出您的 Issue，我看到就会尝试修复，也欢迎各位的 PR</strong></p><h2 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h2><p><a href="https://1006008051.github.io/vitepress-demoblock" target="_blank" rel="noreferrer">官方文档</a> | <a href="https://1006008051.github.io/vitepress-demoblock/demo/guide/quickstart.html" target="_blank" rel="noreferrer">快速上手</a> | <a href="https://1006008051.github.io/vitepress-demoblock/demo/md/button.html" target="_blank" rel="noreferrer">组件演示</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>我们建议您使用包管理器 (NPM,<a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a> 安装 <code>vitepress-demoblock</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 选择一个你喜欢的包管理器</span></span>
<span class="line"><span></span></span>
<span class="line"><span># NPM</span></span>
<span class="line"><span>$ npm install vitepress-demoblock --save</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Yarn</span></span>
<span class="line"><span>$ yarn add vitepress-demoblock</span></span>
<span class="line"><span></span></span>
<span class="line"><span># pnpm</span></span>
<span class="line"><span>$ pnpm install vitepress-demoblock</span></span></code></pre></div><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><p>先注册 <code>vitepress-demoblock</code> 提供的 markdown 解析插件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.ts or .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demoblock </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vitepress-demoblock&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	markdown: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demoblock);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>再引入 <code>vitepress-demoblock</code> 提供的 demo 组件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/theme/index.ts or .vitepress/theme/index.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//引入默认主题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> demo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-demoblock/demo.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, demo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h6 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;demo src=&quot;../component/button.vue&quot; desc=&quot;使用 \`type\`、\`plain\`、\`round\` 和 \`circle\` 来定义按钮的样式。&quot;&gt;&lt;/demo&gt;</span></span></code></pre></div><h6 id="输出" tabindex="-1">输出 <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出&quot;">​</a></h6><p><img src="https://1006008051.github.io/vitepress-demoblock/demo.png" alt="demo演示"></p>`,19),p=[t];function l(h,k,r,o,d,c){return i(),a("div",null,p)}const m=s(e,[["render",l]]);export{g as __pageData,m as default};
