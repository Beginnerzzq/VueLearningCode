<template>
    <div>
        <li>消息编号:{{id}}</li>
        <li>消息标题:{{title}}</li>
        <!-- <li>{{a}}</li>
        <li>{{b}}</li> -->
    </div>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title'],
        mounted() {
            console.log(this.$route);
        },
    }
</script>

<style lang="scss" scoped>

</style>