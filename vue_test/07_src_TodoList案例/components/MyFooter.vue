<template>
    <div class="todo-footer" v-show="todos.length">
        <label>
        <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
        <input type="checkbox" v-model="isAll"/>
        </label>
        <span> <span>已完成{{doneTotal}}</span> / 全部{{todos.length}} </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        props:['todos','checkAllTodo','clearAllTodo'],
        computed:{
            doneTotal(){
                //此处使用reduce方法做条件统计(ES6)
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//简写
				//return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
                
                //低级写法（目前只会）
                let i = 0
                this.todos.forEach(todoObj => {
                    if (todoObj.done) {
                        i++
                    }
                });
                return i
            },
            isAll:{
                get(){
                    return this.doneTotal === this.todos.length && this.todos.length>0
                },
                set(value){
                    this.checkAllTodo(value)
                }
            }
        },
        methods: {
            // checkAll(event){
            //     //console.log(event.target.checked);
            //     this.checkAllTodo(event.target.checked)
            // }
            clearAll(){
                this.clearAllTodo()
            }
        },
    }
</script>

<style scoped>
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>