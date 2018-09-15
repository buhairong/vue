<template>
    <div>
      <h2>Home</h2>
      <div>
        <ul id="homeMenu" class="nav nav-tabs">
          <li><router-link to='/home/news' class="list-group-item">News</router-link></li>
          <li><router-link to='/home/message' class="list-group-item">Message</router-link></li>
        </ul>

        <div>
          <router-view></router-view>
          <hr>
        </div>
      </div>
    </div>
</template>

<script>
  export default {}
</script>

<style>
  #homeMenu .router-link-active{
    color:red;
  }
</style>
