<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url">
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          firstView:true,
          loading:false,
          users:null,
          errorMsg:''
        }
      }
    }
</script>

<style>
.card {
  float:left;
  width:33.333%;
  padding:.75rem;
  margin-bottom:2rem;
  border:1px solid #efefef;
  text-align:center;
}
  .card img {
    margin-bottom:.75rem;
    border-radius:10px;
    width:80%;
  }
  .card-text {
    font-size:85%;
  }
</style>
