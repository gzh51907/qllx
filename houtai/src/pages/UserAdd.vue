<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:14:41
 * @LastEditTime: 2019-10-17 11:39:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/adduser' }">
          <a href="/">添加用户</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="cont">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名:" prop="username">
            <el-col :span="6">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-col :span="6">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="手机号:" prop="telephone">
            <el-col :span="6">
              <el-input v-model.number="ruleForm.telephone"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { async } from 'q';
export default {
  data() {
    var Tel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var username = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
          console.log(value)
          let api = 'http://49.232.154.155:2999/user/check';
          let {data} = await this.$axios.get(api,{
            params:{username:value}
          })
          if(data.code == 1){
            callback();
          }else{
            callback(new Error('用户名已存在'))
          }
              
          
        
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        telephone: ""
      },
      rules: {
        username: [{ validator: username, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        telephone: [{ validator: Tel, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let {username,password} = this.ruleForm;
          
          let api = 'http://49.232.154.155:2999/user/reg';
         let {data} =  await this.$axios.post(api,{username,password});
         if(data.code == 1){
           alert('添加成功');
           this.resetForm(formName);
         }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
    margin-bottom: 20px;
  }
}
</style>