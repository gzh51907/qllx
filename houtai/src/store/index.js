/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-10-17 15:27:09
 * @LastEditTime: 2019-10-17 15:31:38
 * @LastEditors: Please set LastEditors
 */
import Vuex from 'vuex';
import Vue from 'vue';
import common from './common.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        common
    }
});
export default store;