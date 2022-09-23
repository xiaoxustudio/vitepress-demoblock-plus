import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from '../../components/Demo.vue'
// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo)
    }
}