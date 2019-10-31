import React, { Component } from 'react';
import { Carousel } from 'antd';
import { withRouter, Route } from 'react-router-dom'
import axios from 'axios'
import './Discover.scss'
@withRouter
class Discover extends Component {
    state = {
        banner: [],
        remendata: [],
        tuijian: [],
    }
    async componentDidMount() {
        //发请求
        let { data } = await axios.get('http://49.232.154.155:2003/discover/init')
        let banner = data[0].Data.ConfigDetail.slice(0, 6);//轮播图数据
        let remendata = data[0].Data.ConfigDetail.slice(6, 10)
        let tuijian = data[0].Data.ConfigDetail.slice(10)
        console.log(banner)
        this.setState({
            banner,
            remendata,
            tuijian
        })


    }
    render() {
        let { history } = this.props
        let { banner, tuijian, remendata } = this.state
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
	        
	        </div>
	        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span></div>
        </div>
        </section> */}
                {
                  
                        <Carousel autoplay>
                            {
                                banner.map(item => {
                                    return (
                                        <div>
                                            <a className="swiper-slide" href={item.ProductLink} >
                                                <img src={item.PicLink} alt="" />
                                                <b className="v-ico ico-play-big"></b>
                                                <p style={{ margin: 0 }}><span>{item.Name}</span></p>
                                            </a>
                                        </div>
                                        // <div>item</div>
                                    )
                                })
                            }

                        </Carousel>
                    

        }

                <section className="hot-recommed v-column">
                    <h4 className="c-title">热门推荐</h4>
                    <ul className="h-c-list" style={{ overflow: 'hidden', marginBottom: 0 }}>
                        {
                            remendata.map(item=>{
                                return (
                                    <li>
                                        <a onClick={() => {
                                            history.push(`/discover/videodetail/${item.VideoID}`)
                                            // history.push({pathname:'/discover/videodetail',query:{name:'jack',age:18}})
                                        }}>
                                            <img src={item.PicLink} alt="" />
                                            <span>{item.VideoPlayTime}</span>
                                        </a>
                                        <p style={{ marginBottom: 0 }}>{item.Name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                {/* 热门推荐 */}
                <section className="wonderful-recommed v-column">
                    <h4 className="c-title">精彩推荐</h4>
                    <ul style={{ paddingBottom: 46 }}>
                        {
                            tuijian.map(item=>{
                                return (
                                    <li className="show">
                                        <a href={item.ProductLink}>
                                            <img src={item.PicLink} alt="" />
                                            <b className="v-ico ico-play-big"></b>
                                            <p><span>{item.Name}</span><i className="time">{item.VideoPlayTime}</i></p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                        {/* <li className="show">
                            <a href="video-detail.html?VideoID=b9a71b6d-f5e2-43ec-abea-e0abaa01d610&amp;ProductType=6&amp;ProductID=V20160721184204">
                                <img src="https://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160722113029028_37.jpg" alt="" />
                                <b className="v-ico ico-play-big"></b>
                                <p><span>最专业的旅游宣传片-巴厘岛【高清】</span><i className="time">5:26</i></p>
                            </a>
                        </li> */}

                    </ul>
                    {/* <p className="check-more">查看更多...</p>  */}
                </section>
            </section>

        </div>)

    }
}
export default Discover