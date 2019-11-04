<!--
 * @Description: In User Settings Edite
 * @Author: your name
 * @Date: 2019-10-16 10:11:37
 * @LastEditTime: 2019-10-16 10:40:28
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="container">
         <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goodssort' }">
          <a href="/">商品分类</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
div{
    box-sizing: border-box;
}
.container{
    height: 50px;
    padding: 10px;
}
</style>