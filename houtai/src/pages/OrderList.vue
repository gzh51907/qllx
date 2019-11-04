<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:16:01
 * @LastEditTime: 2019-10-16 16:40:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/orderlist' }">
          <a href="/">订单列表</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="checkbox" label="全选" width="50">
            <template slot="header" slot-scope="scope">
              <el-checkbox />
            </template>
            <el-checkbox />
          </el-table-column>
          <el-table-column prop="sku" label="sku" width="120"></el-table-column>
          <el-table-column prop="goodsname" label="商品名称" width="200"></el-table-column>
          <el-table-column prop="userid" label="用户id" width="200"></el-table-column>
          <el-table-column prop="price" label="价格" width="70"></el-table-column>
          <el-table-column prop="number" label="数量" width="70"></el-table-column>
          <el-table-column prop="stock" label="库存" width="50"></el-table-column>
          <el-table-column prop="imageurl" label="商品图片路径" width="200"></el-table-column>

          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="danger"
                size="small"
                icon="el-icon-delete"
              >删除</el-button>
              <el-button type="default" size="small" icon="el-icon-edit">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
          
      ]
    };
  },
  methods: {
      async handleClick(row){
          console.log(row);
          await this.$axios.delete('http://49.232.154.155:2999/cart/del',{
        params:{
          userid:row.userid,
          sku:row.sku
        }
      })
      this.tableData = this.tableData.filter(item=>item!=row);
      }
  },
  async created(){
    let data = await this.$axios.get('http://49.232.154.155:2999/cart/init');
    console.log(data.data);
    this.tableData = data.data;
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
}
</style>