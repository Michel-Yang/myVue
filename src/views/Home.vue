<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/images/my.jpg' class='headpic' />
    <p class='name'>杨福伟</p>
    <p class='project' @click='project'>项目列表</p>
  </div>
</template>

<script>
/* import HelloWorld from '@/components/HelloWorld.vue' */
import login from '@/api/api.js'
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  mounted () {
    var userInfo = localStorage.getItem('userInfo')
    if (JSON.stringify(userInfo) !== '{}') {
      this.$store.commit('increment', userInfo)
    } else {
      this.$router.push('/login')
    }
    login.login().then(
      sucess => {
        console.log(sucess)
      },
      err => {
        console.log(err)
      }
    )
  },
  methods: {
    ...mapMutations(['increment']),
    project: function () {
      this.$router.push('/list')
    }
  }
}
</script>
<style scoped>
.headpic {
  width: 120px;
  height: 120px;
  border-radius: 50%
}
.home .name {
  font-size: 20px;
  margin: 20px 0
}
.home .project {
  font-size: 25px;
  font-family: 'Courier New', Courier, monospace;
  color: lightskyblue
}
</style>
