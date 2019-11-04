const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formataData, token } = require('../utils');

const colName = 'cart';

//渲染
Router.get('/init', async (req, res) => {

    let result = await mongo.find('cart');

    res.send(result);

})

//改
Router.patch('/change', async (req, res) => {
    
    let result = await mongo.update('cart',query,data);
    res.send(result);

})

//增
Router.post('/create', async (req,res)=>{
    // sku price name userid number
    let result = await mongo.create(colName,[{sku:req.body.sku,goodsname:req.body.goodsname,userid:req.body.userid,price:req.body.price,number:req.body.number,stock:req.body.stock,imageurl:req.body.imageurl}]);
    res.send(result);
})

//删
Router.delete('/del',async (req,res)=>{
    let {sku,userid} = req.query;
  
    let result = await mongo.remove('cart',{sku:sku,userid:userid});
    res.send(result);
})
module.exports = Router;