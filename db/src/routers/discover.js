const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const { formatData, token } = require('../utils')
const colName = 'discover';

//渲染
Router.get('/init', async (req, res) => {

    let result = await mongo.find('discover');

    res.send(result);

})

Router.get('/detail',async(req,res)=>{
    let {id} = req.query;
    let result = await mongo.finddetail('videodetail',id);
    res.send(result)
})
//增加评论
Router.post('/commitcreate', async (req, res) => {
    // let {list,goods_name,subtitle,vipPrice,noVipPrice,sku,image,goods_tag} = req.body;
    let query =  {"Data.ID": req.body.ID}
    let data = { $push: { 'Data.CommentList': { "UserName": req.body.UserName, "Desc": req.body.Desc,"ClickALike": 0, "CreatedOn":req.body.CreatedOn,"NickName":req.body.UserName} } }
    console.log(req.body)
    
    let result;
    try {
        await mongo.update('videodetail', query, data);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }

    res.send(result);
})
//点赞
Router.patch('/createzan',async (req,res)=>{

    let {id,num,idx} = req.body
    let query = { "Data.ID":id}
    let data = { $set: { [`Data.CommentList.${idx}.ClickALike`]:num}  }
    let result = await mongo.update('videodetail', query, data);

    res.send(result);

})

module.exports = Router;