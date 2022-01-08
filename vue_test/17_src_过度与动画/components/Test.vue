<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hi" appear>
        <!-- 上面是简便写法，appear属性是为了实现一进来就出现动画效果 <transition name="hi" :appear="true"> -->
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
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

    .hi-enter-active{
        animation: hello 1s;
    }

    .hi-leave-active{
        animation: hello 1s reverse;
    }

    @keyframes hello{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>