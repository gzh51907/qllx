import React, { Component } from 'react';
import './Trip.scss';
import { Icon, Carousel } from 'antd';
import axios from 'axios';
import lazyImg from './lazyImg.js';

class Trip extends Component {
    state = {
        PriceData: [],
        HotelQty: 1,
        MiddleHotelQty: 1
    }
    async componentDidMount() {
        let { data } = await axios.get('http://49.232.154.155:2003/trip/init');
        window.onscroll = function () {
            let header = document.getElementsByClassName('top-header')[0];
            if (window.scrollY > 200) {
                header.classList.add('active')
            } else {
                header.classList.remove('active')
            }
        }
        let PriceData = [];
        data[0].Data.forEach(item => {
            PriceData = PriceData.concat(item.LowestPriceGroups)
        })
        this.setState({
            PriceData: PriceData
        })

    }

    goback = () => {

        let { history } = this.props;
        history.go(-1)
    }
    checkPrice(e) {
       
        let Current = e.currentTarget;
        let dataList = document.querySelectorAll('.dataLi');
       
        let i =  Current.getElementsByClassName('icon')[0];
        dataList.forEach(item=>{
            item.classList.remove('active');
            // item.getElementsByClassName('icon')[0].remove('icon-itemActive')
        })
        i.classList.add('icon-itemActive')
        Current.classList.add('active')
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
        // console.log(1)
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

        let { MiddleHotelQty } = this.state;
        MiddleHotelQty++;
        // console.log(num)
        this.setState({
            MiddleHotelQty
        })
    }
    closeMoyo = (isok) => {
        let moyoffWin = document.getElementsByClassName('moyoffWin')[0]


        if (isok) {
            moyoffWin.style.display = 'block';
        } else {
            moyoffWin.style.display = 'none';
        }

    }
    menuShow = (isok) => {

        let menu = document.getElementsByClassName('menu')[0];

        if (isok) {
            menu.style.display = 'block';

        } else {
            menu.style.display = 'none';
        }



    }
    discountShow = (isok) => {
        let discount = document.getElementsByClassName('discount')[0];
        if (isok) {
            discount.style.display = 'block';
        } else {
            discount.style.display = 'none';
        }
    }
    cityShow = (isok) => {
        let cityCover = document.getElementsByClassName('cityCover')[0];
        if (isok) {
            cityCover.style.display = 'block';
        } else {
            cityCover.style.display = 'none';
        }
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
    toPage = (name,e)=>{
        let el = document.getElementsByName(name)[0];
        el.scrollIntoView()
        let tab = document.getElementsByClassName('tab')[0];
        tab.childNodes.forEach(item=>{
            item.classList.remove('active')
        })
        e.currentTarget.classList.add('active');

    }
    render() {
    
        let {ProductCode} = this.props.match.params;
        let { HotelQty, MiddleHotelQty, PriceData } = this.state;
        // console.log(PriceData)
        return (
            <div className='Trip_container'>
                <div className='top-header'>
                    <div className='header'>
                        <span onClick={this.goback} className='back'>
                            <i className="icon icon-arrowL"></i>
                        </span>
                        <div className='tab'>
                            <span className='active' onClick={this.toPage.bind(this,'cp')}>
                                <em>产品</em>
                            </span>
                            <span onClick={this.toPage.bind(this,'xc')}>
                                <em>行程</em>
                            </span>
                            <span  onClick={this.toPage.bind(this,'fy')}>
                                <em>费用</em>
                            </span>
                        </div>
                        <div className='share' onClick={this.menuShow.bind(this, true)}>
                            <span className='menuIcon'>
                                <em></em>
                                <em></em>
                                <em></em>
                            </span>
                        </div>
                    </div>
                    <div className="menu" id="menuCover" onClick={this.menuShow.bind(this, false)} style={{ display: 'none' }}>
                        <div className="menuList">
                            <em></em>
                            <p><i className="icon icon-home"></i><span>首页</span></p>
                            <p><i className="icon icon-search2"></i><span>搜索</span></p>
                            <p className="share-item"><i className="icon icon-share"></i><span>分享</span></p>
                            <p><i className="icon icon-footprint"></i><span>足迹</span></p>
                        </div>
                    </div>
                </div>
                <div className='bannerMain' name='cp'>
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
                        <div className='code'>编号：{ProductCode}</div>
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
                <div className='moneyoff' onClick={this.closeMoyo.bind(this, true)}>
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
                    <p className='share openDiscount' onClick={this.discountShow.bind(this, true)}>
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
                        <p className='flex-item openCity' onClick={this.cityShow.bind(this, true)}>
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

                                {
                                    PriceData.map(item => {
                                        return (
                                            <li key={item.DepartureDate} className='dataLi' onClick={(e) => this.checkPrice(e)}>
                                                <div className='liCon'>
                                                    <span>
                                                        <em className='timeText'>{item.DepartureDateStr}</em>
                                                        <em>{item.Day}</em>
                                                    </span>
                                                    <span>实时询价</span>
                                                    <i className='icon'></i>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
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
                                                        <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104012664_13.jpg' lazy='y'></img>
                                                    </div>
                                                    <div className='txtBox'>
                                                        <p className='txt3 fn-clear'>
                                                            {/* 豪华房 */}
                                                            <span className='fn-left'>豪华房</span>
                                                        </p>
                                                        <p className='txt4 fn-clear'>
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
                                                        <img src='https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104349258_46.jpeg' lazy='y'></img>
                                                    </div>
                                                    <div className='txtBox'>
                                                        <p className='txt3 fn-clear'>
                                                            {/* 豪华房 */}
                                                            <span className='fn-left'>豪华房</span>
                                                        </p>
                                                        <p className='txt4 fn-clear'>
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
                                                <img src='https://upload.qulv.com/release//2018/07/16/11/50/yhywe013.s05.jpg' lazy='y'></img>
                                            </div>
                                            <div className='txtBox'>
                                                <p className='txt3 fn-clear'>
                                                    {/* 豪华房 */}
                                                    <span className='fn-left'>基础房(Standard Room)</span>
                                                </p>
                                                <p className='txt4 fn-clear'>
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
                    <div className='title' name='xc'>
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
                                                <img src='https://upload.qulv.com/release//2018/04/03/17/31/kr5x2rwt.o5y.jpg' alt='岛屿介绍' lazy='y'></img>
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src='https://upload.qulv.com/release//2018/04/03/17/31/5fuqrsbf.fqi.jpg' lazy='y'></img>
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
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104020570_83.jpg" lazy='y' alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104012664_13.jpg" lazy='y' alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2015-03/20150311152149585_89.jpg" lazy='y' alt="沙滩房-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2017-06/20170605174630300_17.jpg" lazy='y' alt="沙滩房-0" />
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
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2017-06/20170605174742505_49.jpg" lazy='y' alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104349258_46.jpeg" lazy='y' alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2014-03/20140327104420617_20.jpg" lazy='y' alt="水上屋-0" />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//Qulv.ERP.Web.FileCategory/2015-03/20150311153223437_103.jpg" lazy='y' alt="水上屋-0" />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/33/oyi35a53.4hc.jpg" alt="Riveli Restaurant-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/48/winss415.lzf.jpg" alt="The Velaavani Bar-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/hbnwgre5.tx4.jpg" alt="SPA-0" lazy='y' />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/jmvx1mud.44h.jpg" alt="SPA-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/ih4xwm3e.skz.jpg" alt="潜水-0" lazy='y' />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/3btpk25x.0ku.jpg" alt="潜水-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/rayacibr.t3p.jpg" alt="出海垂钓-0" lazy='y' />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/49/guec2j4d.rox.jpg" alt="出海垂钓-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/njza0hf0.bkb.jpg" alt="出海看海豚-0" lazy='y' />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/r0kra0z5.nej.jpg" alt="出海看海豚-0" lazy='y' />
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
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/knlk3ttj.mty.jpg" alt="健身房-0" lazy='y' />
                                                <p></p>
                                            </li>
                                            <li>
                                                <img src="https://upload.qulv.com/release//2018/04/03/17/50/ghgzljhx.yly.jpg" alt="健身房-0" lazy='y' />
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
                        <div className='fadeIn fadeInBtn' style={{ display: 'none' }} onClick={this.fade.bind(this, 5)}>
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
                        <div className='fadeIn fadeInBtn' style={{ display: 'none' }}>
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
                            <p style={{ margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif', color: '#666666' }}>1、马代最受欢迎的优质小岛之一，房间有看海玻璃茶几观看海底鱼类，法国人经营的小岛处处有浪漫。</p>
                            <p style={{ margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif', color: '#666666' }}>2、沙滩细白，优质浮潜环境深受欧美人及浮潜发烧友的喜爱。沙滩出去2米即可享受珊瑚海底世界；大面积的珊瑚礁围绕着岛屿。提供免费浮潜用具。</p>
                            <p style={{ margin: '0px', padding: '0px', border: '0px', fontVariantNumeric: 'inherit', fontStretch: 'inherit', lineHeight: 'inherit', fontFamily: 'Microsoft Yahei arial verdana sans-serif', color: '#666666' }}>3、性价比高，价格亲民，活动丰富且自费项目价格实惠。</p>
                        </div>
                    </div>
                </div>
                <ul className='costImgList'>
                    <li>
                        <img src='https://upload.qulv.com/release//2018/04/27/11/05/dvhruli0.xbc.jpg' lazy='y'></img>
                    </li>
                    <li>
                        <img src='https://upload.qulv.com/release//2018/04/27/11/05/c0bjp033.w1b.jpg' lazy='y'></img>
                    </li>
                    <li>
                        <img src='https://upload.qulv.com/release//2018/04/27/11/05/11ktupns.ax2.jpg' lazy='y'></img>
                    </li>
                    <li>
                        <img src='https://upload.qulv.com/release//2018/04/27/11/05/x1a5cx2h.gow.jpg' lazy='y'></img>
                    </li>
                    <li>
                        <img src='https://upload.qulv.com/release//2018/04/27/11/05/v3hqpquu.qer.jpg' lazy='y'></img>
                    </li>
                </ul>
                <div className='consult'>
                    <div className='consultMes'>
                        <img src='https://static.qtour.com/images/icon-service.9b68a23.png'></img>
                        <p>
                            <span>旅游顾问</span>
                            <span>了解行程，住宿，预定等信息，请咨询顾问</span>
                        </p>
                    </div>
                    <span className='callKF'>资讯顾问</span>
                </div>
                <div className='cost topItem' name='fy'>
                    <h2>费用说明</h2>
                    <div className='costMain'>
                        <div className='costList'>
                            <p>
                                <i className='icon icon-tip'></i>
                                <span>费用包含</span>
                            </p>
                            <p style={{ fontFamily: '微软雅黑' }}>1. 机票:套餐所对应的国内出发口岸往返马尔代夫经济舱机票含税，机票一经开出，不得更改、不得签转、不得退票。（相对应的航空公司参考航班信息）</p>
                            <p>2. 住宿:酒店套餐中包含的四晚度假岛屿住宿(2人1房计，如有双房型混住，房型入住先后顺序最终以酒店安排为准）</p>
                            <p>3. 含餐:酒店套餐所含餐型（如因接送或其他原因造成无法用餐，餐费不退）</p>
                            <p>4. 上岛交通:酒店套餐中包含的马累机场至度假岛屿往返交通费</p>
                            <p><span style={{ fontSize: '12px', fontFamily: '微软雅黑 sans-serif' }}>5. 7</span><span style={{ fontSize: '12px', fontFamily: '微软雅黑 sans-serif' }}>天5晚行程:含第一晚或最后一晚入住马累Qinn 或同级三星酒店(含早餐)</span></p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className='costMain'>
                        <div className="costList">
                            <p><i className="icon icon-tip"></i><span>费用不包含</span></p>
                            <p style={{ fontFamily: '微软雅黑' }}>1.不可抗力：因交通延阻、罢工、天气、飞机、机器故障、航班取消或更改时间等不可抗力原因所导致的额外费用</p>
                            <p>2.个人消费：酒店内洗衣、理发、电话、传真、收费电视、饮品、烟酒等个人消费，当地参加的自费项目以及 “费用包含”中不包含的其它项目</p>
                            <p>3.行李费：出入境个人物品海关征税，超重行李的托运费、保管费</p>
                            <p>4.单房差：第三成人价格和单房差请报名时联系客服咨询</p>
                            <p>5.儿童：马尔代夫一般2-12岁属于小童，儿童报名详情和价格请联系客服咨询</p>
                            <p>6.其他：旅客从出发地往返出境口岸机场的交通费用；升级舱位、升级酒店、升级房型等产生的差价</p>
                        </div>
                    </div>
                </div>
                <div className='attention'>
                    <ul className='attentionList' id='tipList'>
                        <li>
                            <h2>预订须知</h2><i className="icon icon-arrowR"></i>
                        </li>
                        <li>
                            <h2>特殊限制</h2><i className="icon icon-arrowR"></i>
                        </li>
                        <li>
                            <h2>安全提示</h2><i className="icon icon-arrowR"></i>
                        </li>
                        <li>
                            <h2>签约方式</h2><i className="icon icon-arrowR"></i>
                        </li>
                    </ul>
                </div>
                <div className="moyoffWin">
                    <div className="gallery" onClick={this.closeMoyo.bind(this, false)}></div>
                    <div className="moyoffMain">
                        <p>
                            <span>满减活动</span>
                            <i className="icon icon-close closeBtn" onClick={this.closeMoyo.bind(this, false)}></i>
                        </p>
                        <div>
                            <ul id="moyoffList"></ul>
                        </div>
                        <p className="instru">
                            说明：满减活动在时间范围内，跟其他优惠券不冲突
		                </p>
                    </div>
                </div>
                <div className="tip">
                    <i className="icon icon-successTip"></i>
                    <p>领取成功</p>
                </div>
                <div className="discount" id="discountbox">
                    <div className="gallery" onClick={this.discountShow.bind(this, false)}></div>
                    <div className="discountMain">
                        <p><span>优惠券</span><i className="icon icon-close closeBtn" onClick={this.discountShow.bind(this, false)}></i></p>
                        <div id="discountScroller">
                            <div id="discount">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cityCover closeCover" id="cityCover" style={{ display: 'none' }}>
                    <div className="gallery" onClick={this.cityShow.bind(this, false)}></div>
                    <div className="cityCon">
                        <p><span>选择出发城市</span><i className="icon icon-close closeCity" onClick={this.cityShow.bind(this, false)}></i></p>
                        <ul className="cityList" id="cityList">
                            <li data-departure-cityid="ac5d20e9-e404-4be5-9803-47a5e5f51b9f" data-sku-code="L00000204007">
                                <p>广州</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="09daea66-f18e-4acb-adcc-4ab8c5b51a7b" data-sku-code="L00000204018">
                                <p>武汉</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="b61eb09e-4c2a-4ed5-8db0-e046638d0412">
                                <p>郑州</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="3731f9ba-7c35-40a6-b184-312071549e39">
                                <p>南京</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="28088ae7-8ff2-4867-b7ab-6a8f37e0418b" data-sku-code="L00000204001">
                                <p>上海</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="805b06ad-bb60-42d4-b94e-5140b49f9af9" data-sku-code="L00000204009">
                                <p>成都</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="de5626d9-678e-4fed-9fc7-c4e0ba29e1be">
                                <p>天津</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="6a51dbb2-baa9-4a6c-bfd7-c8e5d4d8a5ac">
                                <p>福州</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="75b6fdde-da1a-4549-988d-0a2fac6cce50" data-sku-code="L00000204012">
                                <p>昆明</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="8c513a0d-c27e-4d7f-8986-a25e92a6951c" data-sku-code="L00000204010">
                                <p>重庆</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="831ea106-da45-40e8-b6e9-62f853db5dda" data-sku-code="L00000204017">
                                <p>西安</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="6bf976a1-eba7-435b-92be-b05eb8ace77b" data-sku-code="L00000204013">
                                <p>杭州</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="b1ea06a6-5143-482f-86f9-1c5234172c26" data-sku-code="L00000204005">
                                <p>北京</p>
                                <span>实时询价</span>
                            </li>
                            <li data-departure-cityid="6fcd9501-7793-48eb-8ec2-cabe12e08bf7" className="active" data-sku-code="L00000204006">
                                <p>香港</p>
                                <span>实时询价</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trip;