<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 21:47:30
 * @LastEditTime: 2019-10-16 10:05:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">中心</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
        <img src="../assets/img/u98.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div,p,ul,li{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul,li{
    list-style:none;
}
.container{
    .header{
        height: 50px;
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .line{
        background: #ccc;
        height: 1px;
        padding: 0 5px;
    }

}
</style>