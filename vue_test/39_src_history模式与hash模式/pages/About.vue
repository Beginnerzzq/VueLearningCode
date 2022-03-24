<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
    export default {
        name:'ABout',
        //通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
            console.log('进入时调用了',to,from,next);
            if(to.meta.isAuth){
                if (localStorage.getItem('school') === 'atguigu') {
                    next()
                }else{
                    alert('学校名不对,无权查看')
                }
            }else{
                next()
            }
        },
        //通过路由规则，进入该组件时被调用
        beforeRouteLeave (to, from, next) {
            console.log('离开时调用了',to,from,next);
            next()
        }
    }
</script>
