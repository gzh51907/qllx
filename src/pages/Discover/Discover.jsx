import React, { Component } from 'react';
import { Carousel } from 'antd';
import { withRouter, Route } from 'react-router-dom'
import axios from 'axios'
import './Discover.scss'
import $ from 'jquery'
import {connect} from 'react-redux';
// const { Header, Footer, Content } = Layout;
const mapStateToProps =(dispatch)=>{
    return dispatch

}
@connect(mapStateToProps)

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
        {
            // 一开始没有滚动的时候，出现在视窗中的图片也会加载
            start();

            // 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
            var clock; //函数节流
            $(window).on('scroll',function(){
                if(clock){
                    clearTimeout(clock);
                }
                clock = setTimeout(function(){
                    start()
                },200)
            })
            
            function start(){
                $('.show img').not('[data-isLoading]').each(function () {
                    if (isShow($(this))) {
                        loadImg($(this));
                    }
                })
            }


            // 判断图片是否出现在视窗的函数
            function isShow($node){
                return $node.offset().top <= $(window).height()+$(window).scrollTop();
            }

            // 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
            function loadImg($img){
                    $img.attr('src', $img.attr('data-src'));

                    // 已经加载的图片，我给它设置一个属性，值为1，作为标识
                    // 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
                    $img.attr('data-isLoading',1);
            }

        }
    

    }

    shouldComponentUpdate(){
        let {username,history} = this.props;

        // console.log('kankanusername，看',username[0])
        console.log('kankanusername，看',username[0])
        if( username[0] == undefined){
            history.push('/login')
        }else{
           return true;
        }
        
    }
    render() {
        console.log(this.props)
        let { history } = this.props
        let { banner, tuijian, remendata } = this.state
        return (
        <div id='discover'>
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
                                        <div key={item.VideoID}>
                                            <a className="swiper-slide" onClick={() => {
                                            history.push(`/discover/videodetail/${item.VideoID}`)
                                        }} >
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
                                    <li key={item.VideoID}>
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
                                    <li className="show" key={item.VideoID}>
                                        <a onClick={() => {
                                            history.push(`/discover/videodetail/${item.VideoID}`)
                                        }}>
                                            <img src="" data-src={item.PicLink} alt="" />
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