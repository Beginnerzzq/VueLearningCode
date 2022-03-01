<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/666/你好啊`">{{message.title}}</router-link>&nbsp;&nbsp; -->
                
                <router-link :to="{
                    name:'xiangqing',//如果用params传参，必须使用name不能使用path
                    params:{
                        id:message.id,
                        title:message.title,
                    }
                }">
                    {{message.title}}
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>