import React, { Component } from 'react';
import { PageHeader, Input, Form, Checkbox, Button, Icon, Layout } from 'antd';
// import {render} from 'react-dom';
import {ReactDOM} from 'react-dom'
import Api from '../../Api';
import axios from 'axios'
import store from '@/store';
import {connect} from 'react-redux';
import './Login.scss';
import {withRouter} from 'react-router-dom'
const { Header, Footer, Content } = Layout;
const mapStateToProps =(dispatch)=>{
    return dispatch

}
@connect(mapStateToProps)
@withRouter
// store.subscribe(()=>{
//     console.log('subscribe:',store.getState())
// })


class Login extends Component {
    constructor() {
        super();
        // console.log('constructor');
        this.state = {
            username:''
        }
        // console.log('props:',this.props);
    }

    goto = (path)=>{
        let {history,match} = this.props;
        
        history.push(path)
    }
     handleSubmit =  (dispatch,e) =>{
        e.preventDefault();
         this.props.form.validateFields( async (err,values)=>{
            if(!err){
                console.log(values);//拿到了账号密码，发送请求到数据库
                let { username, password } = values;
                // Login = async (username,password)=>{
                //     let {data} = await Api.login({
                //         username,
                //         password
                //     })
                //     console.log(data);
                // }
                let res = await axios.get('http://49.232.154.155:2003/user/login',{
                    params:{
                        username,
                        password
                    }
                })
                // console.log(res);
                let {data} = res;
                let {msg} = data;
                if(msg == 'fail'){
                    alert("用户名或密码不正确");
                }else {
                    // console.log(2)
                    dispatch({type:'ADD_USERNAME',payload:{username}
                        })
                        // let state = store.getState();
                        // console.log('state:',state);
                    this.props.history.go(-1)
                    alert("success");
                }

            }
        })
    }
    componentDidMount (){
        let Login_cont = document.getElementById('Login_cont');
    
        Login_cont.style.height = window.innerHeight + 'px';
        console.log(Login_cont)
    }
    render() {
        // console.log('1',this.props)
        let {dispatch,history}  = this.props;
        // console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        // <WrappedNormalLoginForm />
        return (
            <div id='Login_cont'>

                <Layout>

                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        onBack={() => history.go(-1)}
                        title=""
                        subTitle="登录"
                    />

                    <Content style={{ padding: '0 50px' }}>
                        <Form onSubmit={this.handleSubmit.bind(this,dispatch)} className="login-form">
                            <Form.Item label="账户">
                                {getFieldDecorator('username',{
                                    rules:[{required:false,message:'账号输入错误',trigger: "blur"},{pattern:new RegExp(/^1[3-9]\d{9}$/) ,message:' '}]
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username" size='large'
                                />,
                                )}
                                
                            </Form.Item>
                            <Form.Item label="密码">
                                {getFieldDecorator('password',{
                                    rules:[
                                        {required:false,message:'密码输入错误'},
                                        {pattern:new RegExp(/^\S{6,20}$/) ,message:' '}
                                    ]
                                    
                                })(
                                    <Input type="password"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Password"
                                    size='large'
                                />,
                                    )
                                }
                                
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%',background: '#D8972F',height:'40px', border:'none'}}  >
                                    登录
                                </Button>
                                <a className="login-form-forgot" href="" style={{ float: 'right' }}>
                                    忘记密码？
                                </a>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" shape="round" style={{ width: '40%', margin: 'auto',display: 'block', background: '#D8E8F8',color: '#000',height: '40px',width: '180px' }}
                                onClick={this.goto.bind(this,'/reg')} > 立即注册</Button>
                            </Form.Item>
                        </Form>

                    </Content>

                </Layout>


            </div>
        )
        
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;