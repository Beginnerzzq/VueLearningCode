<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 把数据给插槽的使用者 -->
        <slot :games="games">我是一个默认值</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['斗斗堂','金铲铲','王者荣耀','英雄联盟'],
            }
        },
    }
</script>

<style scoped>
    .category{
        background-color: skyblue;
        height: 300px;
        width: 200px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    video{
        widows: 100%;
    }
    img{
        width: 100%;
    }
</style>