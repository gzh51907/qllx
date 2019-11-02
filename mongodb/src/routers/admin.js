/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
const Router = express.Router();

const {mongo} = require('../db')
const {formatData,token} = require('../utils')

const colName = 'admin'


// 登录
Router.get('/login',async (req,res)=>{
    let {adminname,password,mdl} = req.query;

    let result = await mongo.find(colName,{adminname,password});

    if(result.length>0){
        // 如用户需要免登陆操作，则生成一个token并返回给前端
        let Authorization
        if(mdl){
            Authorization = token.create(username)
        }
        res.send(formatData({data:Authorization}));
    }else{
        res.send(formatData({code:0}))
    }
})


// 查询所有用户
Router.get('/',async (req,res)=>{
    let result = await mongo.find('user')

    res.send(result)
})






module.exports = Router;