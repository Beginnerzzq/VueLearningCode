<template>
    <div>
        <h1 class="title">你好</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name:'App',
        components:{Student,School},
    }
</script>

<style>
    .title{
        color: red;
    }
</style>