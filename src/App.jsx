import React from 'react';
import { Menu, Icon } from 'antd';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import './App.css'
import Destination from './pages/Destination/Destination.jsx'
import Message from './pages/Message/Message.jsx'
import Trip from './pages/Trip/Trip.jsx'
import Discover from './pages/Discover/Discover.jsx'
import Mine from './pages/Mine/Mine.jsx'
import Line from './pages/Line/Line.jsx'
import Login from './pages/Login/Login.jsx'
import Reg from './pages/Reg/Reg.jsx'
import Videodetail from './pages/Discover/Videodetail.jsx'
import LineInfor from './pages/LineInfor/LineInfor.jsx'
import LineDetail from './pages/LineDetail/LineDetail.jsx';
import Commit from './pages/Discover/Commit.jsx'
import {connect} from 'react-redux';

// 用户获取state数据
const mapStateToProps =(state)=>{
  // state：store下的state，等效于store.getState()
  console.log('state',state)
  return {
      username:state.username
  };
}
@connect(mapStateToProps)

@withRouter
class App extends React.Component {
    componentDidMount(){
        let {location:{pathname}} = this.props
        this.setState ({
            selected:[pathname]
        })
    }
    constructor() {
        super();
    }
    state = {
        selected: ['/home'],
        menu: [{
            name: 'home',
            path: '/home',
            text: '首页',
            icon: 'home'
        }, {
            name: 'lineinfor',
            path: '/Lineinfor',
            text: '目的地',
            icon: 'global'
        }, {
            name: 'message',
            path: '/message',
            text: '咨询',
            icon: 'message'
        }, {
            name: 'discover',
            path: '/discover',
            text: '发现',
            icon: 'eye'
        }, {
            name: 'mine',
            path: '/mine',
            text: '我的',
            icon: 'user'
        }]
    }
    render() {

        let { selected, menu } = this.state
        let { history, location } = this.props
        const path = location.pathname;
        //隐藏公共组件

        return (
            <div id="app2">
                {
                    path.indexOf('/videodetail') == -1 && path.indexOf('/line') == -1 && path.indexOf('/login') == -1 && path.indexOf('/reg') && path.indexOf('/commit') == -1?
                        //不用隐藏
                        <div>
                            <div className="foot">
                                <Menu
                                    style={{ position: 'fixed', bottom: 0, zIndex: 999, width: '100%' }}
                                    mode="horizontal"
                                    selectedKeys={selected}
                                    onSelect={({ key }) => {
                                        console.log(key)
                                        history.push(key)
                                        this.setState({ selected: [key] })
                                    }}>
                                    {
                                        menu.map(item => <Menu.Item key={item.path}>

                                            <div className="b">
                                                <Icon type={item.icon} />
                                                {item.text}
                                            </div>

                                        </Menu.Item>)
                                    }
                                </Menu>
                            </div>

                        </div>
                        :
                        //隐藏
                        <></>
                }
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} exact />
                    <Route path="/mine" component={Mine} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/message" component={Message} />
                    <Route path='/trip/:ProductCode' component={Trip}></Route>
                    {/* <Route path='/discover/videodetail' component={Videodetail}/> */}
                    <Route path="/line" component={Line} />
                    <Route path='/linedetail/:name' component={LineDetail}></Route>
                    <Route path='/Lineinfor' component={LineInfor}></Route>
                    <Route path='/discover/videodetail/:id' component={Videodetail} />
                    <Route path='/discover/commit/:id' component={Commit} />
                    <Redirect from='/' to="home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>

        )
    }
}



// App = connect(mapStateToProps)(App)
export default App;
