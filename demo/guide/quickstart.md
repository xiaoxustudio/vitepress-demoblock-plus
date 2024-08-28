# 快速上手

vitepress-demoblock-x 致力于为 vitepress 添加更专业的 Demo 演示能力

::: tip
在开始之前，推荐先学习 [vue](https://vuejs.org/) 和 [vitepress](https://vitepress.vuejs.org/)，并正确安装和配置了 Node.js v14 或以上。官方指南假设你已了解关于 vue 和 vitepress 的中级知识，并且已经完全掌握了 vue 的正确开发方式。
:::

## 安装

我们建议您使用包管理器 (NPM,[Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) 安装 <code>vitepress-demoblock-x</code>

```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install vitepress-demoblock-x --save

# Yarn
$ yarn add vitepress-demoblock-x

# pnpm
$ pnpm install vitepress-demoblock-x
```

## 引入

先注册 `vitepress-demoblock-x` 提供的 markdown 解析插件

```js
// .vitepress/config.ts or .vitepress/config.js
import demoblock from "vitepress-demoblock-x";
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

再引入 `vitepress-demoblock-x` 提供的 demo 组件

```js
// .vitepress/theme/index.ts or .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'vitepress-demoblock-x/demo.vue'
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

<demo src="../component/button.vue" desc="使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。"></demo>
