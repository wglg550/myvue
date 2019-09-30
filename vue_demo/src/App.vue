<template>
  <div id="app">
    <!--<Login></Login>-->
    <!--<img src="./assets/logo.png">-->
    <router-link :to="{name:'index'}"><h1>H1</h1></router-link>
    <router-link :to="{name:'H1'}"><h1>H2</h1></router-link>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"/>
    <router-view name="right" style="float:right;width:50%;background-color:yellowgreen;height:300px;"/>
  </div>
</template>

<script>
  import Login from '@/components/Login'

  export default {
    name: 'App',
    components: {
      'Login': Login
    },
    data() {
      return {}
    }
  }
</script>

<!--<style>-->
  <!--#app {-->
    <!--text-align: center;-->
    <!--margin-top:400px ;-->
  <!--}-->
<!--</style>-->
