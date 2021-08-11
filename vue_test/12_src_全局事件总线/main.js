import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render: h => h(App)
})