//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions = {
    jiaOdd(context,value){
        if(context,state.sum % 2){
            context.commit('JIA',value);
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value);
        }, 500);
    },
}
//准备mutattons——用于操作数据（state）
const mutations = {
    JIA(state,value){
        // console.log('mutation中的JIA被调用了',a,b);
        state.sum += value; 
    },
    JIAN(state,value){
        state.sum -= value;
    }
}
//准备state——用于存储数据
const state = {
    sum:0,//当前的和
    school:'尚硅谷',
    subject:'前端'
}
//准备state——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10;
    } 
}


//创建并暴露store
export default new Vuex.Store({
    // 对象里的key和保存对应值的变量重名，可简写
    actions,
    mutations,
    state,
    getters
    // actions:actions,
    // mutations:mutations,
    // state:state,
})