import React, { Component } from 'react';
import './Message.scss';
class Message extends Component {
    state = {
        contactList :[
            {
                p: '自由行问题',
                bcPosition: '-0.23rem -1.79rem'
            },
            {
                p: '跟团游问题',
                bcPosition: '-0.27rem -2.56rem'
            },
            {
                p: '机票相关',
                bcPosition: '-0.17rem -3.24rem'
            },
            {
                p: '路线预定',
                bcPosition: '-0.22rem -5.62rem'
            },
            {
                p: '支付相关',
                bcPosition: '-0.2rem -3.96rem'
            },
            {
                p: '订单相关',
                bcPosition: '-0.22rem -4.77rem'
            },
            {
                p: '路线行程',
                bcPosition: '-0.23rem -6.32rem'
            },
            {
                p: '酒店住宿',
                bcPosition: '-0.19rem -7.11rem'
            },
            {
                p: '导游领队',
                bcPosition: '-0.21rem -7.85rem'
            }
        ]
    }
    render() {
        let {contactList} = this.state
        return (
            <div className='Message'>
                <header>
                    <div className='hd-content'>
                        <div className='hd-tit'>咨询客服</div>
                    </div>
                </header>
                <div className='wrap pd-88'>
                    <div className="contact-top">
                        <ul>
                            <li className="tel">
                                <span><a href="tel:4006861799">
                                    <b className="c-ico"></b>
                                </a></span>
                                <p>电话客服</p>
                            </li>
                            <li className="online">
                                <span><a href="https://m.qulv.com/consult/">
                                    <b className="c-ico"></b>
                                    <label>推荐</label>
                                </a></span>
                                <p>在线客服</p>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-list">
                        <h4 className="title">常见问题</h4>
                        <ul>
                            {
                                contactList.map(item=>{
                                    return  <li className="li1" key={item.p}>
                                                <a href="https://m.qulv.com/consult/">
                                                <b className="c-ico" style={{backgroundPosition:item.bcPosition}}></b>
                                                <p>{item.p}</p>
                                                </a>
                                            </li>
                                })
                            }
                           
                            {/* <li className="li2"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>跟团游问题</p>
                            </a></li>
                            <li className="li3"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>机票相关</p>
                            </a></li>
                            <li className="li4"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>线路预定</p>
                            </a></li>
                            <li className="li5"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>支付相关</p>
                            </a></li>
                            <li className="li6"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>订单相关</p>
                            </a></li>
                            <li className="li7"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>线路行程</p>
                            </a></li>
                            <li className="li8"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>酒店住宿</p>
                            </a></li>
                            <li className="li9"><a href="javascript:void(0)" onclick="NTKF.im_openInPageChat('kf_9346_1468573222777');return false;">
                                <b className="c-ico"></b>
                                <p>导游领队</p>
                            </a></li> */}
                        </ul>
                    </div>
                    <h4 className='contact-foot'>
                        <a href='https://m.qulv.com/consult/'>意见反馈</a>
                    </h4>
                </div>
            </div>
        )
    }
}
export default Message;
