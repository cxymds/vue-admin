<template>
    <div class="el-container">
         <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane label="账号密码登录" name="first">
                <el-form  status-icon :model="user" :rules="rules"   ref="user" class="demo-ruleForm" label-position="right">
                  <el-form-item  prop="name">
                    <el-input type="text" placeholder="请输入用户名" v-model="user.name"  autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item  prop="pass">
                    <el-input type="password" placeholder="请输入密码" v-model="user.pass" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="yzm" class="yzm">
                    <el-row>
                       <el-col :span="18"><el-input ></el-input> </el-col>
                       <el-col :span="6"><div>21y38982y</div></el-col>
                    </el-row>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="sub" type="primary" round @click="submit">提交</el-button>
                  </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="手机号登录" name="second">
                <el-form  status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="密码" prop="pass">
                    <el-input type="password"  autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="年龄" prop="age">
                    <el-input ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >提交</el-button>
                    <el-button round>重置</el-button>
                  </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        rules:{
          name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
          pass:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
          yzm:[]
        },
        activeName: 'first',
        data:{
          msg:"hello everyone",
          html:`<h1>一级标题</h1>`
        },
        user:{
          name:'admin123',
          pass:'123456',
        },
        isSubmit:false,
        id:'nav',
        val:true,
        show:false,
        attr:'class',
        classObj:{
          active:true,
          div_show:false,
          show:true
        },
        lists:[
          {name:"ergouzi",age:"11"},
          {name:"zhangmazi",age:"90"},
          {name:"xiaofang",age:"22"},
          {name:"sublime",age:"18"},
          {name:"dabing",age:"34"}
        ]
      };
    },
    methods: {
      submit(){
        this.$refs['user'].validate((valid) => {
          if (!valid) {
            console.log('error submit!!');
            return false;
          }
          this.axios.post('http://localhost:3000/vue/login',this.user).then((data)=>{
          //id,username,password,create_time,update_time,status 
          //密码加密  express 实现用户密码加密  crypto  盐值 hdhas
           if(data.data.code==200){
             document.cookie = 'token='+data.data.token
              this.$message.success({
                message: '恭喜你，登录成功',
                type: 'success',
                duration:1500
              });
             setInterval(()=>{
              this.$router.push({name:'About'})
             },1500)
           }else{
             alert(data.data.msg)
           }
          }).catch((err)=>{
          
          })
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      alt:()=>{
        alert(1)
      },
      tap(){
        this.data.msg = '你好'
      }
    },
    beforeCreate:()=>{
      console.log('创建之前')
    },
    mounted:function(){
      console.log('虚拟dom挂载之后')
    }
  };
</script>
<style lang="less" scope>
.el-container{
    background-image: url(https://gitee.com/lyt-top/vue-next-admin-images/raw/master/login/bg-login.png);
    width: 100vw;
    height: 100vh;
}

.el-tabs{
  width: 400px;
  height: 400px;
  margin: auto;
}
.sub{
  width:100%;
}

</style>