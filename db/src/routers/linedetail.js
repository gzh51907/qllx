const express = require('express');
const Router = express.Router();

const {mongo} = require('../db')
const {formatData,token} = require('../utils')

const colName = 'LineDetail';

//init
Router.get('/init',async (req,res)=>{
    let result = await mongo.find(colName);
    res.send(result);
})

Router.get('/pricesort',async (req,res)=>{

    let {type} = req.query;
    let num1 = 0;
    let num2 = 0;
    if(type === 'asc'){
        num1 = -1
        num2 = 1
    }else{
        num1 = 1
        num2 = -1
    }
    let result = await mongo.find(colName);
    
    let arr = result[0].Data.Results
    console.log(arr)
    arr.sort(function (a, b) {
        if (a.Price < b.Price) {
            return num1;
        } else if (a.Price == b.Price) {
            return 0;
        } else {
            return num2;
        }
    })
    res.send(result)
})


module.exports = Router;