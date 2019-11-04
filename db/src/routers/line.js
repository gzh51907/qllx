const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formataData, token } = require('../utils');

const colName = 'lineData';

//初始化
Router.get('/init',async (req,res) =>{

    let result = await mongo.find(colName);

    res.send(result)
})
//价钱排序
Router.get('/pricesort',async (req,res)=>{
    let {type} = req.query 
    let num = 0;
    if(type == 'asc'){
        num = 1
    }else{
        num = -1
    }
    let result = await mongo.pricesort(colName,num)

    res.send(result)
})
//满意度从高到低排序
Router.get('/satsort',async (req,res)=>{
   
    let result = await mongo.satsort(colName,-1)

    res.send(result)
})
//销量从高到低排序
Router.get('/numsort',async (req,res)=>{
    
    let result = await mongo.numsort(colName,-1)

    res.send(result)
})
module.exports = Router;