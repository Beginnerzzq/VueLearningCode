<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hi" appear>
        <!-- 上面是简便写法，appear属性是为了实现一进来就出现动画效果 <transition name="hi" :appear="true"> -->
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">zzq！</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:'test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: rgb(235, 208, 88);
    }

    /* 进入的起点,离开的终点 */
    .hi-enter,.hi-leave-to{
        transform: translateX(-100%);
    }

    .hi-enter-active,.hi-leave-active{
        transition: 1s;
    }

    /* 进入的终点,离开的起点 */
    .hi-enter-to,.hi-leave{
        transform: translateX(0);
    }
</style>