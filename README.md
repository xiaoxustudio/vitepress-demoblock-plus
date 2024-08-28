<div align="center">
	<h1 align="center">vitepress-demoblock-xr</h1>
</div>
<p>&emsp;&emsp;为vitepress添加更专业的Demo演示能力，让您在开发vue组件库或者vue相关文档编写时，可以通过引入vue文件的时候结果显示和代码演示。</p>

**PS：原插件作者不更新了，还有很多 bug 呢，那么我就来自己 fork 更新一波**

**欢迎提出您的 Issue，我看到就会尝试修复，也欢迎各位的 PR**

**以下是原仓库文档，我将保留其文档内容，方便查阅**

## 文档

[官方文档](https://1006008051.github.io/vitepress-demoblock) | [快速上手](https://1006008051.github.io/vitepress-demoblock/demo/guide/quickstart.html) | [组件演示](https://1006008051.github.io/vitepress-demoblock/demo/md/button.html)

## 安装

我们建议您使用包管理器 (NPM,[Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) 安装 <code>vitepress-demoblock</code>

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install vitepress-demoblock-xr --save

# Yarn
$ yarn add vitepress-demoblock-xr

# pnpm
$ pnpm install vitepress-demoblock-xr
```

## 引入

先注册 `vitepress-demoblock-xr` 提供的 markdown 解析插件

```js
// .vitepress/config.ts or .vitepress/config.js
import demoblock from "vitepress-demoblock-xr";
export default {
	// ...
	markdown: {
		// ...
		config: (md) => {
			md.use(demoblock);
		},
	},
};
```

再引入 `vitepress-demoblock-xr` 提供的 demo 组件

```js
// .vitepress/theme/index.ts or .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'vitepress-demoblock-xr/demo.vue'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo)
    }
```

## 使用

###### 输入

```
<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>
```

###### 输出

![demo演示](https://1006008051.github.io/vitepress-demoblock/demo.png)
