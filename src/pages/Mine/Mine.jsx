import React, { Component } from 'react';
import { Button, Tabs, Row, Col, Pagination } from 'antd';
import Api from '@/Api';
import './Mine.scss';
import store from '@/store';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log('看看mapStateToProps', state.username)
    return {
        username: state.username,

    }
}

@connect(mapStateToProps)
class Mine extends Component {
    state = {
        productid: [],
        name: [],
        piclink: [],
        username: '',
        login: 'login'
        // 商品ID，商品名称和商品图片链接
    }
    async componentDidMount() {
        let data = await Api.get({
            code: 'C20160617173646231426',
            PageSize: '150',
            mType: '54',
            platformType: '4'
        })
        // console.log(data);//q
        let category = data.Data.ConfigDetail
        // console.log(category);//q
        this.setState({
            category
        });
        // let { Data } = data;
        // let { ConfigDetail } = Data
        // console.log(ConfigDetail);

        // 监听store修改，更改state的username的值
        // store.subscribe(() => {
        //     let state = store.getState();
        //     this.setState({
        //         username: state.username
        //     })
        //      console.log('监听state:',state);
        // })

      
    }
    goto = (path) => {
        let { history } = this.props;
        history.push(path)
    }

    logout = () => {
        let { username } = this.props;
        store.dispatch({
            type: 'REMOVE_USERNAME', payload: {
                username
            }
        })
    }
    render() {
        // console.log('看看render的username', this.props.username.username)
        let { username, history } = this.props;
        let { productid, name, piclink, category } = this.state;
        // console.log('看看render的props', this.state)
        return (
            <div className='mine' style={{ background: '#eeeeee' }}>
                <div className="top">
                    <img src="https://m.qulv.com/mine/skin/images/demo/user.png" alt="" className="touxiang" />
                    {
                        username ? '' : <p className="dlzc">
                            <Button type="link" className="dlbtn" onClick={this.goto.bind(this, '/login')
                            }>
                                登录
                    </Button>
                            <Button type="link" className="zcbtn" onClick={this.goto.bind(this, '/reg')}>
                                注册
                    </Button>
                        </p>
                    }

                </div>

                <div className="dingdan">
                    <h2>
                        <span>我的订单</span>
                        <Button type="link" className="ddbtn">
                            查看全部订单>
                        </Button>
                    </h2>
                    <ul className="ddul">
                        <li>
                            <i className="icon icon-toconfirmed"></i>
                            <div>
                                待确认
                            </div>
                        </li>
                        <li><i className="icon icon-topay"></i>
                            <div>
                                待付款
                            </div></li>
                        <li><i className="icon icon-totravel"></i>
                            <div>
                                待出行
                            </div></li>
                        <li><i className="icon icon-toevaluate"></i>
                            <div>
                                待评价
                            </div></li>
                    </ul>
                </div>

                <div className="zichang">
                    <h2>
                        <span>我的资产</span>
                        <Button type="link" className="ddbtn">
                            查看更多>
                        </Button>
                    </h2>
                    <ul className="ddul">
                        <li>
                            0
                            <div>
                                优惠价
                            </div>
                        </li>
                        <li>0
                            <div>
                                超市
                            </div></li>
                        <li>0
                            <div>
                                积分
                            </div></li>
                    </ul>
                </div>

                <div>
                    <ul className="ui-nav">
                        <li>
                            <a href="">
                                <i className="icon icon-notice"></i>
                                <div>
                                    出团通知书
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon icon-housekeeper"></i>
                                <div>
                                    资料管家
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon icon-service-online"></i>
                                <div>
                                    在线客服
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon icon-service-tel"></i>
                                <div>
                                    客服电话
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="ui-nav">
                        <li>
                            <a href="">
                                <i className="icon icon-attention"></i>
                                <div>
                                    我的关注
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon icon-history"></i>
                                <div>
                                    浏览记录
                            </div>
                            </a>
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>

                {
                    username ? <div className="logout" onClick={this.logout}>
                        退出当前账号
                    </div> : ''
                }
                <p className="recommend">
                    <i className="icon icon-arrow-down"></i>
                    <span>为你推荐</span>
                </p>
                <div style={{ padding: '5px' }}>
                    <ul style={{ background: '#fff', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                        {
                            category ?
                                category.map((item,index) => {
                                    return <li key={index} style={{
                                        flex: '1', width: '50%', minwidth: '50%',
                                        maxWidth: '50%', display: 'inline-block',
                                        // marginRight:'10px'
                                    }}>

                                        <img src={item.PicLink} alt="" style={{
                                            width: '3.6rem',
                                            height: '2.4rem',
                                            verticalAlign: 'top',
                                            display: 'inline-block'
                                        }} />
                                        <h4 style={{ maxHeight: '32px', height: '32px', overflow: 'hidden', fontSize: '13px', textOverflow: 'ellipsis', lineHeight: '1.2', margin: '8px'}}>{item.Name}</h4>
                                    </li>
                                })
                                :
                                <></>
                        }
                    </ul>

                </div>
            </div>
        )
    }
}
export default Mine;
