# 项目名称
趣旅旅行

## 演示
官网地址：[趣旅旅行](https://www.qulv.com/)
上线地址：http://49.232.154.155:2004

## git仓库地址
https://github.com/gzh51907/qllx.git

## 团队与分工
* 组长：吴汶峰，成员：高少强,张伟豪
* 吴汶峰负责模块： 登录、注册、我的
* 高少强负责模块： 首页、目的地、咨询
* 张伟豪负责模块： 发现、详情页、推荐、评论

## 项目页面截图
![avatar](/img/1.png);
![avatar](/img/2.png);
![avatar](/img/3.png);
![avatar](/img/4.png);
## 项目目录说明
    |-- .babelrc
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- webpack.config.js
    |-- db  (MGDB数据库文件夹)
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- db
    |   |   |-- 数据库地址.txt
    |   |-- doc
    |   |   |-- Database.md
    |   |-- src
    |       |-- config.json
    |       |-- index.html
    |       |-- login.html
    |       |-- reg.html
    |       |-- server.js
    |       |-- try_catch.html
    |       |-- assets      
    |       |-- db
    |       |   |-- index.js
    |       |   |-- mongo.js
    |       |   |-- mysql.js
    |       |-- routers
    |       |   |-- admin.js
    |       |   |-- cart.js
    |       |   |-- discover.js
    |       |   |-- goods.js
    |       |   |-- goodsnew.js
    |       |   |-- index.js
    |       |   |-- line.js
    |       |   |-- linedetail.js
    |       |   |-- lineinfor.js
    |       |   |-- trip.js
    |       |   |-- user.js
    |       |-- utils
    |           |-- index.js
    |           |-- token.js
    |-- houtai  （后台管理系统文件夹）
    |   |-- .gitignore
    |   |-- babel.config.js
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- README.md
    |   |-- img
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- login.html
    |   |-- src
    |       |-- App.vue
    |       |-- main.js
    |       |-- assets
    |       |-- components
    |       |   |-- HelloWorld.vue
    |       |-- pages
    |       |   |-- GoodsAdd.vue    (商品添加)
    |       |   |-- GoodsList.vue   (商品列表)
    |       |   |-- GoodsSort.vue   (商品分类)
    |       |   |-- Home.vue        (中心页)
    |       |   |-- OrderList.vue   (商品添加)
    |       |   |-- UserAdd.vue     (用户添加)
    |       |   |-- UserList.vue    (用户列表)
    |       |-- router              
    |       |   |-- index.js        (切换路由)
    |       |-- store
    |           |-- common.js       (登录登出功能)
    |           |-- index.js
    |-- src
        |-- App.css
        |-- App.jsx          (主模块）
        |-- App.min.css
        |-- App.scss
        |-- main.js          (入口文件)
        |-- template.html    (页面模板）
        |-- Api              (axios接口)
        |   |-- discoverapi.js
        |   |-- index.js
        |-- asset
        |   |-- discoverImg  (图片)
        |-- pages            (内容组件)
        |   |-- data.json
        |   |-- Destination
        |   |   |-- Destination.jsx
        |   |-- Discover      (‘发现’组件)
        |   |   |-- Commit.css
        |   |   |-- Commit.jsx
        |   |   |-- Commit.min.css
        |   |   |-- Commit.scss
        |   |   |-- Discover.css
        |   |   |-- Discover.jsx
        |   |   |-- Discover.min.css
        |   |   |-- Discover.scss
        |   |   |-- Videodetail.css
        |   |   |-- Videodetail.jsx
        |   |   |-- Videodetail.min.css
        |   |   |-- Videodetail.scss
        |   |-- Home           (‘首页’组件)
        |   |   |-- Home.css
        |   |   |-- Home.jsx
        |   |   |-- Home.min.css
        |   |   |-- Home.scss
        |   |   |-- lazyImg.js
        |   |-- Line           (‘发现’组件)
        |   |   |-- Line.css
        |   |   |-- Line.jsx
        |   |   |-- Line.min.css
        |   |   |-- Line.scss
        |   |-- LineDetail  (‘列表’组件)
        |   |   |-- lazyImg.js
        |   |   |-- LineDetail.css
        |   |   |-- LineDetail.jsx
        |   |   |-- LineDetail.min.css
        |   |   |-- LineDetail.scss
        |   |-- LineInfor   (‘目的地’组件)
        |   |   |-- lazyImg.js
        |   |   |-- LineInfor.css
        |   |   |-- LineInfor.jsx
        |   |   |-- LineInfor.min.css
        |   |   |-- LineInfor.scss
        |   |-- Login       (‘登录’组件)
        |   |   |-- Login.css
        |   |   |-- Login.js
        |   |   |-- Login.jsx
        |   |   |-- Login.min.css
        |   |   |-- Login.scss
        |   |-- Message     (‘咨询’组件)
        |   |   |-- Message.css
        |   |   |-- Message.jsx
        |   |   |-- Message.min.css
        |   |   |-- Message.scss
        |   |-- Mine        (‘我的’组件)
        |   |   |-- iconBg.png
        |   |   |-- Mine.css
        |   |   |-- Mine.jsx
        |   |   |-- Mine.min.css
        |   |   |-- Mine.scss
        |   |-- Reg         (‘注册’组件)
        |   |   |-- Reg.css
        |   |   |-- Reg.jsx
        |   |   |-- Reg.min.css
        |   |   |-- Reg.scss
        |   |-- Trip        (‘详情页’组件)
        |       |-- lazyImg.js
        |       |-- Trip.css
        |       |-- Trip.jsx
        |       |-- Trip.min.css
        |       |-- Trip.scss
        |-- router
        |   |-- auth.jsx
        |   |-- index.jsx
        |-- store           (redux)
            |-- index.js

## 技术栈
* React全家桶
* axios
* Ant Design
* git
* webpack
* jquery

### 前端
* React全家桶
* axios
* Ant Design
* webpack
* jquery

### 后端
* Nodejs
* Express
* MongoDB


# 项目名称
* 后台系统

## 演示
上线地址：http://49.232.154.155:2002

## git仓库地址
https://github.com/gzh51907/houtai.git

## 团队与分工
* 组长：吴汶峰，成员：高少强,张伟豪
* 吴汶峰负责模块： 登录界面
* 高少强负责模块： 后台管理系统页面
* 张伟豪负责模块： 接口、数据库后台

## 项目页面截图
![avatar](/houtai/img/1.png);
![avatar](/houtai/img/2.png);
![avatar](/houtai/img/3.png);
## 项目目录说明
|-- .gitignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- public  （公共目录）
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- js
    |       |-- jquery-1.11.3.min.js
    |       |-- jquery-3.4.1.min.js
    |-- src
        |-- App.vue
        |-- config.json
        |-- main.js
        |-- assets （静态资源目录）
        |   |-- logo.png
        |-- components
        |   |-- HelloWorld.vue
        |-- mongoDB （mongoDB数据库后台）
        |   |-- config.json
        |   |-- server.js
        |   |-- try_catch.html
        |   |-- assets
        |   |-- db
        |   |   |-- index.js
        |   |   |-- mongo.js
        |   |-- routers
        |   |   |-- goods.js
        |   |   |-- index.js
        |   |   |-- user.js
        |   |   |-- cart.js
        |   |   |-- admin.js
        |   |-- utils
        |       |-- index.js
        |       |-- token.js
        |-- pages （项目代码）
        |   |-- GoodsAdd.vue
        |   |-- GoodsList.vue
        |   |-- GoodsSort.vue
        |   |-- Home.vue
        |   |-- OrderList.vue  
        |   |-- UserAdd.html
        |   |-- UserList.vue  
        |-- router 
        |   |-- index.js
        |-- store
            |-- common.js
            |-- index.js
## 技术栈
* Vue
* Vue-Router
* Vuex
* Vue-Cli
* axios
* elementUI
* git
### 前端
* Vue
* Vue-Router
* Vuex
* Vue-Cli
* axios
* elementUI
* git

### 后端
* Nodejs
* Express
* MongoDB
     