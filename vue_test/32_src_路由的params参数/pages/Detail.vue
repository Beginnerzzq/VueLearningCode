<template>
    <div>
        <li>消息编号:{{$route.params.id}}</li>
        <li>消息标题:{{$route.params.title}}</li>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        mounted() {
            console.log(this.$route);
        },
    }
</script>

<style lang="scss" scoped>

</style>