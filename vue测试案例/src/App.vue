<template>
  <!-- 有且只能有一个根标签 -->
  <div id="app">
    <!-- a标签的缺点，每次点击都是重新加载页面 -->
    <!-- <a href='/'>home</a>
    <a href = '/helloworld'>helloworld</a> -->
    <ul>
      <li><router-link to='/'>home</router-link></li>
      <li><router-link to='/helloworld'>helloworld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  data(){
    return {
    }
  },
  methods:{
  },
}
</script>

<style scoped>
  #app{
    background-color:#eee;
  }
</style>
