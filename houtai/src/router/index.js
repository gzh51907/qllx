/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 21:46:14
 * @LastEditTime: 2019-10-16 10:24:30
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home.vue'; //中心页
import GoodsList from '../pages/GoodsList.vue'; //商品列表
import GoodsSort from '../pages/GoodsSort.vue'; //商品分类
import GoodsAdd from '../pages/GoodsAdd.vue';  //商品添加
import OrderList from '../pages/OrderList.vue'; //订单列表
import UserList from '../pages/UserList.vue';  //用户列表
import UserAdd from '../pages/UserAdd.vue';  //添加用户




let router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/goodslist',
            component:GoodsList
        },
        {
            path:'/goodsadd',
            component:GoodsAdd
        },
        {
            path:'/goodssort',
            component:GoodsSort
        },
        {
            path:'/orderlist',
            component:OrderList
        },
        {
            path:'/useradd',
            component:UserAdd
        },{
            path:'/userlist',
            component:UserList
        }
    ]
})
export default router;