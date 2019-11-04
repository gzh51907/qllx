const express = require('express');
var app = express();
const Router = express.Router();

const { formatData, token } = require('../utils')
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}) 
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
})

// 引入每个模块路由
const goodsRouter = require('./goods');
const userRouter = require('./user');
const goodsnewRouter = require('./goodsnew');
const adminRouter = require('./admin');
const cartRouter = require('./cart');
const discover = require('./discover');
const trip = require('./trip');
const line = require('./line');
const lineinfor = require('./lineinfor');
const linedetail = require('./linedetail');

Router.use(express.urlencoded({ extended: true }), express.json());//推导：内部自动调用next

Router.use('/goods', goodsnewRouter);
Router.use('/user', userRouter);
Router.use('/admin', adminRouter);
Router.use('/cart', cartRouter);
Router.use('/discover', discover);
Router.use('/trip',trip);
Router.use('/line',line);
Router.use('/lineinfor',lineinfor);
Router.use('/linedetail',linedetail);
Router.get('/verify', (req, res) => {
    let Authorization = req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);

    res.send(formatData({ code: result ? 1 : 0 }))
});

module.exports = Router