<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影"/>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name: "App",
        components:{Category},
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['斗斗堂','金铲铲','王者荣耀','英雄联盟'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《星际穿越》']
            }
        },
    };
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>