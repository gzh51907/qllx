import React, { Component } from 'react';
import './LineInfor.scss';
import { Tabs } from 'antd'
import axios from 'axios';
const { TabPane } = Tabs;
import lazyImg from './lazyImg.js';
import { Item } from 'rc-menu';
class LineInfor extends Component {
    state = {
        IslandClassList: [],
        selectActive:'热门推荐'
    }
    async componentDidMount() {
        lazyImg();
        let { data } = await axios.get('http://49.232.154.155:2003/lineinfor/init');
        let { IslandClassList } = data[0].Data;
        this.setState({
            IslandClassList
        })
        // console.log(IslandClassList)
    }
    ToLineDetail = (name)=>{
        console.log(1)
        let {history} = this.props;
        history.push('/linedetail/'+ name)
    }
    select = (value)=>{
        let selectActive = value;
        this.setState({
            selectActive
        })
    }
    render() {
        let { IslandClassList,selectActive } = this.state;
        return (
            <div className='LineInfor_box'>
                <header>
                    <div className="searchMain">
                        <i className="icon icon-search"></i>
                        <input type="text" id="toSearchPage" placeholder="请输入目的地/关键字" />
                    </div>
                    <div className="service" id="coverBtn">
                        <i className="icon icon-service"></i>
                    </div>
                </header>
                <div className='pbd'>
                    <Tabs tabPosition='left' defaultActiveKey={selectActive} type='card' onChange={this.select}>
                        {IslandClassList.map((item,index) => (
                            <TabPane tab={item.Name} key={item.Name} >
                                <div className='rightMain'>
                                    <div className='rightItem' id='hotList'>
                                                    {   item.Type == 1 ?
                                                               <>
                                                                <h2>{item.ModuleList[0].Name}</h2>
                                                                <ul className='hot'>
                                                                    {item.ModuleList[0].SubClassList.map(i => {
                                                                        return <li >
                                                                            <div className='showImg' onClick={this.ToLineDetail.bind(this,i.Name)}>
                                                                                <img src={i.PicLink} lazy='y'></img>
                                                                            </div>
                                                                            <p className='single-line-clamp'>{i.Name}</p>
                                                                            <p className='single-line-clamp'>{i.Desc}</p>
                                                                            </li>
                                                                    })}
                                                                </ul>
                                                                <h2>{item.ModuleList[1].Name}</h2>
                                                                <ul className='recommend'>
                                                                {
                                                                    item.ModuleList[1].SubClassList.map(item=>{
                                                                        return (
                                                                            <li>
                                                                            <a>
                                                                            <div className='showImg'>
                                                                                <img src={item.PicLink} lazy='y'></img>
                                                                            </div>
                                                                            <p>{item.Name}</p>
                                                                            <div className='tag-list'>
                                                                                {
                                                                                    item.TagIcon.split(',').map(item=>{
                                                                                      return  <span className='tag'>{item}</span>
                                                                                    })
                                                                                }
                                                                                
                                                                                {/* <span className='tag'>爆款</span>
                                                                                <span className='tag'>特卖</span>
                                                                                <span className='tag'>特价</span> */}
                                                                            </div>
                                                                            <div className='style'>{item.LineTypeName}</div>
                                                                            <div className='price'>
                                                                                <em>￥</em>
                                                                                <span>{item.Price}</span>
                                                                                <em>起</em>
                                                                            </div>
                                                                            </a>
                                                                        </li>
                                                                        )
                                                                    })
                                                                }
                                                       
                                                                </ul>
                                                               </>    
                                                       :<>
                                                       <h2>{item.ModuleList[0].Name}</h2>
                                                       <ul className='hot'>
                                                           {item.ModuleList[0].SubClassList.map(i => {
                                                               return <li>
                                                                   <div className='showImg'>
                                                                       <img src={i.PicLink} lazy='y'></img>
                                                                   </div>
                                                                   <p className='single-line-clamp'>{i.Name}</p>
                                                                   <p className='single-line-clamp'>{i.Desc}</p>
                                                                   </li>
                                                           })}
                                                       </ul>
                                                        </>
                                                    }                    
                                                </div>
                                </div>
                            </TabPane>
                        ))}
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default LineInfor;