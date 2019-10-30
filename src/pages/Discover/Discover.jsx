import React, { Component } from 'react';
import { Carousel } from 'antd';
import { withRouter, Route } from 'react-router-dom'
import axios from 'axios'
import './Discover.scss'
@withRouter
class Discover extends Component {
    // async componentDidMount (){
    //     //发请求
    //     await axios.get('localhost:3000/discover')
    // }
    state = {
        menu: [{
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160722113014184_49.jpg',
            title: '安利巴厘岛旅游'
        }, {
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723151504029_62.jpg',
            title: '美国关岛观光局Visit Guam'
        }, {
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723142337103_53.jpg',
            title: '马来西亚 _璀璨沙巴'
        }, {
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2016-04/20160404125904589_21.jpeg',
            title: '跟着小画去旅行之斯里兰卡'
        }, {
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160715115439228_33.jpg',
            title: '日本——大阪'
        }, {
            imgurl: 'https://pic.qtour.com/Upload/QulvCom/Video/2017-07/20170726172254325_70.png',
            title: '毛里求斯宣传片（二）'
        }]
    }
    render() {
        let { history } = this.props
        let { menu } = this.state
        console.log(menu)
        return (<div>
            <header>
                <a className="h-left">
                    <b className="c-ico h-ico-back"></b>
                </a>
                <p className="h-title">发现</p>
                <div className='h-right'>
                    <b className="ico-more c-ico"></b>
                </div>
            </header>
            <section className="video-index-container">
                {/* banner图切换 */}
                {/* <section className="v-banner-pic"><div className="swiper-container swiper-container-horizontal" data-swiper="[object Object]">
			<div className="swiper-wrapper">
			
	            <a className="swiper-slide swiper-slide-active" href="video-detail.html?VideoID=a0c2ee0e-b3ff-4794-89a0-4b4bf7de72f7&amp;ProductType=6&amp;ProductID=V20160721183939" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160722113014184_49.jpg" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>安利巴厘岛旅游.</span></p>
	            </a>
	        
	            <a className="swiper-slide swiper-slide-next" href="video-detail.html?VideoID=614a38f7-522f-4ca8-b2f2-1c4c7b3bda61&amp;ProductType=6&amp;ProductID=V20160721185709" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723151504029_62.jpg" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>美国关岛观光局Visit Guam</span></p>
	            </a>
	        
	            <a className="swiper-slide" href="video-detail.html?VideoID=d46b23af-b22d-4a18-8509-dac080bf7481&amp;ProductType=6&amp;ProductID=V20160723141609" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723142337103_53.jpg" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>马来西亚 _璀璨沙巴</span></p>
	            </a>
	        
	            <a className="swiper-slide" href="video-detail.html?VideoID=5d6140d8-467c-4bcb-9232-1e26ada21e9e&amp;ProductType=6&amp;ProductID=V20160404125049" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-04/20160404125904589_21.jpeg" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>跟着小画去旅行之斯里兰卡</span></p>
	            </a>
	        
	            <a className="swiper-slide" href="video-detail.html?VideoID=a17ed845-6535-46b3-b02c-e7de4a7ebaf0&amp;ProductType=6&amp;ProductID=V20160715114830" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160715115439228_33.jpg" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>日本——大阪</span></p>
	            </a>
	        
	            <a className="swiper-slide" href="video-detail.html?VideoID=c28b5f30-67ef-4dda-987f-8c811cd583d7&amp;ProductType=6&amp;ProductID=V20160721184600" style={{width: 375}}>
	            	<img src="https://pic.qtour.com/Upload/QulvCom/Video/2017-07/20170726172254325_70.png" alt=""/>
	            	<b className="v-ico ico-play-big"></b>
	            	<p><span>毛里求斯宣传片（二）</span></p>
	            </a>
	        
	        </div>
	        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span></div>
        </div>
        </section> */}
                <Carousel >
                    {
                        menu.map(item => {
                            return (
                                <div>
                                    <a className="swiper-slide" href="video-detail.html?VideoID=c28b5f30-67ef-4dda-987f-8c811cd583d7&amp;ProductType=6&amp;ProductID=V20160721184600" >
                                        <img src={item.imgurl} alt="" />
                                        <b className="v-ico ico-play-big"></b>
                                        <p style={{ margin: 0 }}><span>{item.title}</span></p>
                                    </a>
                                </div>
                            )
                        })
                    }


                </Carousel>
                <section className="hot-recommed v-column">
                    <h4 className="c-title">热门推荐</h4>
                    <ul className="h-c-list" style={{ overflow: 'hidden', marginBottom: 0 }}>
                        <li>
                            <a onClick={() => {
                                history.push('/discover/videodetail')
                            }}>
                                <img src="https://pic.qtour.com/Upload/QulvCom/MobileDetail/2016-08/20160830103003671_47.jpg" alt="" />
                                <span>3:38</span>
                            </a>
                            <p style={{ marginBottom: 0 }}>马尔代夫-白金岛视频</p>
                        </li>

                        <li>
                            <a href="video-detail.html?VideoID=a846adae-d8f4-4e21-bb4a-9a901e3dd3cb&amp;ProductType=6&amp;ProductID=V20160721185548">
                                <img src="https://pic.qtour.com/Upload/QulvCom/MobileDetail/2016-08/20160830113536291_82.jpg" alt="" />
                                <span>3:44</span>
                            </a>
                            <p style={{ marginBottom: 0 }}>这就是传说中的塞舌尔群岛</p>
                        </li>

                        <li>
                            <a href="video-detail.html?VideoID=&amp;ProductType=6&amp;ProductID=V20160722094502">
                                <img src="https://pic.qtour.com/Upload/QulvCom/MobileDetail/2017-05/20170509165939697_95.jpg" alt="" />
                                <span></span>
                            </a>
                            <p style={{ marginBottom: 0 }}>说好的旅行嘞_越南芽庄</p>
                        </li>

                        <li>
                            <a href="video-detail.html?VideoID=1bd62d30-3b8f-4e7e-9c19-cbefea063bc2&amp;ProductType=6&amp;ProductID=V20160721184440">
                                <img src="https://pic.qtour.com/Upload/QulvCom/MobileDetail/2016-08/20160830113707466_38.jpg" alt="" />
                                <span>4:28</span>
                            </a>
                            <p style={{ marginBottom: 0 }}>毛里求斯—空中俯瞰毛里求斯</p>
                        </li>
                    </ul>
                </section>
                {/* 热门推荐 */}
                <section className="wonderful-recommed v-column">
                    <h4 className="c-title">精彩推荐</h4>
                    <ul style={{ paddingBottom: 46 }}>
                        <li className="show">
                            <a href="video-detail.html?VideoID=b9a71b6d-f5e2-43ec-abea-e0abaa01d610&amp;ProductType=6&amp;ProductID=V20160721184204">
                                <img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160722113029028_37.jpg" alt="" />
                                <b className="v-ico ico-play-big"></b>
                                <p><span>最专业的旅游宣传片-巴厘岛【高清】</span><i className="time">5:26</i></p>
                            </a>
                        </li>

                    </ul>
                    {/* <p className="check-more">查看更多...</p>  */}
                </section>
            </section>

        </div>)

    }
}
export default Discover