import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, BackTop  } from 'antd';
import axios from 'axios'
import './Line.scss';
import $ from 'jquery'
const { TabPane } = Tabs;
@withRouter
class Line extends Component {
    async componentDidMount(){
            //请求
            let res = await axios.get('http://127.0.0.1:3001/line/init')
            console.log('res',res)
            this.setState({
                listdata:res.data
            })
            {
            (function(){
                console.log(1)
                var showMoreNChildren = function ($children, n) {
                    //显示某jquery元素下的前n个隐藏的子元素
                    var $hiddenChildren = $children.filter(":hidden");
                    var cnt = $hiddenChildren.length;
                    for ( var i = 0; i < n && i < cnt ; i++) {
                        $hiddenChildren.eq(i).show();
                    }
                    return cnt-n;//返回还剩余的隐藏子元素的数量
                }
            
                //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
                $(".showMoreNChildren").each(function () {
                    var pagesize = $(this).attr("pagesize") || 5;
                    var $children = $(this).children();
                    if ($children.length > pagesize) {
                        for (var i = pagesize; i < $children.length; i++) {
                            $children.eq(i).hide();
                        }
            
                        $(".loadMore").click(function () {
                            if (showMoreNChildren($children, pagesize) <= 0) {
                                //如果目标元素已经没有隐藏的子元素了，就隐藏“点击更多的按钮条”
                                $(this).hide();
                            };
                        });
                    }
                });
            })();
            (function(){
                $('.show-dialog-bd-3 ul').on('click','li',function(){
                    $(this).addClass('active').siblings().removeClass('active');
                    $(this).parent().parent().parent().css('display','none')
                })
                $('#show-btn-3').click(function(){
                    $('#show-dialog-3').css('display','block')
                })
                $('.gallery').click(function(){
                    $('#show-dialog-3').css('display','none')
                })
            })();
        }
    }
    state = {
        tabdata: [
            '推荐产品',
            '自由行',
            '跟团游',
            '当地玩乐',
            '单酒店',
            '签证',
            'WIFI',
            '租车'
        ],
        listdata:[]
    }
    render() {
        let { history } = this.props;
        let {tabdata,listdata} = this.state;
        return (
            <div id='line'>
          
                 <div>
                        <BackTop 
                        visibilityHeight={0}
                        />
                    </div>
               
                <header className="ui-header ui-header-white">
                    <i className="ui-btn-icon-l icon icon-back" onClick={() => {
                        history.go(-1)
                    }}></i>
                    <i className="ui-btn-icon-r icon icon-default" id="changeListBtn"></i>
                </header>
                <div className="ui-container">
                    <Tabs defaultActiveKey="1" tabPosition={'top'}>
                        {tabdata.map(i => (
                            <TabPane tab={i} key={i} className="ui-list" style={{background:'#FFFFFF'}}>
                                <ul className="showMoreNChildren">
                                    {
                                        listdata ?

                                        listdata.map(item=>{
                                            return(
                                                <li key={item._id}>
                                                    <a href="https://m.qulv.com/Newdetail/Detail/detail.html?id=73856">
                                                        <div className="ui-list-img">
                                                            <img src={item.imgurl} alt={item.tripname} lazy="y" style={{opacity: 1}}/>
                                                            <em className="mark">{item.way}</em>
                                                                <div className="bottxt" >{item.origin}</div>
                                                        </div>
                                                        <div className="ui-list-info ui-border-b">
                                                            <h4>{item.tripname}</h4>
                                                            <p className="time-list">
                                                            </p>
                                                            <p className="tag-list" productlabel="好评率高,现货热卖">
                                                                {item.productlabel.map(i=>{
                                                                    return(
                                                                        <span key={i} className="tag">{i}</span>
                                                                    )
                                                                })}		
                                                            </p>
                                                            <p className="fn-clear">
                                                                
                                                                <span className="fn-left comment-txt" commentcount="28" satisfiedscore="95">
                                                                    {item.number}人点评&nbsp;&nbsp;{item.satisfaction}%满意
                                                                </span>
                                                                <span className="fn-right price">
                                                                    <em>￥<b className="price">{item.price}</b></em>起
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                        :
                                        <></>
                                        
                                    }
                                    
                                </ul>
                                <p className="loadMore">点击加载更多</p>
                                
                            </TabPane>
                        ))}
                    </Tabs>
                    <div className="ui-list">

                    </div>
                </div>
                <footer className="ui-footer">
                    <ul>
                        <li id="show-btn-1" type="show-dialog-1" className="js_show_ft_1 js_show_ft_2 js_show_ft_3 js_show_ft_4 js_show_ft_5 js_show_ft_6 ">
                            <i className="icon icon1"></i>
                            <p>目的地</p>
                        </li>
                        <li id="show-btn-2" type="show-dialog-2" className="js_show_ft_1">
                            <i className="icon icon2"></i>
                            <p>时间天数</p>
                        </li>
                        <li id="show-btn-3" type="show-dialog-3" className="js_show_ft_1 js_show_ft_2 js_show_ft_3 js_show_ft_4 js_show_ft_5 js_show_ft_6">
                            <i className="icon icon3"></i>
                            <p>推荐排序</p>
                        </li>
                        <li id="show-btn-4" type="show-dialog-4" className="js_show_ft_1 js_show_ft_2">
                            <i className="icon icon4"></i>
                            <p>特色筛选</p>
                        </li>
                    </ul>
                </footer>
                <div className="dialog-box">
                    <div className="show-dialog-3 js_show_modal" id="show-dialog-3">
                        <div className="gallery"></div>
                        <div className="show-dialog-bd-3">
                            <ul>
                                <li className="ui-border-b active" id onClick={async ()=>{
                                    let data = await axios.get('http://127.0.0.1:3001/line/init')
                                    this.setState({
                                        listdata:data.data
                                    })
                                }}>
                                    <span>推荐排序</span>
                                    <i className="icon-check"></i>
                                </li>
                                <li className="ui-border-b" id="1" onClick={async ()=>{
                                    let data = await axios.get('http://127.0.0.1:3001/line/numsort')
                                    this.setState({
                                        listdata:data.data
                                    }) 
                                }}>
                                    <span>销量从高到低</span>
                                    <i className="icon-check"></i>
                                </li>
                                <li className="ui-border-b" id="2" onClick={async ()=>{
                                    let data = await axios.get('http://127.0.0.1:3001/line/satsort')
                                    this.setState({
                                        listdata:data.data
                                    }) 
                                }}>
                                    <span>满意度最高</span>
                                    <i className="icon-check"></i>
                                </li>
                                <li className="ui-border-b" id="3" onClick={async ()=>{
                                    let data = await axios.get('http://127.0.0.1:3001/line/pricesort',{
                                        params:{
                                            type:'desc'
                                        }
                                    })
                                    this.setState({
                                        listdata:data.data
                                    }) 
                                }}> 
                                    <span>价格从高到低</span>
                                    <i className="icon-check"></i>
                                </li>
                                <li className="ui-border-b" id="4" onClick={async ()=>{
                                    let data = await axios.get('http://127.0.0.1:3001/line/pricesort',{
                                        params:{
                                            type:'asc'
                                        }
                                    })
                                    this.setState({
                                        listdata:data.data
                                    }) 
                                }}>
                                    <span>价格从低到高</span>
                                    <i className="icon-check"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default Line;