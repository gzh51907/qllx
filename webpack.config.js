/*
 * @Author: your name
 * @Date: 2019-10-22 19:43:30
 * @LastEditTime: 2019-11-04 18:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /c:\Users\九亿少女的梦\Desktop\千锋3阶段\My_three_step\W5-reactc:\Users\九亿少女的梦\Desktop\千锋3阶段\My_three_step\React-router\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry:{
        main:'./src/main.js',
    },

    // 出口（编译后文件处理）
    output:{
        path:path.join( __dirname,'./dist'),
        filename:'bundle-[name]-[hash:5].js',
        publicPath:'./'
    },

    // 测试服务器（为了在开发环境中测试使用，编译打包后就没有服务器了）
    devServer:{
        contentBase:path.join( __dirname,'./src') //f:\wwx\xx\src
    },
    resolve:{
        alias:{
            // 'vue$':'vue/dist/vue.js',//解决Vue单文件组件不能使用template的问题
            '@':path.resolve('src'),
            '@@':path.resolve('src/component'),
            '~':path.resolve('src/pages')
        },
        extensions:['.js','.jsx']  
    },
    // 加载器loader
    module:{
        rules:[
            // 编译JSX->需要babel->需要babel-loader
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    // options:{
                    //     presets:['@babel/preset-react'],
                    //     plugins:[
                    //         ['@babel/plugin-proposal-decorators',{legacy:true}],
                    //         ['@babel/plugin-proposal-class-properties',{loose:true}],
                    //         ['@babel-plugin-import',{
                    //               libraryName: "antd",
                    //               libraryDirectory: "es",
                    //               style: "css" 
                    //          }] 
                    //     ]
                    // }
                }],
                include:path.join( __dirname,'./src'),
                // exclude:'./node_modules'
                // use的简写
                // loader:['babel-loader']
            },

            // 其他加载器
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                use:['url-loader']
            }
        ]
    },

    plugins:[
        // 删除dist文件夹
        new CleanWebpackPlugin(),

        // 创建dist文件
        new HtmlWebpackPlugin({
            template:'./src/template.html',
            // filename:'index.html'
        })
    ]
}