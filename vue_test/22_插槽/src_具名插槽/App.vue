<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="">单机游戏</a>
                <a href="">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <!-- 最新的具名插槽的写法 v-slot:name -->
            <template v-slot:footer>
                <div class="foot">
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
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
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
</style>