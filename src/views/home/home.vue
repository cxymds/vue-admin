
<template>
<div class="all">
    <div class="allone">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template #title>
            <i class="el-icon-location"></i>
            <span>基础管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
         <el-submenu index="2">
            <template #title>
            <i class="el-icon-location"></i>
            <span>分类管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template #title>
            <i class="el-icon-location"></i>
            <span>活动管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
         <el-submenu index="4">
            <template #title>
            <i class="el-icon-location"></i>
            <span>系统管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
    <div class="alltwo">
        <div class="head">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="seach">
            <div class="seachone">搜索:</div>
            <div class="seachtwo"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="seachthree"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="seachfour"><el-button type="primary" round>搜索一下</el-button></div>
            <div class="seachfif">
                <el-button type="text" @click="dialogFormVisible = true">添加一下</el-button>
                    <el-dialog title="啦啦啦啦啦" >
                    <el-form :model="form">
                        <el-form-item label="部门名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="部门代码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </span>
                    </template>
                    </el-dialog>
            </div>
        </div>
        <div class="bodyhead">
            <div class="bodyheadall">
                <div>部门名称</div>
                <div>部门代码</div>
                <div>修改时间</div>
                <div>修改人</div>
                <div>操作</div>
            </div>
            
        </div>
        <div class="body" v-for="item in list" :key="item.id">
            <div class="bodyall">
                <div>{{item.name}}</div>
                <div>{{item.daima}}</div>
                <div>{{item.date}}</div>
                <div>{{item.person}}</div>
                <div class="enniu">
                    <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                    <el-dialog title="修改" v-model="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="部门名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="部门代码" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </span>
                    </template>
                    </el-dialog>

                    <el-button type="text" @click="dialogVisible = true">删除</el-button>
                    <el-dialog
                    title="提示"
                    v-model="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>你确定要删除吗？</span>
                    <template #footer>
                        <span class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                    </template>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
  export default {
       methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data(){
        return{
            list:[
                {
                    name:'小马公司',
                    daima:'01',
                    date:'2021-5-5',
                    person:'小马',
                    caozuo:"操作"
                },{
                    name:'小马公司',
                    daima:'01',
                    date:'2021-5-5',
                    person:'小马',
                    caozuo:'skakka'


                },{
                    name:'小马公司',
                    daima:'01',
                    date:'2021-5-5',
                    person:'小马'

                }
            ],
            isCollapse: true,
            dialogFormVisibles:false,
            dialogTableVisible: false,
            dialogFormVisible: false,
            dialogVisible: false,
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style>
.seachfif .el-button{
    background-color: #409EFF;
    width: 108px;
    margin: 0 3px;
    margin-bottom: 5px;
    color: rgb(255, 255, 255);
    border-radius: 30px;
    height: 30px;
    margin-top: 10px;
}

.enniu .el-button{
    background-color: rebeccapurple;
    width: 90px;
    margin: 0 3px;
    margin-bottom: 5px;
    color: red;
    height: 50px;
}
.el-form-item__label{
    display: block;
    padding-top: 7px;
}
.bodyhead{
    display: flex;
    flex-direction: column;
}
.bodyhead>div{
    width: 100%;
    height: 60px;
    margin:  2px 0;
    display: flex;
    flex-direction: row;
}
.bodyhead>div>div{
    background-color: crimson;
    width: 20%;
    font-weight: bold;
    line-height: 60px;
    height: 100%;
    margin: 0 2px;
}

.body{
    display: flex;
    flex-direction: column;
}
.body>div{
    width: 100%;
    height: 60px;
    margin:  2px 0;
    display: flex;
    flex-direction: row;
}
.body>div>div{
    background-color: crimson;
    width: 20%;
    font-weight: bold;
    line-height: 60px;
    height: 100%;
    margin: 0 2px;
}
.el-button{
    margin-top: 10px;
}
.el-input__inner{
    margin-top: 10px;
    border-radius: 10px;
}
.seach>div{
    margin: 0 2px;
    width: 120px;
    height: 100%;
}
.seach .seachone{
    line-height: 53px;
    font-weight: bold;
    font-size: 18px;
}
.seach .seachtwo{
    flex-grow: 2;
}
.seach .seachthree{
    flex-grow: 2;
}
.seach{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
}
.el-breadcrumb{
    font-size: 18px;
    height: 70px;
    
}
.el-breadcrumb span{
    line-height: 65px;
}
.all{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.all>div{
    width: 260px;
    margin: 0 2px ;
    height: 900px;
    background-color: blueviolet;
}
.all .alltwo{
    flex-grow: 2;
}
.el-menu{
    width: 99%;
}

</style>
