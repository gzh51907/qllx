<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:07:01
 * @LastEditTime: 2019-11-04 19:44:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goodslist' }">
          <a href="/">套餐列表</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="goods_header">
        <el-row :gutter="50">
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
            <el-button @click="removeGoods">删除套餐</el-button>
          </el-col>
          <el-col :span="16">
            <el-input
              placeholder="请输入搜索内容"
              v-model="input"
              clearable
              v-on:keyup.enter.native="searchGoods"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="info" @click="searchGoods">搜索目的地</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="goods_tabel">
        <template>
          <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
            height="350"
          >
            >
            <el-table-column fixed prop="checkbox" label="全选" width="50" type="selection">
              <!-- <el-checkbox  v-model="allcheck" ref="check" /> -->
            </el-table-column>
            <el-table-column prop="Data.CnName" label="旅游目的地" width="120" contenteditable="true"></el-table-column>
            <el-table-column prop="Data.Name" label="标题" width="120" contenteditable="true"></el-table-column>
            <el-table-column prop="Data.PicLink" label="图片" width="200">
              <template slot-scope="scope">
                <img :src="scope.row.Data.PicLink" min-width="70" height="70" />
              </template>
            </el-table-column>
            <el-table-column prop="Data.Desc" label="目的地详情" width="200"></el-table-column>
            <el-table-column prop="Data.ViewCount" label="人气" width="70"></el-table-column>

            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="danger"
                  size="small"
                  icon="el-icon-delete"
                >删除</el-button>
                <el-button
                  type="default"
                  size="small"
                  icon="el-icon-edit"
                  @click="edit(scope.row)"
                >编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <div class="pages">
        <el-pagination
          :current-page.sync="currentPage"
          background
          :page-sizes="pagesize"
          layout="prev, pager, next"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { Messagebox,Form,FormItem,Button } from "element-ui";
export default {
  data() {
    return {
      allcheck: false, //全选框
      input: "", //输入搜索的内容
      multipleSelection: [], //选中的项
      pagesize: [10], //一个页面的数据条数
      tableData: [
        //表格数据
      ],
      currentPage: 1, //当前页
      name:'',
      region:'',
      type:'',
      Data:{
        ID:'',
        CnName:'',
        Name:'',
        Desc:'',
        ViewCount:''
      }
    };
  },
  methods: {
    async handleClick(row) {
      if (confirm("确定删除该套餐")) {
        let arr = [];
        arr.push(row.Data.ID)
        await this.$axios.delete('http://49.232.154.155:2003/trip/removeTrip',{
        params:{
          arr
        }
        
      })
        this.tableData = this.tableData.filter(item => item != row);
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    removeGoods() {
      if (confirm("确定删除")) {
        this.multipleSelection.forEach(removeitem => {
          this.tableData = this.tableData.filter(item => item != removeitem);
        });
      }
    },
    edit(row) {
      let {Data} = row;
      // console.log(Data)
      this.Data.ID = Data.ID;
      this.Data.CnName = Data.CnName;
      this.Data.Name = Data.Name;
      this.Data.Desc = Data.Desc;
      this.Data.ViewCount = Data.ViewCount;
      this.$confirm(
        <div>
        <el-form label-position='right' >
        <el-form-item label='旅游目的地'>
          <input v-model={this.Data.CnName}/>
        </el-form-item>
        <el-form-item label='标题'>
          <input v-model={this.Data.Name}></input>
        </el-form-item>
        <el-form-item label='图片'>
          <el-upload action='https://jsonplaceholder.typicode.com/posts/'>
           <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label='目的地详情'>
          <input v-model={this.Data.Desc}></input>
        </el-form-item>
        <el-form-item label='人气'>
          <input v-model={this.Data.ViewCount}></input>
        </el-form-item>
        </el-form>
        </div>,
        "修改内容",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "保存",
          cancelButtonText: "放弃修改"
        }
      )
        .then(() => {
          this.$message({
            type: "info",
            message: "保存修改"
          });
          this.$axios.post('http://49.232.154.155:27017',this.Data)
        })
        .catch(action => {
          this.$message({
            type: "info",
            message:
              action === "cancel" ? "放弃保存并离开页面" : "停留在当前页面"
          });
        });
    },
    search($event) {
      // console.log($event)
      if ($event.keyCode == 13) {
        this.searchGoods();
      }
    },
    searchGoods() {
      let val = this.input;
      if (val) {
        let reg = new RegExp(".*" + val + ".*", "gi");
        this.tableData = this.tableData.filter(item => reg.test(item.name));
        this.input = "";
      } else {
        alert("请输入搜索内容");
      }
    }
  },
  async created() {
    let api = "http://49.232.154.155:2003/discover/detailall";
    let { data } = await this.$axios.get(api);
    // console.log(data);
    data.forEach(item => {
      // item.products.forEach(item=>{
      //     this.tableData.push(item);
      //     console.log(item)
      // })
      this.tableData.push(item);
    });
    // console.log(this.tableData);
    // this.tableData.forEach(item=>{
    //   if(!Array.isArray(item.product_tags )&& item.product_tags != null){

    //     let name = item.product_tags.name;
    //     item.product_tags = [{name:name}]
    //   }
    // })
  }
};
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  overflow: hidden;
  .header {
    height: 50px;
    padding: 10px;
  }
  .line {
    height: 1px;
    background: #ccc;
  }
  .content {
    padding: 15px;
    .goods_header {
      margin-bottom: 20px;
    }
    .pages {
      margin-top: 10px;
      text-align: right;
    }
  }
}
</style>