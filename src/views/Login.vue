<template>
  <div class='about'>
    <mt-field label='用户名' placeholder='请输入用户名' v-model='userInfo.userName'></mt-field>
    <mt-field label='密码' placeholder='请输入密码' type='password' v-model='userInfo.passWord'></mt-field>
    <mt-button @click='login'>登录</mt-button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      userInfo: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    ...mapMutations(['increment']),
    login: function( ) {
      this.$store.commit('increment', this.userInfo)
      this.$router.push('/')
    }
  }
}
</script>
