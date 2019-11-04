import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Line from '../Line/Line.jsx';
import { Carousel } from 'antd';
import ImgLazy from './lazyImg.js';

import './Home.scss'
class Home extends Component {
    state = {
        navdata: [
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135118207_87.png',
                name: '马尔代夫'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135135004_105.png',
                name: '毛里求斯'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135304600_70.png0',
                name: '斯里兰卡'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135235427_51.png',
                name: '塞班'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-06/20170629093908502_37.png',
                name: '巴厘岛'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135318178_20.png',
                name: "泰国"
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-12/20171215160459181_24.png',
                name: '芽庄'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135248084_85.png',
                name: '沙巴'
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/04/20190425154244600_15.png',
                name: "疗养圣地"
            },
            {
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135205333_17.png',
                name: '全部海岛'
            }
        ],
        limitList: [
            {
                title: '马尔代夫',
                id: 24006,
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/10/20181024174650628_29.jpg',

            }, {
                title: '塞班',
                id: 346001,
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180508160214065_29.jpg'
            }, {
                title: "毛利求斯",
                id: 2636010,
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-02/20180222112534844_54.jpg'
            }, {
                title: '芽庄',
                id: 107001,
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/07/20180713095303480_108.jpg'
            },
            {
                title: '斐济',
                id: 535004,
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/02/20190219191635173_93.jpg'
            }
        ],
        recommendList: [
            {
                id: 3084002,
                title: '<深圳出发惠州巽寮湾 养生度假6天5晚>疗养休闲',
                imgUrl: 'https://upload.qulv.com/release//2019/04/22/18/54/hvzdhzs3.rym.jpg',
                price: '￥起'
            }, {
                id: 3083001,
                title: '青岛红树林度假世界9天8晚游>疗养休闲',
                imgUrl: 'https://upload.qulv.com/release//2019/04/22/18/11/rvcxgk52.h1t.jpg',
                price: '￥起'
            }, {
                id: 3082002,
                title: '<无锡太湖疗养6天5晚游>疗养休闲',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/04/20190428120020384_76.jpg',
                price: '￥起'
            },
            {
                id: 204006,
                title: '【全国出发】马尔代夫蓝色美人蕉岛7天5晚自由行 浮潜小岛，性价比高，原生态设计',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/06/20180628152621888_12.jpg',
                price: '实时询价'
            },
            {
                id: 259044,
                title: '【全国出发】马尔代夫伊露岛 7天5晚自由行（15岁以下儿童免食宿）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/06/20180628153812314_72.jpg',
                price: '实施询价'
            },
            {
                id: 1938004,
                title: '【全国出发】马尔代夫柏悅哈达哈岛7天5晚自由行 珊瑚丰富 浮潜A级 顶级SPA',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/10/20181019152622365_65.png',
                price: '实时询价'
            },
            {
                id: 346001,
                title: '【特价爆款】香港直飞--塞班岛5天3晚自由行（赠送接送机+北部环岛游）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180508212024598_84.jpg',
                price: '实时询价'
            },
            {
                id: 343001,
                title: '【香港直飞】塞班岛6天4晚 赠北部环岛+军舰岛+市区午餐+五星酒店定制晚餐',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180508211156266_90.jpg',
                price: '实时询价'
            },
            {
                id: 451006,
                title: '【上海直飞】<塞班岛5天4晚游>北部环岛+军舰岛+1个市区午餐【ZZ】',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180508212137710_85.jpg',
                price: '实时询价'
            },
            {
                id: 2636010,
                title: '【香港直飞】毛里求斯-克里奥尔 7天5晚自由行（含早晚餐+免费出海垂钓）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509142002799_70.jpg',
                price: '实时询价'
            },
            {
                id: 2636014,
                title: '【香港直飞】毛里求斯-长滩酒店7天5晚自由行（豪华五星  适合情侣、家庭度假）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509145104616_18.jpg',
                price: '实时询价'
            },
            {
                id: 2636017,
                title: '香港直飞】毛里求斯-康斯丹贝尔玛尔酒店7天5晚自由行（含早晚餐+18洞高尔夫球场）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509150109831_80.jpg',
                price: '实时询价'
            },
            {
                id: 2650010,
                title: '【上海直飞】毛里求斯-克里奥尔酒店7天5晚自由行（含早晚餐+5个酒店特色美食）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509151203375_67.jpg',
                price: '实时询价'
            },
            {
                id: 2650017,
                title: '【上海直飞】毛里求斯-康贝酒店7天5晚自由行（含早晚餐+中文管家服务）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/07/20180704114835817_92.jpg',
                price: '实时询价'
            },
            {
                id: 2650014,
                title: '【上海直飞】毛里求斯-长滩酒店7天5晚自由行（1.6公里长的迷人沙滩）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/07/20180704113606826_52.jpg',
                price: '实时询价'
            },
            {
                id: 186001,
                title: '【最芽庄】深圳直飞-芽庄4天3晚自由行 当地四星（含接送机早餐）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/06/20180612174324240_60.jpg',
                price: '实时询价'
            },
            {
                id: 1550001,
                title: '【最芽庄】深圳直飞-芽庄5天4晚  2晚国际五星+2晚珍珠自由行',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509154506120_62.jpg',
                price: '实时询价'
            },
            {
                id: 357001,
                title: '【最芽庄】广州直飞-芽庄5天4晚自由行 海边五星酒店（含接送机早餐）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-11/20171129115920857_27.jpg',
                price: '实时询价'
            },
            {
                id: 1551001,
                title: '【最芽庄】广州直飞-芽庄5天4晚 2晚国际五星+2晚珍珠自由行（含接送机）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-11/20171129114511429_107.jpg',
                price: '实时询价'
            },
            {
                id: 111001,
                title: '【最岘港】深圳直飞-岘港4天3晚游四星酒店（品质游）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509163150183_24.jpg',
                price: '实时询价'
            },
            {
                id: 593001,
                title: '【最岘港】深圳直飞-岘港4天3晚自由行 当地五星酒店',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180509163336514_80.jpg',
                price: '实时询价'
            },
            {
                id: 1376008,
                title: '【广州直飞】迪拜6天4晚（迪拜+阿布扎比，豪华五星航空+刺激沙漠冲沙+浪漫迪拜音乐喷泉',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-05/20180510155927346_69.jpg',
                price: '实时询价'
            },
            {
                id: 1383002,
                title: '【上海直飞】迪拜5天4晚（迪拜+阿布扎比，豪华五星航空+刺激沙漠冲沙+浪漫迪拜音乐喷泉）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/12/20181212183014214_91.jpg',
                price: '实时询价'
            },
            {
                id: 2674003,
                title: '【北京直飞】迪拜6天4晚（迪拜+阿布扎比，豪华五星航空+刺激沙漠冲沙+浪漫迪拜音乐喷泉）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/12/20181212183025209_23.jpg',
                price: '实时询价'
            },
            {
                id: 1411006,
                title: '【广州出发】土耳其12天9晚（五星航空 +唯美热气球+洞穴酒店+棉花堡温泉酒店）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/07/20180704151411560_20.jpg',
                price: '实时询价'
            },
            {
                id: 2367006,
                title: '【北京出发】土耳其11天8晚（五星航空 +伊斯坦布尔五星就+棉花堡温泉酒店，可预订热气球）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/12/20181213145817187_31.jpg',
                price: '实时询价'
            },
            {
                id: 2487003,
                title: '【上海出发】土耳其11天8晚（五星航空 +伊斯坦布尔五星就+棉花堡温泉酒店，可预订热气球）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/12/20181213145825477_74.jpg',
                price: '实时询价'
            },
            {
                id: 2422001,
                title: '【深起港止】土耳其12天9晚（五星航空 +伊斯坦布尔五星就+棉花堡温泉酒店，可预订热气球）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/12/20181213145835148_84.jpg',
                price: '实时询价'
            },
            {
                id: 535004,
                title: '【香港直飞】斐济8天6晚自由行（6晚威斯汀/喜来登）',
                imgUrl: 'https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/06/20180613093001625_18.jpg',
                price: '实时询价'
            }
        ]
    }
    componentDidMount() {
        ImgLazy();
        this.tipShow();

        // 首页头部 显示隐藏
        let toLogin = document.getElementsByClassName('toLogin')[0];
        let H = toLogin.offsetHeight;
        let topHeader = document.getElementsByClassName('topheader')[0];
        let hdWrap = document.getElementsByClassName('hd-wrap')[0];
        let slideTop = document.getElementById('slide_top')
        window.onscroll = function () {
            if (window.scrollY >= H) {
                toLogin.style.display = 'none';
                topHeader.style.display = 'none';
                hdWrap.classList.add('curr');
            }
            else {
                
                toLogin.style.display = 'block'
                topHeader.style.display = 'block';
                hdWrap.classList.remove('curr');
            }


            if (window.scrollY > 800) {
                slideTop.style.display = 'block';
            }else{
                slideTop.style.display = 'none';
            }
        }
    }
    tipShow = () => {
        let tipsHot = document.getElementById('tipsHot');
        let num = 0;
        let timer = setInterval(() => {
            num++;
            if (num >= 2) {
                num = 0
                tipsHot.style.transition = '';

            }
            tipsHot.style.marginTop = -num * 0.9 + 'rem';

        }, 1500)

    }
    Totop = () => {
        let timer = setInterval(() => document.documentElement.scrollTop <= 0 ? clearInterval(timer) : window.scrollTo(0, document.documentElement.scrollTop - 100), 17)

    }
    // scoller = (e)=>{
    //     console.log(1)
    //     let limtedList = document.getElementById('scroller');
    //     // limtedList.onmousedown = function(e){

    //     //     var diffx = event.clienx - limtedList.offsetLeft;
    //     //     console.log(1)
    //         document.onmousemove = function (e){
    //             console.log(1)
    //             // limtedList.style.transform = `translate3d(${e.clientX}px,0px,0px) scale(1)`
    //         }
    //     //     document.onmouseup = function (e){

    //     //     }
    //     // }


    // }
    // scollerMove = (e)=>{
    //     console.log(e.clientX)
    // }
    toTrip = (id)=>{
        let {history} = this.props;
        history.push('/trip/'+ id)
    }
    // 下弹窗的显示隐藏
    pop_show = () => {
        let popModal = document.getElementsByClassName('pop-modal')[0];
        popModal.style.display = 'block';
    }
    cancel_pop = () => {
        let popModal = document.getElementsByClassName('pop-modal')[0];
        popModal.style.display = 'none';
    }
    //顶部的显示隐藏
    closeTop = () => {
        let toLogin = document.getElementsByClassName('toLogin')[0];
        let topHeader = document.getElementsByClassName('topheader')[0];
        let hdWrap = document.getElementsByClassName('hd-wrap')[0];
        toLogin.style.display = 'none';
        topHeader.style.display = 'none';
        hdWrap.classList.add('curr')
    }
    render() {
        let { navdata, limitList, recommendList } = this.state;
        return (
            <div className='Home_container'>
                <div className='topheader' style={{ display: 'block' }}></div>
                <div className='fixedTop'>
                    <div className='toLogin' style={{ display: 'block' }}>
                        <i className='icon-close' onClick={this.closeTop}></i>
                        <i className='icon-logo-s'></i>
                        <span>注册登录有礼，趣旅会员专享</span>
                        <a className='register'>立即注册</a>
                    </div>
                    <div className='header'>
                        <div className='hd-wrap'>
                            <a className='place-wrap'>
                                <span className='city-name' id='cityName'>广州</span>
                                <span className='ic-choice-city'></span>
                            </a>
                            <a className='search-wrap2' id='txtClass'>
                                <i className='icon ic-sl-place'></i>
                                <input type='text' value='请输入目的地'></input>
                            </a>
                            <a className='msg-wrap' onClick={this.pop_show}>
                                <i className='icon-msg'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='wrap'>
                    <div className='banner-box swiper-container swiper-container-horizontal'>

                        <Carousel autoplay>
                            <div>
                                <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/10/20191016114750394_42.jpg'></img>
                            </div>
                            <div>
                                <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/09/20180925101939838_82.jpg'></img>
                            </div>
                            <div>
                                <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/09/20180930175337562_99.jpg'></img>
                            </div>
                            <div>
                                <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018-03/20180319145401679_51.jpg'></img>
                            </div>
                        </Carousel>
                    </div>
                    <div className='nav-wrap' id='navBox'>
                        {
                            navdata.map(item => {
                                return (
                                    <a>
                                        <img src={item.imgUrl} alt={item.name} lazy='y'></img>
                                        <p className='nav-name' >{item.name}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className='tips-wrap' id='tips'>
                        <div className='tips-tit'>
                            <img src='https://pic.qtour.com/m/qulvindex/images/hot.png'></img>
                        </div>
                        <div className='tips-txt'>
                            <div id='tipsHot'>
                                <a href='javascript:void(0)'>新注册用户，免费赠送“100元”优惠券</a>
                                <a href='javascript:void(0)'>新注册用户，免费赠送“100元”优惠券</a>
                            </div>
                        </div>
                    </div>
                    <div className='limited-wrap' id='limited'>
                        <div className='item-name'>
                            <img src='https://upload.qtour.com/MContent/mindex/images/title/title01.png'></img>
                        </div>
                        <div className='limited-list' id='wrapper' >
                            <div className='img-wrap' id='scroller' >
                                <ul id='thelist' style={{ width: '100%' }}>
                                    {
                                        limitList.map(item => {
                                            return (
                                                <li onClick={this.toTrip.bind(this,item.id)}>
                                                    <a>
                                                        <div className='tips-tit'>{item.title}</div>
                                                        <div className='tips-img'>
                                                            <img src={item.imgUrl} alt={item.title}></img>
                                                        </div>
                                                        <div className='price-mark'>
                                                            <p className='price'>实时询价</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <ul className='deal-list'>
                            <li>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/02/20190213163316628_37.png'></img>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2018/08/20180830165257171_57.png'></img>
                                </a>

                            </li>
                            <li>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-07/20170712151457774_10.png'></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='wonderful-wrap'>
                        <div className='item-name'>
                            <img src='https://upload.qtour.com/MContent/mindex/images/title/title02.png'></img>
                        </div>
                        <ul className='wonderful-list fn-clear'>
                            <li className='br bb'>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135504056_97.png' alt='当地玩乐'></img>
                                    <p>当地玩乐</p>
                                </a>
                            </li>
                            <li className='br bb'>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135549479_58.png' alt='婚纱摄影'></img>
                                    <p>婚纱摄影</p>
                                </a>
                            </li>
                            <li className='br bb'>
                                <a>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170502135519557_57.png' alt='定制游'></img>
                                    <p>定制游</p>
                                </a>
                            </li>
                        </ul>
                        <ul className='guide-list fn-clear'>
                            <li>
                                <a href='https://m.qulv.com/Travel/TravelList'>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-07/20170712151256145_107.png' alt='游记攻略'></img>
                                </a>
                            </li>
                            <li>
                                <a href='https://m.qulv.com/Wenda/Index'>
                                    <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-07/20170712155145251_79.png' alt='旅游问答'></img>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <a href='https://m.qulv.com/special/salesProduct.html'>
                            <img src='https://pic.qtour.com/Upload/QulvCom/MobileDetail/2019/01/20190116142543695_99.jpg'></img>
                        </a>
                    </div>
                    {/* 为你推荐 */}
                    <div className='recommended-wrap'>
                        <div className='item-name'>
                            <img src='https://upload.qtour.com/MContent/mindex/images/title/title03.png'></img>
                        </div>
                        <div className='pd-list-box'>
                            <ul className='fn-clear pd-list'>
                                {recommendList.map(item => {
                                    return (
                                        <li key={item.id} onClick={this.toTrip.bind(this,item.id)}>
                                            <a>
                                                <div className='img-box' data-id={item.id}>
                                                    <img lazy='y' src={item.imgUrl}></img>
                                                    <p className='pd-price fn-clear'>
                                                        {item.price == '￥起' ?
                                                            <span className='present-price'>
                                                                <em>￥</em>
                                                                <b></b>
                                                                <em>起</em>
                                                            </span> :
                                                            <span className='present-price'>
                                                                <b>{item.price}</b>
                                                            </span>
                                                        }

                                                    </p>
                                                </div>
                                                <div className='txt-box'>
                                                    <p className='pd-title'>
                                                        {item.title}
                                                    </p>
                                                    <p className='label-list'></p>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pop-modal'>
                    <div className='gallery' onClick={this.cancel_pop}></div>
                    <div className='pop-modal-bd'>
                        <ul className='pop-modal-ul'>
                            <li>
                                <i className='icon-qulv'></i>
                                <p className='txt1'>资讯客服</p>
                                <p className='txt2'>了解更多产品信息，请咨询趣旅客服</p>
                            </li>
                            <li>
                                <a href='tel:4006861799' id='telConsult'>
                                    <span>电话资讯</span>
                                    <i className='icon-tel'></i>
                                </a>
                            </li>
                            <li>
                                <a href='javascript:viod(0);'>
                                    <span>在线客服</span>
                                    <i className='icon-consult'></i>
                                </a>
                            </li>
                        </ul>
                        <button className='cancel-btn' onClick={this.cancel_pop}>取消</button>
                    </div>
                </div>
                <div onClick={this.Totop} className='visibile' draggable={true} id='slide_top'>
                    <span>
                        <img src='https://m.qulv.com/Files/images/scrolltotop.png' alt='回到顶部'></img>
                    </span>
                </div>
            </div>
        )
    }
}
export default Home;

