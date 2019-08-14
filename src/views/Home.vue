<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />

     <mt-tabbar >
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/images/first.png" />
         首页
      </mt-tab-item>
      
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/images/my.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
    
   <!--  <HelloWorld msg='Welcome to Your Vue.js App' /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted () {
    if (this.$store.state.useInfo.userName === '') {
      this.$router.push('/login')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
