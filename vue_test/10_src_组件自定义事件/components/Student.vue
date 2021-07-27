<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑事件</button>
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
        methods: {
            sendStudentName(){
                //触发Student组件实例身上的atguigu事件
                this.$emit('atjufe',this.name)
                // this.$emit('demo')
            },
            unbind(){
                this.$off('atjufe') //解绑一个自定义事件
                // this.$off(['atjufe','demo']) //解绑全部自定义事件
            }
        },
    }
</script>

<style lang="less" scoped>
    .student{
        background-color: pink;
        margin-top: 30px;
    }
</style>