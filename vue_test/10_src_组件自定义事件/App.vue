<template>
    <div class="app">
        <h1>{{msg}}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <Student @atjufe="getStudentName" @demo="m1"/>
        <!-- <Student v-on:atjufe="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
        <!-- <Student ref="student"/> -->
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'你好'
            }
        },
        methods: {
            getSchoolName(schoolName){
                console.log('App收到了学校名:' + schoolName);
            },
            getStudentName(studentName){
                console.log('App收到了学生名:' + studentName);
            },
            m1(){
                console.log('demo事件被触发了');
            }
        },
        mounted() {
            // this.$refs.student.$on('atjufe',this.getStudentName)
            // this.$refs.student.$once('atjufe',this.getStudentName)  //只能使用一次
        },
    }
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>