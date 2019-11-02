import React, { Component } from 'react';
// import { PageHeader, Input, Form, Checkbox, Button, Icon, Layout, List, Typography, Divider } from 'antd';
import axios from 'axios';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Layout,
    PageHeader
} from 'antd';
// import {render} from 'react-dom';
import './Reg.scss';
import { ReactDOM } from 'react-dom'
import Axios from '../../../node_modules/axios';
import { connect } from 'react-redux';
// import 'antd/dist/antd.css';
const { Content } = Layout;
const mapStateToProps = (dispatch) => {
    return dispatch
}
// const mapDispatchToProps = (dispatch)=>{
//     return dispatch
// }
@connect(mapStateToProps)
class Reg extends Component {
    constructor() {
        super();
        // console.log('constructor');
        this.state = {
            username: ''
        }
    }
    goto = (path) => {
        let { history } = this.props;
        history.push(path)
    }
    handleSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log(1)
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                // console.log(values);
                let { username, password } = values;
                let res = await axios.post('http://49.232.154.155:2003/user/reg', {
                    username,
                    password
                })
                console.log(res);
                dispatch({
                    type: 'ADD_USERNAME', payload: { username }
                })
                this.goto('/mine');
                alert("success");

            } else {
                alert("我^%*&%(%^%&(")
            }
        })
    }
    componentDidMount() {
        let bg = document.getElementsByClassName('bg')[0];
        bg.style.height = window.innerHeight + 'px';
    }
    // handleValidator = (rule, val, callback) => {
    //     if (!val) {
    //         callback();
    //     }
    //     let validateResult = checkUsername;  // 自定义规则
    //     if (!validateResult) {
    //         callback('请输入正确的内容！');
    //     }
    //     callback();
    // }
    // checkUsername = async (rule, value, callback) => {

    //     let {data} = await this.$axios.get('http://49.232.154.155:2003/user/check',{
    //       params:{
    //         username
    //       }
    //     })
    //     if(data.code === 0){
    //       callback(new Error("该手机号已注册"));
    //     }else{
    //       callback();
    //     }
    //   };
    render() {
        let { dispatch, history } = this.props;
        const { getFieldDecorator } = this.props.form;
        console.log(this.props);
        return (
            <div className="bg"
            >
                <Layout>

                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        onBack={() => history.go(-1)}
                        title=""
                        subTitle="    注册"
                    />

                    <Content style={{ padding: '0 50px' }}>
                        <Form onSubmit={this.handleSubmit.bind(this, dispatch)}
                            className="login-form">
                            <Form.Item label="账户">
                                {getFieldDecorator('username', {
                                    rules: [
                                        {
                                            max: 11, max: 11, message: ' ', trigger: "blur"
                                        },
                                        { pattern: new RegExp(/^1[3-9]\d{9}$/), message: ' ', trigger: "blur" },


                                    ]

                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}

                            </Form.Item>
                            <Form.Item label="密码">
                                {getFieldDecorator('password', {
                                    rules: [{ required: false, message: '密码输入错误' },
                                    { pattern: new RegExp(/^\S{6,20}$/), message: ' ' }]
                                })(
                                    <Input type="password"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Password"
                                        type='password'
                                    />
                                )
                                }

                            </Form.Item>
                            {/* <Checkbox>我已阅读并同意趣旅<Button type="link" className="dlbtn" style={{padding:'0'}}>
                                《用户注册协议》
                            </Button>
                            </Checkbox> */}
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>我已阅读并同意趣旅</Checkbox>)}
                                <a href='https://m.qulv.com/account/xieyi' style={{color:'#fff'}}>《用户注册协议》</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%', background: '#D8972F', height: '40px', border: 'none' }}>
                                    注册并立即登录
                                </Button>
                            </Form.Item>

                        </Form>
                        {/* <div>
                            <div className="box">
                                <Form.Item label="Name" style={{border: '0 0 1px 0'}}>
                                    {(<Input placeholder="Please input your name" />)}
                                </Form.Item>
                            </div>

                            <div >
                                <Form.Item label="Nickname" style={{float:'left'}}>
                                    <Input placeholder="Please input your nickname" />
                                </Form.Item>
                            </div>

                            <div className="box">
                                <Form.Item >
                                    <Checkbox checked={this.state.checkNick} onChange={this.handleChange}>
                                        Nickname is required
                                </Checkbox>
                                </Form.Item>
                            </div>

                            <div>
                                <Form.Item >
                                    <Button type="primary" onClick={this.check}>
                                        Check
                                </Button>
                                </Form.Item>
                            </div>

                        </div> */}
                    </Content>

                </Layout>


            </div>
        )
    }
}
const WrappedNormalRegnForm = Form.create({ name: 'normal_login' })(Reg);
export default WrappedNormalRegnForm;