<template>
    <div class="container">
        <Category title="游戏">
            <template scope="games">
                <!-- {{games}} -->
                <ul>
                    <!-- games被接收过来是一个对象 -->
                    <li v-for="(g,index) in games.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name: "App",
        components:{Category},
    };
</script>

<style>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
</style>