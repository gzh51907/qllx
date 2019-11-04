const express = require('express');
const Router = express.Router();
const {formatData} = require('../utils');
const colName = 'videodetail';    //集合名称
const { mongo } = require('../db');

Router.get('/init', async (req, res) => {
    let result = await mongo.find('PriceData');
    res.send(result);
})
Router.post('/addTrip',async(req,res)=>{
   let Success = true;
   let Message = '';
   let Data = req.body;
//    let {ID,CnName,PicLink,Name,Desc,VideoLink} = Data;
   let result = await mongo.create(colName,[{Success,Message,Data}])
    // if(result.acknowledged){
    //     res.send(formatData({code:1}))
    // }else{
    //     res.send(formatData({code:0}))
    // } 
    res.send(result)
})
//删
Router.delete('/removeTrip',async(req,res)=>{
    let {arr} = req.query;
    let result = await mongo.remove(colName,{'Data.ID':{$in:arr}});
    if(result.acknowledged){
        res.send(formatData({code:1}))
    }else{
        res.send(formatData({code:0}))
    } 
})
//改
Router.patch('/tripupdate', async (req, res) => {
    let {ID} = req.body;
    let query = { 'Data.ID': ID };
    let data = { $set: { 'Data.ID': 2 ,'Data.CnName':2,'Data.Name':2,'Data.Desc':2} };
    let result = await mongo.update('goodslist', query, data);
    res.send(result);
})

module.exports = Router