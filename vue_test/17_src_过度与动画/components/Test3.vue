<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group
         appear
         name="animate__animated animate__bounce"
         enter-active-class="animate__swing"
         leave-active-class="animate__backOutUp"
         >
        <!-- 上面是简便写法，appear属性是为了实现一进来就出现动画效果 <transition name="hi" :appear="true"> -->
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">zzq！</h1>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'
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
</style>