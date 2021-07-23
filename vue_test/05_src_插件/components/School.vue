<template>
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试hello方法</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'jxufe',
                address:'江西'
            }
        },
        methods: {
            test(){
                this.hello()
            }
        },
    }
</script>