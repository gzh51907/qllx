const express = require('express');
const Router = express.Router();

const { mongo } = require('../db');
const colName = "LineInforData";

//渲染
Router.get('/init',async (req,res)=>{

    let result = await mongo.find(colName);

    res.send(result)
})

module.exports = Router;
