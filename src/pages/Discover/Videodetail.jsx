import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import './Videodetail.scss'
@withRouter
class Videodetail extends Component {
	async componentDidMount() {

		let res = await axios.get('http://49.232.154.155:2003/discover/detail', {
			params: {
				id: this.props.match.params.id
			}
		})

		this.setState({
			data: res.data[0].Data,
			tuijiandata: res.data[0].Data.VideoConfigDetail
		})
	}
	state = {
		data: {},
		tuijiandata: []//推荐数据
	}
	render() {
		let { history } = this.props
		let { data, tuijiandata } = this.state
		return (
			<div>
				<header className="video-detail" style={{ background: 'none' }}>
					<a onClick={() => {
						history.go(-1)
					}} className="h-left"><b className="v-ico ico-back"></b></a>
				</header>
				<section className="play-box">
					<video id="video" autoPlay="autoplay" src={data.VideoLink} preload="" controls="" webkit-playsinline="" poster={data.PicLink}></video>
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
						</p>
					</section>

					<section className="video-info"><div className="top">
						<h4>{data.Name}</h4>
						<p><b className="v-ico icon-play-small"></b>{data.ViewCount}</p>
					</div>
						<div className="content"><p>{data.Desc}</p></div>
						<p className="more"><b className="c-ico ico-down"></b></p></section>

					<section className="recommend-line">
						<h4>推荐线路</h4>
						<ul>
							<li>
								<a href="https://m.qulv.com/Newdetail/Detail/detail.html?id=77420">
									<div className="left">
										<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt="" />
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
									<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt="" />
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
									<img src="http://pic.qtour.com/Upload/travel_line/2018-03/20180315112630994_73.jpg" alt="" />
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

							<li className="last"><a onClick={()=>{
								history.push('/line')
							}}>更多推荐</a></li></ul>

					</section>
					{/* 评论 */}
					<section className="comment-list">
						<div className="c-item top">
							{
								data.CommentList ?
								<div>
								<h4>评论(<i>{data.CommentList.length}</i>)</h4>
								<p>
								<img src="../../asset/discoverImg/icon-yonghu.png" alt="" />
								<a className="right" >已有<i>{data.CommentList.length}</i>条评论,快来评论吧.......</a>
								</p>
								</div>
								:
								<div>
								<h4>评论(<i>(0)</i>)</h4>
								<p>
								<img src="../../asset/discoverImg/icon-yonghu.png" alt="" />
								<a className="right" >已有<i>(0)</i>条评论,快来评论吧.......</a>
								</p>
								</div>
							}
							
						</div>
						<ul>
							{
								data.CommentList ?

								data.CommentList.map(item=>{
									return(
										<li className="c-item" userisclicked="">
											<p className="left"><img src="../../asset/discoverImg/aa.jpg" alt="" /></p>
											<div className="right">
												<p className="name">{item.NickName}</p>
												<p className="time">发表于<span>{item.CreatedOn}</span></p>
												<p className="number">

													<b className="v-ico ico-zan"></b>

													<span>{item.ClickALike}</span>
												</p>
												<p className="text">{item.Desc}</p>
											</div>
										</li>
									)
								})
								:
								<></>
							}
							
						</ul>
						<p className="more">更多评论</p>
					</section>
					{/* 热门推荐 */}
					<section className="hot-recommed">
						<h4 className="c-title">热门推荐</h4>
						<ul className="h-c-list">
							{
								tuijiandata.map(item => {
									return (
										<li>
											<a >
												<img src={item.PicLink} alt="" />
												<span>{item.VideoPlayTime}</span>
											</a>
											<p>{item.Name}</p>
										</li>
									)
								})
							}

						</ul>
					</section>
					
				</section>
			</div>
		)
	}
}

export default Videodetail;