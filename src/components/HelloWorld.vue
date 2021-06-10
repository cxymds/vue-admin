<template>
  <div >
      <el-row v-for="(item,index) in notice" :key="index">
        <el-col>{{item.name}}</el-col>
        <el-col>{{item.age}}</el-col>
      </el-row>
      <slot></slot>
  </div>
  <el-button @click="$emit('setNumber',notice.length)">弹出数据</el-button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['notice'],
  data(){
    return {
      count: 0
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
