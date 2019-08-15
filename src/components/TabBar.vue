<template>
  <div class="part">
    <mt-tabbar>
      <mt-tab-item id="first"  @click.native='goto("首页")'>
        <img slot="icon" src="../assets/images/first.png" />
        首页
      </mt-tab-item>

      <mt-tab-item id="my"  @click.native='goto("我的")'>
        <img slot="icon" src="../assets/images/my.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {},
  methods: {
    goto: function(e) {

     if(e=="首页"){
       this.$router.push('/')
     }else{
       this.$router.push('/about')
     }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
