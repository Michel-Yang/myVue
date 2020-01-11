<template>
  <div class='content'>
    <div>
     <p>不带有唯一key值得列表</p>
     <p v-for='(item,index) in a' :key='index'> index：{{index}}  id:{{item.id}} 名称：{{item.value}} </p>

    </div>
    <div>
       <p>带有唯一key值得列表</p>

       <p v-for='(item,index) in a' :key='item.id'> index：{{index}} id:{{item.id}} 名称：{{item.value}} </p>
    </div>

    <button @click='add'>添加元素 </button>
  </div>
</template>

<script>
export default {
  name: 'Key',
  data () {
    return {
      a: [
        { id: 1, value: '《阿甘正传》' },
        { id: 2, value: '《白蛇缘起》' },
        { id: 3, value: '《海上钢琴师》' },
        { id: 4, value: '《我和我的祖国》' },
        { id: 5, value: '《我不是药神》' }
      ]
    }
  },
  methods: {
    add: function () {
      var obj = {
        id: 6,
        value: '《小丑》'
      }

      // this.a.push(obj)

      this.a.splice(2, 0, obj)
    }
  }
}

</script>
