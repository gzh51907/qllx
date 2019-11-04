/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 15:30:58
 * @LastEditTime: 2019-10-17 15:39:15
 * @LastEditors: Please set LastEditors
 */
export default {
    state:{
        user:null
    },
    mutations:{
        login(state,{username,password}){ //登录
            state.user = {
                username,password
            }
            localStorage.setItem('user',JSON.stringify({username,password}))
        },
        logout(state){ //退出登录
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    
}
