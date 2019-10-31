import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, BackTop  } from 'antd';
import './Line.scss';
import $ from 'jquery'
const { TabPane } = Tabs;
@withRouter
class Line extends Component {
    componentDidMount(){
        
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
            })()
        
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
        listdata:[
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2015-05/20150508174236927_91.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'马尔代夫绚丽岛 Rannalhi7天5晚自由行 (4钻)',
                productlabel:['好评率高','现货热卖'],
                price:9999,
                number:28,
                satisfaction:95
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【上海出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:10500,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'广州出发',
                tripname:'【广州出发】马尔代夫蓝色美人蕉Thulhagiri6天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:10380,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【全国多地出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:9780,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【全国多地出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:9780,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【全国多地出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:9129,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【全国多地出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:9129,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170622145503010_27.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【全国多地出发】马尔代夫蓝色美人蕉Thulhagiri7天5晚自由行（4钻）+高性价比+法式浪漫+蜜月礼',
                productlabel:['爆款','好评率高','现货','特价','现货热卖'],
                price:9129,
                number:20,
                satisfaction:94
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170627110832836_92.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【上海出发】马尔代夫阿玛瑞豪沃达 Amari7天5晚自由行 (5钻)私密性高+浮潜圣地+美食多样',
                productlabel:['热卖','特价','暑期'],
                price:13109,
                number:6,
                satisfaction:98
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170627110832836_92.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【上海出发】马尔代夫阿玛瑞豪沃达 Amari7天5晚自由行 (5钻)私密性高+浮潜圣地+美食多样',
                productlabel:['热卖','特价','暑期'],
                price:12800,
                number:6,
                satisfaction:98
            },
            {
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170627110832836_92.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【上海出发】马尔代夫阿玛瑞豪沃达 Amari7天5晚自由行 (5钻)私密性高+浮潜圣地+美食多样',
                productlabel:['热卖','特价','暑期'],
                price:13109,
                number:6,
                satisfaction:98
            },{
                imgurl:'http://pic.qtour.com/Upload/travel_line/2017-06/20170626160730811_86.jpg',
                way:'自由行',
                origin:'上海出发',
                tripname:'【上海出发】马尔代夫波杜希蒂Bodu Hithi7天5晚自由行（5钻）私人泳池+超大别墅+按摩浴缸+蜜月亲子',
                productlabel:['爆款','现货','销量第一'],
                price:14200,
                number:130,
                satisfaction:96
            }
        ]
    }
    render() {
        let { history } = this.props;
        let {tabdata,listdata} = this.state;
        console.log(2)
        return (
            <div>
          
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
                                        listdata.map(item=>{
                                            return(
                                                <li >
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
                                                                        <span className="tag">{i}</span>
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
                
            </div>
            
        )
    }
}


export default Line;