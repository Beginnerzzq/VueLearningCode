<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                schoolName:'jxufe',
                address:'江西'
            }
        },
        mounted() {
            this.$bus.$on('hello',(data) => {
                console.log('我是School组件，收到了数据',data);
            })
        },
        beforeDestroy() {
			this.$bus.$off('hello')
		},
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        margin-top: 30px;
    }
</style>