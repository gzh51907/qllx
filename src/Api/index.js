import axios from 'axios';

let Mine = axios.create({
    baseURL:'https://admin.api.qtour.com/api/Config/detail'
})

let DL = axios.create({
    baseURL:'http://49.232.154.155:3001/user/login'
})
let ZC = axios.create({
    baseURL:'http://49.232.154.155:3001/user/reg'
})
let Check = axios.create({
    baseURL:'http://49.232.154.155:3001/user/check'
})


// https://admin.api.qtour.com/api/Config/detail?code=C20160617173646231426&PageSize=150&mType=54&platformType=4
export async function get(params,config={}){
    let {data} = await Mine.get('',{
        ...config,
        params
    });
    return data;
}

export async function post(params,config={}){
    let {data} = await Mine.post('',params,config);
    return data;
}

export async function login(params,config={}){
    let {data} = await DL.get('',params,config);
    return data;
}

export async function reg(params,config={}){
    let {data} = await ZC.post('',params,config);
    return data;
}
export async function check(params,config={}){
    let {data} = await Check.get('',params,config);
    return data;
}

export default {
    get,
    post,
    login,
    reg,
    check
}