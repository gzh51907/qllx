import React from 'react';
import { tsConstructorType, appendToMemberExpression } from '@babel/types';
import { Menu, Icon } from 'antd';
import { Route, Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import './App.css'
// import Destination from './pages/destination'
// import Message from './pages/message'
// import Discover from './pages/discover'
// import Mine from './pages/mine'

class App extends React.Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div>
        <div className="footer" >
          <div className="center-wrap JS_ftTab">
            <a href="/" className="ft-btn-out curr">
              <div className="ft-btn-inner">
                <Icon type="home" className="icon-ft b1" style={{fontSize:25}}></Icon>
                <p className='bottom-text'>首页</p>
              </div>
            </a>
            <a href="/lineInfor/" className="ft-btn-out">
              <div className="ft-btn-inner">
                <Icon type="global" className="icon-ft b2" style={{fontSize:25}}></Icon>
                <p className='bottom-text'>目的地</p>
              </div>
            </a>
            <a href="/consult/" className="ft-btn-out">
              <div className="ft-btn-inner">
                <Icon type="message" className="icon-ft b4" style={{fontSize:25}}></Icon>
                <p className='bottom-text'>咨询</p>
              </div>
            </a>
            <a href="/discover/" className="ft-btn-out">
              <div className="ft-btn-inner">
                <Icon type="eye" className="icon-ft b3" style={{fontSize:25}}></Icon>
                <p className='bottom-text'>发现</p>
              </div>
            </a>

            <a href="/mine/" className="ft-btn-out">
              <div className="ft-btn-inner">
                <Icon type="user" className="icon-ft b5" style={{fontSize:25}}></Icon>
                <p className='bottom-text'>我的</p>
              </div>
            </a>
          </div>
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/discover" component={Discover} />
          <Route path="/mine" component={Mine} />
          <Route path="/destination" component={Destination} />
          <Route path="/message" component={Message} /> */}
          <Redirect from='/' to="home" exact />
          <Route render={() => <div><h1>404</h1>页面不存在</div>} />
        </Switch>
      </div>

    )
  }
}

export default App;
