<template>
  <div class="about">
    <el-button type="primary" @click='tap'>获取数据</el-button>
   <hello-world v-bind:notice="msg" @setNumber="setnum">bjksdhfashduh</hello-world> 
  </div>
</template>
<script>
import  HelloWorld from '@/components/HelloWorld';

export default {
  data:function(){
    return {
      msg:[]
    }
  },
  components:{
    HelloWorld
  },
  methods:{
    tap(){
      let obj = [
        {name:"zhanbgsna",age:22},
        {name:"lisi",age:34},
        {name:"wangeu",age:12},
        {name:"mazi",age:96}
      ];
      this.msg = obj;
    },
    setnum(v){
      console.log('h-'+v)
    }
  }
}
</script>