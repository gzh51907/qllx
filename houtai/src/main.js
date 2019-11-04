/*
 * @Description: In User Settings Editu
 * @Author: your name
 * @Date: 2019-10-15 21:38:20
 * @LastEditTime: 2019-10-17 15:44:44
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';
Vue.prototype.$axios = axios;
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
