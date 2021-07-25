<template>
    <div class="test">
        <h2>学生姓名：{{name}}</h2>
        <h2 class="sex">学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男'
            }
        },
    }
</script>

<style lang="less" scoped>
    .test{
        background-color: pink;
        .sex{
            font-size: 40px;
        }
    }
</style>