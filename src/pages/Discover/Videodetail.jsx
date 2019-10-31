import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Videodetail.scss'
@withRouter
class Videodetail extends Component{
    componentDidMount (){
        
    }
    state = {

    }
    render (){
        let {history} = this.props
        return (
            <div>
                <header className="video-detail" style={{background:'none'}}>
                    <a onClick={()=>{
                        history.go(-1)
                    }}  className="h-left"><b className="v-ico ico-back"></b></a>
                </header>
                <section className="play-box">
                    <video id="video" autoPlay="autoplay" src="http://cloud.video.taobao.com/play/u/665026784/p/1/e/6/t/1/41612941.mp4" preload="" controls="" webkit-playsinline="" poster="http://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160722113014184_49.jpg"></video>
                </section>
                <section className="video-detail-container">
		<section className="video-bottom-info">
			<p className="left">
				<b className="v-ico ico-message"></b>
				<span><i>0</i>热评</span>
			</p>
			<p className="right">
				<b className="v-ico ico-zan" clickaliketype="1"></b>
				<b className="v-ico ico-zan2" clickaliketype="2"></b>
				{/* <b class="v-ico ico-share-s"></b> */}
			</p>
		</section>

		<section className="video-info"><div className="top">
		<h4>安利巴厘岛旅游.</h4>
		<p><b className="v-ico icon-play-small"></b>778</p>
	</div>
	<div className="content"><p>精心安排全程入住当地五星级酒店，近距离感受海洋气息，让您真正享受浪漫假期。</p></div>
	<p className="more"><b className="c-ico ico-down"></b></p></section>
		
		<section className="recommend-line">
			<h4>推荐线路</h4>
			<ul>
		<li>
            <a href="https://m.qulv.com/Newdetail/Detail/detail.html?id=77420">
			<div className="left">
				<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt=""/>
				<span>跟团游</span>	
			</div>
			<div className="right">
				<p className="title">【超值特价】巴厘岛6天5晚半自由行-经典超值之旅（南京直飞）</p>
				<p className="label" tagiconlist="新品,爆款,热卖,特价"><span>新品</span><span>爆款</span><span>热卖</span><span>特价</span></p>
				<p className="price">
					<span><i>￥</i>2999</span>起
				</p>
				<p className="other">
					
						<span>暂无评价</span>
					
				</p>
			</div>
		    </a>
        </li>
	
		<li><a href="https://m.qulv.com/Newdetail/Detail/detail.html?id=77419">
			<div className="left">
				<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt=""/>
				<span>跟团游</span>	
			</div>
			<div className="right">
				<p className="title">【南京直飞】巴厘岛云端漫步之旅-6天5晚半自由行</p>
				<p className="label" tagiconlist="新品,爆款,热卖,特价"><span>新品</span><span>爆款</span><span>热卖</span><span>特价</span></p>
				<p className="price">
					<span><i>￥</i>9599</span>起
				</p>
				<p className="other">
					
						<span>暂无评价</span>
					
				</p>
			</div>
		</a></li>
	
		<li><a href="https://m.qulv.com/Newdetail/Detail/detail.html?id=77417">
			<div className="left">
				<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt=""/>
				<span>跟团游</span>	
			</div>
			<div className="right">
				<p className="title">【南京直飞】巴厘岛6天5晚半自由行-玩转巴厘全景之旅</p>
				<p className="label" tagiconlist="新品,爆款,热卖,特价"><span>新品</span><span>爆款</span><span>热卖</span><span>特价</span></p>
				<p className="price">
					<span><i>￥</i>3999</span>起
				</p>
				<p className="other">
					
						<span>暂无评价</span>
					
				</p>
			</div>
		</a></li>
	
	<li className="last"><a href="http://m.qulv.com/line/index.html">更多推荐</a></li></ul>
		
		</section>
		{/* 评论 */}
		<section className="comment-list">
			<div className="c-item top">
				<h4>评论(<i>0</i>)</h4>
				<p>
					<img src="../../asset/discoverImg/icon-yonghu.png" alt=""/>
					<a className="right" >已有<i>0</i>条评论,快来评论吧.......</a>
				</p>
			</div>
			<ul></ul>
			<p className="more">更多评论</p>
		</section>
		{/* 热门推荐 */}
		<section className="hot-recommed">
			<h4 className="c-title">热门推荐</h4>
			<ul className="h-c-list">
		<li>
			<a >
				<img src="http://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723153434301_49.jpg" alt=""/>
				<span>1:41</span>
			</a>
			<p>新加坡旅游宣传片</p>
		</li>
	
		<li>
			<a href="video-detail.html?VideoID=614a38f7-522f-4ca8-b2f2-1c4c7b3bda61">
				<img src="http://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723151504029_62.jpg" alt=""/>
				<span>3:26</span>
			</a>
			<p>美国关岛观光局Visit Guam</p>
		</li>
	
		<li>
			<a href="video-detail.html?VideoID=a846adae-d8f4-4e21-bb4a-9a901e3dd3cb">
				<img src="http://pic.qtour.com/Upload/QulvCom/MobileDetail/2016-08/20160830113536291_82.jpg" alt=""/>
				<span>3:44</span>
			</a>
			<p>这就是传说中的塞舌尔群岛</p>
		</li>
	
		<li>
			<a href="video-detail.html?VideoID=3b695e32-22bc-4f1f-94f6-c97bd718645c">
				<img src="http://pic.qtour.com/Upload/QulvCom/Video/2016-07/20160723151554750_51.jpg" alt=""/>
				<span>8:51</span>
			</a>
			<p>冲绳旅游观光 Welcome to Okinawa!!!!</p>
		</li>
	</ul>
		</section>
		<section className="comment-list more-comment" style={{ display: 'none'}}>	
			<div className="c-item top">
				<h4>评论(<i>0</i>)</h4>
				<b className="c-ico ico-close"></b>
				<p>
					<img src="images/icon-yonghu.png" alt=""/>
					<a className="right">已有<i>0</i>条评论,快来评论吧.......</a>
				</p>
                </div>
			<ul></ul>
		</section>
	</section>
            </div>
        )
    }
}

export default Videodetail;