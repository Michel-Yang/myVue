<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/images/my.jpg' class='headpic'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations } from 'vuex';

export default {
  name: 'home',
  mounted () {
   
    var userInfo=localStorage.getItem("userInfo")
    if(JSON.stringify(userInfo)!="{}"){
       this.$store.commit('increment',userInfo)
    }else{
       this.$router.push('/login')
    }
   // console.log(JSON.stringify(this.$store.state.useInfo) )
  },
  methods:{
    ...mapMutations(['increment']),
  },
  components: {
  }
}
</script>
<style scoped>

.headpic{
  width:120px;
  height:120px;
  border-radius: 50%;
}

</style>
