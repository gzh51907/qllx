const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formatData, token } = require('../utils')

const colName = 'goods'

//商品详情
Router.get('/detail', async (req, res) => {
    let { sku } = req.query;
    
    let result = await mongo.finddetail(colName, sku);

    res.send(result);
})

//商品列表
Router.get('/list', async (req, res) => {
    let { list } = req.query;
    list = Number(list)
    let result = await mongo.find('goodslist', { 'list': list });

    res.send(result);
})

Router.get('/listall', async (req, res) => {

    let result = await mongo.find('goodslist');

    res.send(result);
})
//改
Router.patch('/listupdate', async (req, res) => {
    let query = { list: 3, 'products.sku': 'p-hn-sc-xhdzx-xg' }
    let data = { $set: { 'products.$.nationwide': 2 } }
    let result = await mongo.update('goodslist', query, data);
    res.send(result);
})

//增
Router.post('/listcreate', async (req, res) => {
    // let {list,goods_name,subtitle,vipPrice,noVipPrice,sku,image,goods_tag} = req.body;
    let query = { list: req.body.list }
    let data = { $push: { 'products': { "name": req.body.goods_name, "stock": req.body.stock,"subtitle": req.body.subtitle, "vip_price_pro": { "price_up": { "price": req.body.noVipPrice }, "price_down": { "price": req.body.vipPrice } } ,"sku":req.body.sku,"image":req.body.image,$push:{"product_tags":{"name":req.body.goods_tag}}} } }
    console.log(req.body)
    
    let result;
    try {
        await mongo.update('goodslist', query, data);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }

    res.send(result);
})

//删
Router.delete('/listdel', async (req, res) => {
    // let result = await mongo.remove('goodslist',{list:3,'products':{"ceshi":"ceshishi"}})
    // res.send(result);
    let query = { list: 3 }
    let data = { $pull: { 'products': { "sku": "ppx", "ceshi": "ceshishi" } } }
    let result;
    try {
        await mongo.update('goodslist', query, data);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }

    res.send(result);
})

module.exports = Router;