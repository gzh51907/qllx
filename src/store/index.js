import {createStore} from 'redux';

// State
let initialState = {
    username:''
}

// Reducer：用于定义修改state方式，必须返回一个新的state
// 复制一份，并覆盖
function reducer(state=initialState,{type,payload}){
    //在这里定义如何修改State
    // {type:'ADD_TO_CART',payload:{id,name,price,qty}}
    switch(type){
        case 'ADD_USERNAME':
            console.log(type,payload)
            return {
                ...state,
                username:payload
            }
        case 'REMOVE_USERNAME':
            return {
                ...state,
                username:''
            }
        
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);


export default store;