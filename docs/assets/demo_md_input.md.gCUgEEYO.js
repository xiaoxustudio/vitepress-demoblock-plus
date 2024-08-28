import{_ as t,D as n,c as e,I as o,aQ as s,o as D}from"./chunks/framework.Dmg6k5lo.js";const i=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"demo/md/input.md","filePath":"demo/md/input.md","lastUpdated":1665313517000}'),l={name:"demo/md/input.md"},p=s('<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><p>通过鼠标或键盘输入字符</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Input 为受控组件，它 总会显示 Vue 绑定值。</p><p>在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 v-model)。 否则，输入框的值将不会改变。</p><p>不支持 v-model 修饰符。</p></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><h6 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;demo src=&quot;../component/input.vue&quot;&gt;&lt;/demo&gt;</span></span></code></pre></div><h6 id="输出" tabindex="-1">输出 <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出&quot;">​</a></h6>',7);function A(E,C,F,c,d,r){const a=n("demo");return D(),e("div",null,[p,o(a,{src:"../component/input.vue",codeStr:"%3Ctemplate%3E%0D%0A%20%20%3Cel-input%20v-model%3D%22input%22%20placeholder%3D%22Please%20input%22%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aconst%20input%20%3D%20ref(%22%22)%3B%0D%0A%3C%2Fscript%3E%0D%0A",htmlStr:"%3Cpre%20class%3D%22shiki%20material-theme-palenight%22%20style%3D%22background-color%3A%23292D3E%3Bcolor%3A%23babed8%22%20tabindex%3D%220%22%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%221%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A1%3A0%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A1%3A1%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A1%3A9%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%222%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A0%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A2%3A3%22%3Eel-input%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A2%3A11%22%3E%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A19%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A20%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A2%3A21%22%3Einput%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A26%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A2%3A27%22%3E%20placeholder%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A39%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A40%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A2%3A41%22%3EPlease%20input%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A53%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A2%3A54%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%223%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A3%3A0%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A3%3A2%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A3%3A10%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%20highlight%22%20data-line%3D%224%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%225%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A0%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A5%3A1%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A5%3A7%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A12%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A13%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A5%3A14%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A16%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A5%3A17%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A5%3A23%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%226%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A6%3A0%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A6%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A6%3A8%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A12%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%3Bfont-style%3Aitalic%22%20data-token%3D%22token%3A6%3A14%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A19%22%3E%20%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23C3E88D%22%20data-token%3D%22token%3A6%3A21%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A24%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A6%3A25%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%227%22%3E%3Cspan%20style%3D%22color%3A%23C792EA%22%20data-token%3D%22token%3A7%3A0%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A7%3A5%22%3E%20input%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A7%3A12%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2382AAFF%22%20data-token%3D%22token%3A7%3A13%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A7%3A17%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A7%3A18%22%3E%22%22%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23BABED8%22%20data-token%3D%22token%3A7%3A20%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A7%3A21%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%228%22%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A0%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%23F07178%22%20data-token%3D%22token%3A8%3A2%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%2389DDFF%22%20data-token%3D%22token%3A8%3A8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%20data-line%3D%229%22%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",description:"",codePath:"../../demo/component/input.vue",language:"vue"})])}const u=t(l,[["render",A]]);export{i as __pageData,u as default};
