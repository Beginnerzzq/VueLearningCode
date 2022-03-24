<template>
    <div>
        <div class="col-xs-offset-2 col-xs-8">
				<div class="page-header">
                    <h2>Vue Router Demo</h2>
                    <button @click="forward">前进</button>
                    <button @click="back">后退</button>
                    <button @click="go">测试一下go API</button>
                </div>
		</div>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
            forward(){
                this.$router.forward()
            },
            back(){
                this.$router.back()
            },
            go(){
                this.$router.go(-2)
            }
        },
    }
</script>
