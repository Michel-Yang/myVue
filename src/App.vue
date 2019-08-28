<template>
  <div id="app">
    <div id="nav">
       <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <TabBar></TabBar>
   
    <router-view />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
export default {
  data(){
    return{

    }
  },
  mounted () {
    console.log(process.env)
  },
  components: {
    TabBar
  }
}
</script>
<style lang="less">
body{
  margin:0px;
  padding:0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
