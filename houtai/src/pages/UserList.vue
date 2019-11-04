<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:13:55
 * @LastEditTime: 2019-10-17 18:37:04
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userlist' }">
          <a href="/">用户列表</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="user_header">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
            <el-button @click="removeUser">删除用户</el-button>
          </el-col>
          <el-col :span="10">
            <el-input placeholder="请输入搜索关键字" v-model="input" clearable></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="info">搜索用户</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="user_cont">
        <template>
          <el-table :data="tableData.slice((currentPage-1)*pagesize,pagesize*currentPage)" stripe
           style="width: 80%" 
           @selection-change='handleSelectionChange'
           >
            <el-table-column fixed prop="checkbox" type="selection" label="全选" width="50">
              
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="password" label="密码" width="180"></el-table-column>
            <el-table-column prop="username" label="手机号"></el-table-column>
             <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="danger" size="small" icon="el-icon-delete">删除</el-button>
                <el-button type="default" size="small" icon="el-icon-edit">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
       
        </template>
      </div>
      <div class="page">
           <el-pagination  :current-page.sync="currentPage" :page-sizes="pagesize" background layout="prev, pager, next"  :page-count="Math.ceil(tableData.length/pagesize[0])"></el-pagination>
      </div>
    </div>
  </div>
</template>
 

<script>
export default {

  data() {
    return {
      input: "",
      tableData: [
        {
          username: "尼古拉斯·赵四",
          password: "abcd2342",
          telephone: 15746554561
        },
        {
          username: "尼古拉斯·赵四",
          password: "abcd2342",
          telephone: 15746554561
        },
        {
          username: "尼古拉斯·赵四",
          password: "abcd2342",
          telephone: 15746554561
        },
        {
          username: "尼古拉斯·赵四",
          password: "abcd2342",
          telephone: 15746554561
        }
      ],
      selectList:[],///选中的项
      pagesize:[5],//每页显示的个数
      currentPage:1,//当前页
      totalpage:'',
    };
  },
  methods: {
    async handleClick(row) {
      console.log(row);
      await this.$axios.delete('http://49.232.154.155:2003/user/del',{
        params:{
          userid:row.username
        }
      })
      this.tableData = this.tableData.filter(item=>item!=row);
    },
    handleSelectionChange(val){
        this.selectList = val;
        console.log(this.selectList)
    },
    removeUser(){ //删除用户
        if(confirm('删除用户')){
            this.selectList.forEach(removeitem=>{
              
              this.tableData =  this.tableData.filter(item=>item!=removeitem)
            })
        }
    }
  },
  async created(){
    let api = 'http://49.232.154.155:2003/user';
    let {data} = await this.$axios.get(api);
    console.log(data)
    this.tableData = data;
    this.totalpage =  Math.ceil(this.tableData.length/this.pagesize) ;
    console.log(this.totalpage)
  }
};
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.container {
  .header {
    height: 50px;
    padding: 10px;
  }
  .line {
    height: 1px;
    background: #ccc;
  }
  .content {
    padding: 10px;
    overflow: auto;

    .user_cont {
      margin-top: 20px;
    }
    .page{
        margin-top: 10px;
        text-align: right;width: 80%;
    }
  }
}
</style>