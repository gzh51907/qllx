import React from 'react';
import { Menu, Icon } from 'antd';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import './App.css'
import Destination from './pages/Destination/Destination.jsx'
import Message from './pages/Message/Message.jsx'
import Discover from './pages/Discover/Discover.jsx'
import Mine from './pages/Mine/Mine.jsx'
import Videodetail from './pages/Discover/Videodetail.jsx'
@withRouter
class App extends React.Component {
    constructor() {
        super();
    }
    state = {
        selected:['/home'],
        menu: [{
            name: 'home',
            path: '/home',
            text: '首页',
            icon: 'home'
        }, {
            name: 'destination',
            path: '/destination',
            text: '目的地',
            icon: 'global'
        },{
            name: 'message',
            path: '/message',
            text: '咨询',
            icon: 'message'
        },{
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
        let {selected,menu } = this.state
        let { history } = this.props
        return (
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
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} exact/>
                    <Route path="/mine" component={Mine} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/message" component={Message} />
                    <Route path='/discover/videodetail' component={Videodetail}/>
                    <Redirect from='/' to="home" exact />
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>

        )
    }
}

export default App;
