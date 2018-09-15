<template>
    <ul>
      <li v-for="(message,index) in messages" :key="message.id">
        <a href="">{{message.title}}</a>
      </li>
    </ul>
</template>

<script>
  export default {
    data () {
      return {
        messages:[]
      }
    },
    mounted () {
      setTimeout(() => {
        const messages = [
          {
            id:1,
            title:'message001'
          },
          {
            id:2,
            title:'message002'
          },
          {
            id:3,
            title:'message003'
          },
          {
            id:4,
            title:'message004'
          },
          {
            id:5,
            title:'message005'
          }
        ];
        this.messages = messages;
      },1000)
    }
  }
</script>

<style>

</style>
