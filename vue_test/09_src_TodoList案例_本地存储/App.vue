<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>
                <List 
                    :todos="todos" 
                    :checkTodo="checkTodo"
                    :deleteTodo="deleteTodo"
                />
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from "./components/MyHeader.vue";
    import MyFooter from "./components/MyFooter.vue";
    import List from "./components/List.vue";

    export default {
        name: "App",
        components: { MyHeader, List, MyFooter },
        data() {
            return {
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            //添加一个todo对象
            addTodo(todoObj){
                //console.log('我是App组件，收到了：',todoObj);
                this.todos.unshift(todoObj)
            },
            //勾选or取消勾选一个todo对象
            checkTodo(id){
                this.todos.forEach((todoObj)=>{
                    if (todoObj.id === id) {
                        todoObj.done = !todoObj.done
                    }
                })
            },
            //删除一个todo对象
            deleteTodo(id){
                this.todos = this.todos.filter((todoObj)=>{
                    return todoObj.id !== id
                })
            },
            //全选or取消全选
            checkAllTodo(done){
                this.todos.forEach(todoObj => {
                    return todoObj.done = done
                });
            },
            //清除所有已经完成的todo对象
            clearAllTodo(){
                this.todos = this.todos.filter(todoObj => {
                    return !todoObj.done
                });
            }
        },
        watch:{
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }
            }
        }
    };
</script>

<style>
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }

</style>
