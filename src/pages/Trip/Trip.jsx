import React, { Component } from 'react';
import './Trip.scss';
import { Icon, Carousel } from 'antd';
import axios from 'axios';

class Trip extends Component {
    state = {
        PriceData: [],
        HotelQty: 1,
        MiddleHotelQty: 1
    }
    async componentDidMount() {
        // let { Data } = await axios.get('https://m.qulv.com/api/v2/PriceCalendar/GetPriceCalendar', {
        //     params: {
        //         cabinID: '4dbf0921-0bbd-47d0-a54d-8e0aee756f9b',
        //         SkuCode: 'L00000204006'
        //     }
        // })
        // console.log(Data)
        window.onscroll = function () {
            let header = document.getElementsByClassName('top-header')[0];
            if (window.scrollY > 200) {
                header.classList.add('active')
            } else {
                header.classList.remove('active')
            }
        }
    }

    goback = () => {
        let { history } = this.props;
        history.push(-1)
    }
    checkPrice(e) {
        let _this = this;
        console.log(e.currentTarget)
        let icons = document.querySelectorAll('.liCon .icon');

    }
    Roomdown = () => {
        let { HotelQty } = this.state;
        HotelQty--;
        if (HotelQty < 1) {
            HotelQty = 1;
            alert('至少预定一间')
        }
        this.setState({
            HotelQty
        })
    }
    RoomAdd = () => {
        console.log(1)
        let { HotelQty } = this.state;
        HotelQty++;
        // console.log(num)
        this.setState({
            HotelQty,
        })
    }
    MiddleRoomdown = () => {
        let { MiddleHotelQty } = this.state;
        MiddleHotelQty--;
        if (MiddleHotelQty < 1) {
            MiddleHotelQty = 1;
            alert('至少预定一间')
        }
        this.setState({
            MiddleHotelQty
        })
    }
    MiddleRoomAdd = () => {
        console.log(1)
        let { MiddleHotelQty } = this.state;
        MiddleHotelQty++;
        // console.log(num)
        this.setState({
            MiddleHotelQty
        })
    }
    fade = (i) => {

        let hotelItemList = document.getElementsByClassName('hotelItem-list')[i];
        let fadeIn = hotelItemList.nextElementSibling;
        if (hotelItemList.getAttribute('class') == 'hotelItem-list') {
            hotelItemList.classList.add('active');
            fadeIn.classList.add('active');
            fadeIn.getElementsByTagName('span')[0].innerHTML = '收起'
            hotelItemList.style.height = 'auto';
        } else {
            hotelItemList.classList.remove('active');
            fadeIn.classList.remove('active');
            fadeIn.getElementsByTagName('span')[0].innerHTML = '展开'
            hotelItemList.style.height = '450px';
        }


    }
    render() {
        let { HotelQty, MiddleHotelQty } = this.state;
        return (
            <div className='Trip_container'>
                <div className='top-header'>
                    <div className='header'>
                        <span onClick={this.goback} className='back'>
                            <i className="icon icon-arrowL"></i>
                        </span>
                        <div className='tab'>
                            <span className='active'>
                                <em>产品</em>
                            </span>
                            <span>
                                <em>行程</em>
                            </span>
                            <span>
                                <em>费用</em>
                            </span>
                        </div>
                        <div className='share'>
                            <span className='menuIcon'>
                                <em></em>
                                <em></em>
                                <em></em>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='bannerMain'>
                    <div className='product-type'>自由行</div>
                    <div className='banner'>
                        {/* <div className='swiper-container swiper-container-horizatal'></div> */}
                        <Carousel style={{ height: '4rem' }}>
                            <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2015-03/20150312153147675_72.jpg'></img>
                            <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2017-08/20170823161934121_59.jpg'></img>
                            <img src='https://upload.qulv.com/release//2019/01/22/13/56/scztqvvd.jx5.jpeg'></img>
                            <img src='https://upload.qulv.com/release//2019/01/22/13/55/ip04l0rh.ugc.jpeg'></img>
                            <img src='https://upload.qulv.com/release//2019/01/22/13/55/vlcxzzs4.hhl.jpg'></img>
                        </Carousel>
                        <div className='code'>编号：L00000204006</div>
                        {/* <div className='sideNum'>
                            <span id='pageNum'>1</span>
                            <span>/5</span>
                        </div> */}
                    </div>
                </div>
                <div className='productMes'>
                    <h1 className="mes">&lt;马尔代夫蓝色美人蕉岛7天5晚游&gt;浮潜小岛，性价比高，原生态设计</h1>
                    <p className='line-label'>
                        <span>原生态疗养</span>
                        <span>酒店疗养SPA</span>
                        <span>健康疗养设施</span>
                        <span>私人沙滩秘境</span>
                    </p>
                    <div className='pd-price'>
                        <p>实时询价</p>
                        <p>
                            <span className='showPriceTip'>
                                '价格说明'
                                <i className='icon icon-priceTip2'></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className='moneyoff' >
                    <p>
                        <span>满减</span>
                    </p>
                    <p className='cont openMoneyoff'>
                        <span id='moneyoffTab'></span>
                        <i className='icon icon-arrowR'></i>
                    </p>
                </div>
                <div className='roll'>
                    <p>
                        <span>领券</span>
                    </p>
                    <p className='share openDiscount'>
                        <span id='ticketsTab'></span>
                        <i className='icon icon-arrowR'></i>
                    </p>
                </div>
                <div className='cityMain'>
                    <div className='city flex-row'>
                        <p className='flex-item'>
                            <em>城市</em>
                            <span>
                                <b id='defaultCity' data-departure-cityid='6fcd9501-7793-48eb-8ec2-cabe12e08bf7'>香港</b>
                                出发
                            </span>
                        </p>
                        <p className='flex-item openCity'>
                            <span>
                                <b id='cityListNum'>14</b>
                                个城市可选
                            </span>
                            <i className='icon icon-arrowR'></i>
                        </p>
                    </div>
                </div>
                <div className='date'>
                    <div className='change'>
                        <div className='change-title'>
                            <p className='openCalendar'>
                                <span>已选</span>
                                <em className='changeDate'>
                                    <b id='adultNum'>2</b>
                                    成人
                                    <b id='childNum'>0</b>
                                    儿童
                                </em>
                                <span className='fn-right'>
                                    更改套餐/人数/日期
                                    <i className='icon icon-arrowR'></i>
                                </span>
                            </p>
                            <p>
                                <span className='sku-name'>HX791+A套餐006</span>
                                套餐
                            </p>
                        </div>
                        <div className='scoller'>
                            <ul className='dataRow'>
                                <li className='dataLi' onClick={(e) => this.checkPrice(e)}>
                                    <div className='liCon'>
                                        <span>
                                            <em className='timeText'>11-05</em>
                                            <em>周二</em>
                                        </span>
                                        <span>实时询价</span>
                                        <i className='icon icon-itemActive'></i>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className='change-more openCalendar'>
                            全部团期
                        </div>
                    </div>
                    <div className='empty-flight' style={{ display: 'none' }}>
                        暂无班期
                    </div>

                </div>
                <div className='airMain'>
                    <div className='airMainTitle fn-clear'>
                        <h2>航班信息</h2>
                        <span className='right openCalendar'>
                            <em id='cabinName'>经济舱</em>
                            <i className='icon icon-arrowR'></i>
                        </span>
                    </div>
                    <div className='airList' id='flightDefaultBox'>
                        <div className='flightBox'>
                            <div className='flightItem' style={{ display: 'block' }}>
                                <div className='flightItemTitle fn-clear'>
                                    <div className='itemName'>
                                        机票组合
                                        </div>
                                    <div className='itemChoose'>
                                        <em>
                                            差价：
                                                <em className='disType'></em>
                                            <i className='disPrice'>0</i>
                                        </em>
                                        <button>选择</button>
                                    </div>
                                </div>
                                <div className='listItem'>
                                    <div className='item'>
                                        <p>
                                            <i>去</i>
                                            <span>11-05</span>
                                            <span>香港航空HX791</span>
                                            <span>空客A330</span>
                                            <span>经济舱</span>
                                        </p>
                                        <div className='airMes flex-row'>
                                            <div className='start flex-item'>
                                                <p>
                                                    <span>17:20</span>
                                                    <em>香港</em>
                                                </p>
                                                <p>香港赤鱲角国际机场</p>
                                            </div>
                                            <div className='time'>
                                                <p>
                                                    <i className='icon icon-time'></i>
                                                    <span>7h15m</span>
                                                </p>
                                            </div>
                                            <div className='start flex-item'>
                                                <p>
                                                    <em>马累</em>
                                                    <span>21:35</span>
                                                </p>
                                                <p>马累易卜拉欣·纳西尔国际机场</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='listItem'>
                                    <div className='item'>
                                        <p>
                                            <i className='back'>返</i>
                                            <span>11-10</span>
                                            <span>香港航空HX792</span>
                                            <span></span>
                                        </p>
                                        <div className='airMes flex-row'>
                                            <div className='start flex-item'>
                                                <p>
                                                    <span>23:15</span>
                                                    <em>马累</em>
                                                </p>
                                                <p>马累易卜拉欣·纳西尔国际机场</p>
                                            </div>
                                            <div className='time'>
                                                <p>
                                                    <i className='icon icon-time'></i>
                                                    <span>6h20m</span>
                                                </p>
                                            </div>
                                            <div className='start flex-item'>
                                                <p>
                                                    <em>香港</em>
                                                    <span>
                                                        08:35
                                                        <b className='flightDays'>+1</b>
                                                    </span>
                                                </p>
                                                <p>香港赤鱲角国际机场</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='airTip' style={{ padding: '10px' }}>
                                *所有航班起抵时间均为当地时间（24小时制），机票酒店仅供参考，最终确认以出团通知书为准。
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hotel' style={{ display: 'block' }}>
                    <div className='hotelBottom'>
                        <div className='hotelTitle'>
                            <h3>
                                <span>酒店组合套餐</span>
                                <p className='setRoomNum' id='setRoomNum'>
                                    <input type='button' onClick={this.Roomdown} className='room-down icon icon-minus'></input>
                                    <em className='HotelQty'>{HotelQty}</em>
                                    <input type='button' onClick={this.RoomAdd} className='room-add icon icon-add' data-maxnum='10'></input>
                                    间
                                </p>
                            </h3>
                        </div>
                        <div className='hotelBottomInner' id='hotelBox'>
                            <div className='contentBox'>
                                <div className='hotelInnerBd content' data-extra-adult='1' data-stand-num='2'>
                                    <div className='hotelComboDl'>
                                        <div className='showComboIntro'>
                                            <dl>
                                                <dt>套餐名称：</dt>
                                                <dd>A套餐</dd>
                                            </dl>
                                            <dl>
                                                <dt>套餐包含</dt>
                                                <dd>房型：2晚标准房Standard Room+2晚水上房Water Bungalow;套餐：AI一价全包；上岛交通：往返快艇</dd>
                                            </dl>
                                            <i className='icon icon-arrowR' ></i>
                                        </div>
                                    </div>
                                    <p className='txt2'>
                                        <span>蓝色美人蕉</span>
                                        (Thulhagiri Island Resort)
                                    </p>
                                    <ul className='hotelList'>
                                        <li>
                                            <a href='https://m.qulv.com/hotel/d857c445-0b5a-64a6-27d5-c761c0a31b48.html'>
                                                <div className='hotelInfo fn-clear'>
                                                    <div className='imgBox'>
                                                        <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104012664_13.jpg'></img>
                                                    </div>
                                                    <div className='txtBox'>
                                                        <p className='txt3 fn-clear'>
                                                            {/* 豪华房 */}
                                                            <span className='fn-left'>豪华房</span>
                                                        </p>
                                                        <p className='txt4 fn-clear' taglist>
                                                            {/* 可住2人 */}
                                                            <em>可住2人</em>
                                                        </p>
                                                        <p className='txt1'>
                                                            <span>2019-11-01入住</span>
                                                            <span>2019-11-03退房</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='hotelInnerBd content' data-extra-adult='1' data-stand-num='2'>
                                    <div className='hotelComboDl'>
                                        <div className='showComboIntro'>
                                            <dl>
                                                <dt>套餐名称：</dt>
                                                <dd>A套餐</dd>
                                            </dl>
                                            <dl>
                                                <dt>套餐包含</dt>
                                                <dd>房型：2晚标准房Standard Room+2晚水上房Water Bungalow;套餐：AI一价全包；上岛交通：往返快艇</dd>
                                            </dl>
                                            <i className='icon icon-arrowR' ></i>
                                        </div>
                                    </div>
                                    <p className='txt2'>
                                        <span>蓝色美人蕉</span>
                                        (Thulhagiri Island Resort)
                                    </p>
                                    <ul className='hotelList'>
                                        <li>
                                            <a href='https://m.qulv.com/hotel/d857c445-0b5a-64a6-27d5-c761c0a31b48.html'>
                                                <div className='hotelInfo fn-clear'>
                                                    <div className='imgBox'>
                                                        <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104349258_46.jpeg'></img>
                                                    </div>
                                                    <div className='txtBox'>
                                                        <p className='txt3 fn-clear'>
                                                            {/* 豪华房 */}
                                                            <span className='fn-left'>豪华房</span>
                                                        </p>
                                                        <p className='txt4 fn-clear' taglist>
                                                            {/* 可住2人 */}
                                                            <em>可住2人</em>
                                                        </p>
                                                        <p className='txt1'>
                                                            <span>2019-11-01入住</span>
                                                            <span>2019-11-05退房</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hotelTop'>
                        <div className='hotelTitle'>
                            <h3>
                                <span>中转酒店</span>
                                <p className='setRoomNum' id='setRoomNum'>
                                    <input type='button' onClick={this.MiddleRoomdown} className='room-down icon icon-minus'></input>
                                    <em className='HotelQty'>{MiddleHotelQty}</em>
                                    <input type='button' onClick={this.MiddleRoomAdd} className='room-add icon icon-add' data-maxnum='10'></input>
                                    间
                                </p>
                            </h3>
                        </div>
                        <div className='hotelTopInner'>
                            <p className='txt2'>
                                <span>QINN（马累过度酒店）</span>
                            </p>
                            <ul className='hotelList'>
                                <li>
                                    <a href='https://m.qulv.com/hotel/9f4127b3-489f-695b-350a-9e2c2ddcaf47.html'>
                                        <div className='hotelInfo fn-clear'>
                                            <div className='imgBox'>
                                                <img src='https://upload.qulv.com/release//2018/07/16/11/50/yhywe013.s05.jpg'></img>
                                            </div>
                                            <div className='txtBox'>
                                                <p className='txt3 fn-clear'>
                                                    {/* 豪华房 */}
                                                    <span className='fn-left'>基础房(Standard Room)</span>
                                                </p>
                                                <p className='txt4 fn-clear' taglist>
                                                    {/* 可住2人 */}
                                                    <em>一张大床</em>
                                                    <em>可住2人</em>
                                                </p>
                                                <p className='txt1'>
                                                    <span>2019-10-31入住</span>
                                                    <span>2019-11-01退房</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='free route topItem'>
                    <div className='title'>
                        <span></span>
                        <div>
                            <i className='icon icon-xingcheng'></i>
                            <h2>行程</h2>
                        </div>
                        <span></span>
                    </div>
                    <div className='hotelItemBox'>
                        <i className='icon icon-jiaotong'></i>
                        <div className='hotelItem-list' style={{ height: 'auto' }}>
                            <div className='hotelItem'>
                                <div className='titleItem'>
                                    <p>
                                        <span>交通：</span>
                                        <span></span>
                                        <i className='icon icon-plane'></i>
                                        <span></span>
                                    </p>
                                </div>
                                <div className='spotItem'>
                                    <div className='spot'>
                                        <p>
                                            <span></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='fadeIn fadeInBtn' style={{ display: 'none' }}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className='hotelItemBox'>
                        <div className='hotelItem-list' style={{ height: '450px' }}>
                            <div className='hotelItem'>
                                <i className='icon icon-island'></i>
                                <div className='titleItem'>
                                    <p>
                                        <span>岛屿：</span>
                                        <span>岛屿介绍</span>
                                    </p>
                                </div>
                                <div className='spotItem'>
                                    <div className='spot'>
                                        <p></p>
                                        <p style={{ fontFamily: '微软雅黑' }}>拥有52间完全新装饰的海景精致沙滩屋，沙滩屋是呈六边形的，屋顶有厚厚的茅草，房间里的所有家具都是用竹子和藤木做的，非常自然。
                                        <br style={{ color: '#676767', whiteSpace: 'normal' }} />蓝色美人蕉岛性价比一直非常高。
                                        </p>
                                        <ul className='spotImg fn-clear'>
                                            <li>
                                                <img src='https://upload.qulv.com/release//2018/04/03/17/31/kr5x2rwt.o5y.jpg' alt='岛屿介绍'></img>
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src='https://upload.qulv.com/release//2018/04/03/17/31/5fuqrsbf.fqi.jpg'></img>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='hotelItem'>
                                <i className='icon icon-island'></i>
                                <div className='titleItem'>
                                    <p>
                                        <span>岛屿:</span>
                                        <span>岛屿优点</span>
                                    </p>
                                </div>
                                <div className='spotItem'>
                                    <div className='spot'>
                                        <p></p>
                                        <p style={{ fontFamily: '微软雅黑' }}>价格便宜，性价比很高，浮潜好，岛屿不大不小，基本30分钟左右可以玩遍整个岛，酒店纯自然风格，如果不追求豪华酒店，真的是非常好的选择。</p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className='hotelItem'>
                                <i className='icon icon-island'></i>
                                <div className='titleItem'>
                                    <p>
                                        <span>岛屿：</span>
                                        <span>岛屿缺点</span>
                                    </p>
                                </div>
                                <div className='spotItem'>
                                    <div className='spot'>
                                        <p></p>
                                        <p style={{ fontFamily: '微软雅黑' }}>
                                            房间没有免费饮用水提供，需付费购买，房间没有免费Wifi，也需付费，全岛只有酒吧有免费wifi提供使用。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='fadeIn fadeInBtn' onClick={this.fade.bind(this, 1)}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className='hotelItemBox'>
                        <div className='hotelItem-list' style={{ height: '450px' }}>
                            <div className="hotelItem">
                                <i className="icon icon-house"></i>
                                <div className="titleItem">
                                    <p><span>房型：</span><span>沙滩房</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p>
                                        <p className="title" style={{ marginTop: '0px', marginBottom: '10px', whiteSpace: 'normal', listStyle: 'none', padding: '0px', fontWeight: 'bold', color: '#3e3e3e' }}>沙滩房 (Standard Deluxe)</p>
                                        <p style={{ whiteSpace: 'normal' }}>房型介绍：原始海岛风格，房子呈六边形，屋顶有厚厚的茅草，房间里的所有家具都是用竹子和藤木做的，非常自然，电器及设施比较简单。</p>
                                        <p>&nbsp;</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104020570_83.jpg" alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104012664_13.jpg" alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2015-03/20150311152149585_89.jpg" alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2017-06/20170605174630300_17.jpg" alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-house"></i>
                                <div className="titleItem">
                                    <p><span>房型：</span><span>水上屋</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p className="title" style={{ marginTop: '0px', marginBottom: '10px', whiteSpace: 'normal', listStyle: 'none', padding: '0px', fontWeight: 'bold', color: '#3e3e3e' }}>水上屋 (Water Bungalow)</p>
                                        <p style={{ whiteSpace: 'normal' }}>房型介绍：其中201是最靠近岛屿，217是最远离岛屿，可以看到更多鱼，201～204可以在阳台看日落，214～217可以在阳台看日出，电器及设施比较简单。</p>
                                        <p>&nbsp;</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2017-06/20170605174742505_49.jpg" alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104349258_46.jpeg" alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104420617_20.jpg" alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2015-03/20150311153223437_103.jpg" alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='fadeIn fadeInBtn' onClick={this.fade.bind(this, 2)}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className="hotelItemBox">
                        <div className="hotelItem-list" style={{ height: '450px' }}>
                            <div className="hotelItem">
                                <i className="icon icon-dining"></i>
                                <div className="titleItem">
                                    <p><span>餐厅：</span><span>Riveli Restaurant</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑' }}>餐厅介绍：在Riveli (马尔地夫语意指“光束”)，您将对亚洲、地中海和马尔地夫各地风味的和谐融合产生极大兴趣。饱餐一顿瑞典式自助餐和套餐，同时让眼睛也得到美景的滋养。</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/33/oyi35a53.4hc.jpg" alt="Riveli Restaurant-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-dining"></i>
                                <div className="titleItem">
                                    <p><span>餐厅：</span><span>The Velaavani Bar</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑' }}>餐厅介绍：Velaavani指海龟聚集的浅湾。这个水边酒吧与环礁湖和暗礁相临，可整日提供清爽的鸡尾酒和味美的小吃，时而还能发现海龟甚至是罕见的海豚</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/48/winss415.lzf.jpg" alt="The Velaavani Bar-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fadeIn fadeInBtn" onClick={this.fade.bind(this, 3)}>
                            <span>展开</span><i className="icon icon-arrowT"></i>
                        </div>
                    </div>
                    <div className='hotelItemBox'>
                        <div className='hotelItem-list' style={{ height: '450px' }}>
                            <div className="hotelItem">
                                <i className="icon icon-recrea"></i>
                                <div className="titleItem">
                                    <p><span>娱乐：</span><span>SPA</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p>
                                        <p style={{ fontFamily: '微软雅黑' }}>在这里时间将被人们遗忘，步入香氛的宫殿将带你进入一个享受的世界，展开一段新的旅程，拥有完美的SPA体验。</p>
                                        <p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/hbnwgre5.tx4.jpg" alt="SPA-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/jmvx1mud.44h.jpg" alt="SPA-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-recrea"></i>
                                <div className="titleItem">
                                    <p><span>娱乐：</span><span>潜水</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑', }}>潜水学习中心，首先在岸上教会你如何呼吸，换气，排水等步骤，到了水下，教练会按照指示，来领着我们潜水。潜水一开始有绳子，之后会下降到10 米-20米左右看珊瑚。整个过程很顺利，只要听从教练的话就可以。</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/ih4xwm3e.skz.jpg" alt="潜水-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/3btpk25x.0ku.jpg" alt="潜水-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-recrea"></i>
                                <div className="titleItem">
                                    <p><span>娱乐：</span><span>出海垂钓</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑' }}>每天都会有出海垂钓，那里有各种品种多样的海洋鱼类，钓上岸的鱼，你还可以带回酒店由顶端的大厨为你烹饪出一道可口的菜式。</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/rayacibr.t3p.jpg" alt="出海垂钓-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/guec2j4d.rox.jpg" alt="出海垂钓-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-recrea"></i>
                                <div className="titleItem">
                                    <p><span>娱乐：</span><span>出海看海豚</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑' }}>乘坐帆船出海，在海中央欣赏可爱的海豚，在大海中，海豚在海里疯狂的游泳，下潜，上跃，描画完美弧线。定能让您拥有不一样的体验。</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/njza0hf0.bkb.jpg" alt="出海看海豚-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/r0kra0z5.nej.jpg" alt="出海看海豚-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hotelItem">
                                <i className="icon icon-recrea"></i>
                                <div className="titleItem">
                                    <p><span>娱乐：</span><span>健身房</span></p>
                                </div>
                                <div className="spotItem">
                                    <div className="spot">
                                        <p></p><p style={{ fontFamily: '微软雅黑' }}>配备跑步机、哑铃杠铃、建身自行车及其它力量和心肺训练设备，使您即使在假期中也能继续健身计划。借助iPod播放运动感十足的音乐，或观赏最近的新闻或HBO影片, 伴您大量消耗卡路里。</p><p></p>
                                        <ul className="spotImg fn-clear">
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/knlk3ttj.mty.jpg" alt="健身房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/ghgzljhx.yly.jpg" alt="健身房-0" />
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='fadeIn fadeInBtn' onClick={this.fade.bind(this, 4)}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className='hotelItemBox'>
                        <i className='icon icon-food'></i>
                        <div className="hotelItem-list">
                            <div className="hotelItem">
                                <div className="titleItem">
                                    <p><span>餐饮</span></p>
                                </div>
                                <div className="food-item">
                                    <p className="item">
                                        <em>早餐</em>
                                        <span>包含</span>
                                    </p>
                                    <p></p>
                                </div>
                                <div className="food-item">
                                    <p className="item">
                                        <em>午餐</em>
                                        <span>包含</span>
                                    </p>
                                    <p></p>
                                </div>
                                <div className="food-item">
                                    <p className="item">
                                        <em>晚餐</em>
                                        <span>包含</span>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className='fadeIn fadeInBtn' style={{display:'none'}} onClick={this.fade.bind(this,5)}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className='hotelItemBox'>
                        <i className='icon icon-hotel'>

                        </i>
                        <div className="hotelItem-list">
            <div className="hotelItem">
                <div className="titleItem">
                    <p><span>住宿</span></p>
                </div>
                    <p><span>蓝色美人蕉 </span></p>
            </div>
        </div>
                        <div className='fadeIn fadeInBtn' style={{display:'none'}}>
                            <span>展开</span>
                            <i className='icon icon-arrowT'></i>
                        </div>
                    </div>
                    <div className='hotel-remark'></div>
                </div>
                <div className='cost'>
                    <h2>产品特色</h2>
                    <div className='costMain'>
                        <div className='costList pdTese'>
                        <p style={{margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif',  color: '#666666'}}>1、马代最受欢迎的优质小岛之一，房间有看海玻璃茶几观看海底鱼类，法国人经营的小岛处处有浪漫。</p>
                        <p style={{margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif',  color: '#666666'}}>2、沙滩细白，优质浮潜环境深受欧美人及浮潜发烧友的喜爱。沙滩出去2米即可享受珊瑚海底世界；大面积的珊瑚礁围绕着岛屿。提供免费浮潜用具。</p>
                        <p style={{margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif',  color: '#666666'}}>3、性价比高，价格亲民，活动丰富且自费项目价格实惠。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trip;