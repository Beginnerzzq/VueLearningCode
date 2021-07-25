import Vue from 'vue'
import App from './App.vue'
//引入插件
import plugins from './plugins'

Vue.config.productionTip = false

//应用（使用）插件
Vue.use(plugins)

new Vue({
    el:'#app',
    render: h => h(App)
})