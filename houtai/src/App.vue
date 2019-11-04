<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 21:38:20
 * @LastEditTime: 2019-10-17 16:40:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="container" v-if="homeShow">
      <div class="header flex">
        <div class="logo">
          <h2>趣旅旅游后台管理系统</h2>
        </div>
        <div class="header_cont">
          <el-menu
            style="height:100%;"
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">{{admin}},欢迎登录</template>
              <el-menu-item index="2-1" @click="logOut">退出</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-message-solid"></i>
              消息中心
            </el-menu-item>
            <!-- <el-menu-item index="4">
             订单管理
            </el-menu-item>-->
          </el-menu>
        </div>
      </div>
      <div class="content">
        <div class="sideBar">
          <el-tree
            style="background:rgba(32, 34, 42, 1);"
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </div>
        <div class="cont">
          <router-view />
        </div>
      </div>
    </div>
    <div class="login_box" v-else>
      <div class="logo">
        <img src="./assets/logo.png" alt />
      </div>
      <div class="form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="200px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username" style="margin-bottom:20px;">
            <el-col :span="16">
              <el-input
                type="text"
                v-model="ruleForm.username"
                autocomplete="off"
                placeholder="请输入管理员用户名"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="margin-bottom:10px;">
            <el-col :span="16">
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label>
            <el-checkbox label="记住密码" v-model="ruleForm.rePass" />
          </el-form-item>
          <el-form-item>
            <el-col :span="16">
              <el-button type="primary" @click="submitForm('ruleForm')" style="width:265px;">登录</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { stringify } from "querystring";
export default {
  data() {
    var CheckUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    // var rePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      homeShow: false,
      activeIndex: "1",
      activeIndex2: "1",
      admin: "",
      data: [
        {
          label: "旅游详情",
          children: [
            {
              label: "套餐列表"
            },
            {
              label: "商品分类"
            },
            {
              label: "添加商品"
            }
          ]
        },
        {
          label: "用户管理",
          children: [
            {
              label: "用户列表"
            },
            {
              label: "添加用户"
            }
          ]
        },
        {
          label: "订单管理",
          children: [
            {
              label: "订单列表"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      ruleForm: {
        password: "",
        username: "",
        rePass: true
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: CheckUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let api = "http://49.232.154.155:2003/admin/login";
          let { data } = await this.$axios.get(api, {
            params: {
              adminname: this.ruleForm.username,
              password: this.ruleForm.password
            }
          });
          console.log(data);
          if (data.code == 1) {
            //登录成功
            let username = this.ruleForm.username;
            let password = this.ruleForm.password;
            if (this.ruleForm.rePass) {
              //选择记住密码
              this.$store.commit("login", { username, password });
              this.admin = JSON.parse(localStorage.getItem("user")).username;
              this.homeShow = true;
            } else {
              this.$store.commit("login", { username });
            }
          } else {
            alert("用户名或密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick(data) {
      if (data.label == "套餐列表") {
        this.$router.push({
          path: "/goodslist"
        });
      } else if (data.label == "商品分类") {
        this.$router.push({
          path: "/goodssort"
        });
      } else if (data.label == "商品分类") {
        this.$router.push({
          path: "/goodssort"
        });
      } else if (data.label == "添加商品") {
        this.$router.push({
          path: "/goodsadd"
        });
      } else if (data.label == "用户列表") {
        this.$router.push({
          path: "/userlist"
        });
      } else if (data.label == "添加用户") {
        this.$router.push({
          path: "/useradd"
        });
      } else if (data.label == "订单列表") {
        this.$router.push({
          path: "/orderlist"
        });
      }
      console.log(data);
    },
    logOut() {
      this.$store.commit("logout");
      this.homeShow = false;
    }
  },
  created() {
    this.admin = JSON.parse(localStorage.getItem("user")).username;
    this.homeShow = true;
  }
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
}
div {
  box-sizing: border-box;
}
h2,
div,
p,
ul,
li {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;

  height: 100%;
  width: 100%;
  .container {
    height: 100%;

    .header {
      height: 10%;
      background: rgb(26, 17, 17);
      padding: 0 20px;
      justify-content: space-between;
      .logo {
        display: flex;
        align-items: center;
        h2 {
          color: #ccc;
        }
      }
      .header_cont {
        height: 100%;
        // display: flex;
        padding: 0 20px;
        // width: 600px;
      }
    }
    .content {
      display: flex;
      justify-content: center;
      height: calc(100% - 10%);
      .sideBar {
        width: 10%;
        height: 100%;
        display: inline-block;
        background-color: rgba(32, 34, 42, 1);
      }
      .cont {
        width: calc(100% - 10%);
        height: 100%;
        display: inline-block;
      }
    }
  }
  .login_box {
    height: 400px;
    width: 600px;
    position: absolute;
    background: #ccc;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .logo {
      padding: 10px;
    }
  }
}
</style>
