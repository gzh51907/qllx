<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:12:42
 * @LastEditTime: 2019-10-17 17:36:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goodsadd' }">
          <a href="/">添加旅游套餐</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="form_box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="目的地名称" prop="CnName">
            <el-col :span="8">
              <el-input v-model="ruleForm.CnName" size></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="旅游标题" prop="Name">
            <el-col :span="8">
              <el-input v-model="ruleForm.Name" size></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="视频链接" prop="VideoLink">
            <el-col :span="8">
              <el-input v-model="ruleForm.VideoLink" />
            </el-col>
          </el-form-item>
          <el-form-item label="上传图片" prop="PicLink">
            <el-col :span="8">
              <!-- <el-input v-model="ruleForm.PicLink" /> -->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
          </el-form-item>
          <el-form-item label="商品ID" prop="ID">
            <el-col :span="8">
              <el-input v-model="ruleForm.ID" />
            </el-col>
          </el-form-item>
          <!-- <el-form-item label="商品库存" prop="stock">
            <el-col :span="8">
              <el-input v-model="ruleForm.stock" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品图片" prop="image">
            <el-col :span="8">
              <el-input v-model="ruleForm.image" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品标签" prop="goods_tag">
            <el-radio-group v-model="ruleForm.goods_tag">
              <el-radio label="新人专享"></el-radio>
              <el-radio label="限时秒杀"></el-radio>
              <el-radio label="限时1000份"></el-radio>
              <el-radio label="9.9任选3种"></el-radio>
              <el-radio label="限时特惠"></el-radio>
              <el-radio label="今日秒杀"></el-radio>
              <el-radio label="一元秒杀"></el-radio>
              <el-radio label="劲爆*限量"></el-radio>
            </el-radio-group>
          </el-form-item>-->

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
      ruleForm: {
        CnName: "",
        Name: "",
        VideoLink: "",
        PicLink: "",
        // sku: "",
        // stock:'',
        // image: "",
        // goods_tag: ""
      },
      rules: {
        CnName: [
          { required: true, message: "请输入目的地名称", trigger: "blur" }
        ],
        Name: [
          { required: true, message: "请输入目的地简介", trigger: "blur" }
        ],
        VideoLink: [
          { required: true, message: "请输入视频链接", trigger: "blur" }
        ],
        PicLink: [
          { required: true, message: "请输入图片链接", trigger: "blur" }
        ],
        ID: [{ required: true, message: "请输入商品id", trigger: "blur" }]
        // goods_tag: [{ required: true, message: "请选择标签", trigger: "blur" }],
        // stock:[{ required: true, message: "请输入商品库存", trigger: "blur" }],
        // image: [
        //   {
        //     required: true,
        //     message: "请输入图片路径",
        //     trigger: "blur"
        //   }
        // ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let api = "http://49.232.154.155:2003/trip/addTrip";
          let {
            CnName,
            Name,
            VideoLink,
            PicLink,
            ID
            // stock,
            // image,
            // goods_tag
          } = this.ruleForm;
          let { data } = await this.$axios.post(api, {
            // list: 1,
            // goods_name,
            // subtitle,
            // vipPrice,
            // noVipPrice,
            // sku,
            // stock,
            // image,
            // goods_tag,
            CnName,
            Name,
            VideoLink,
            PicLink,
            ID
          });
          //  if(data.code==1){
          //    alert('套餐添加成功');
          //    this.resetForm(formName);
          //  }else{
          //    console.log(data)
          //    alert('添加失败')
          //  }
          alert("套餐添加成功");
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
  overflow: auto;
  .header {
    height: 50px;
    padding: 10px;
  }
  .line {
    height: 1px;
    background: #ccc;
    margin-bottom: 10px;
  }
  .content {
    //   height: 100%;
    // padding: 20px;
    overflow: auto;
  }
}
.el-icon-plus{
  border: 1px dashed #d9d9d9;
    border-radius: 6px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>