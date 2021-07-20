<template>
    <div>
        <h1 v-text="msg"></h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge}}</h2>
        <button @click="myAge++">点我修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一个江西财经大学的学生',
                myAge:this.age
            }
        },
        // 简单声明接收
        // props:['name','age','sex'] 
        
        // 接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String, //name的类型
                required:true //name是必要的
            },
            sex:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            }
        }
    }
</script>