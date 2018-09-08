<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader :addTodo="addTodo"/>-->
      <!--<TodoHeader @addTodo="addTodo"/>-->
      <TodoHeader ref="header"/>
      <!--<TodoList :todos="todos" :deleteTodo="deleteTodo"/>-->
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>

    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data () {
      return {
        todos:JSON.parse(localStorage.getItem('todos_key') || '[]')
      }
    },
    mounted () {
      this.$refs.header.$on('addTodo',this.addTodo);

      PubSub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index);
      })
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      },
      deleteTodo(index){
        this.todos.splice(index,1);
      },
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo => !todo.complete);
      },
      selectAllTodos(check){
        this.todos.forEach(todo => todo.complete = check);
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:function(value){
          localStorage.setItem('todos_key',JSON.stringify(value));
        }
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
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
