<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default {
    data () {
      return {
        comments:[
          {name:'BOB',content:'Vue 还不错'},
          {name:'Cat',content:'Vue So Easy'},
          {name:'BZ',content:'Vue So So'}
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);
      },
      deleteComment(index){
        this.comments.splice(index,1);
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>
