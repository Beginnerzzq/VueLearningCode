<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>当前求和放大十倍为：{{bigSum}}</h1>
		<h3>我在{{school}},学习{{subject}}</h3>
		<h3 style="color:red">下方组件总人数为{{personList.length}}</h3>
		<select v-model="n">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="jiaOdd(n)">当前求和为奇数再加</button>
		<button @click="jiaWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1,//用户选择的数字
			}
		},
		computed: {
			//借助mapState生成计算属性，从state中读取数据。（数组写法）
			...mapState(['sum','school','subject','personList']),

			//借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
			...mapGetters(['bigSum']),
		},
		methods: {
			//借助 mapMutations 生成对应的方法，方法中会调用commit去联系Mutations（对象写法）
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

			//借助 mapActions 生成对应的方法，方法中会调用commit去联系Actions（数组写法）
			...mapActions(['jiaOdd','jiaWait']),
		},
		mounted() {
			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
			console.log(x)
		},
	}
</script>

<style>

</style>