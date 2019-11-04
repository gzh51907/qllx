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
   let {ID,CnName,VideoLink} = req.body;
   let result = await mongo.create(colName,[{Success,Message,Data}])
    if(result.acknowledged){
        res.send(formatData({code:1}))
    }else{
        res.send(formatData({code:0}))
    } 
})
Router.delete('/removeTrip',async(req,res)=>{
    let {arr} = req.body;
    let result = await mongo.remove(colName,{'Data.ID':{$in:arr}});
    if(result.acknowledged){
        res.send(formatData({code:1}))
    }else{
        res.send(formatData({code:0}))
    } 
})

module.exports = Router