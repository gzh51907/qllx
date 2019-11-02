import React, { Component } from 'react';
import './LineDetail.scss';
import axios from 'axios';
import lazyImg from './lazyImg.js';

class LineDetail extends Component {
    state = {
        moreList: [

        ],
        outDay: [
            5,
            6,
            7
        ],
        outData: [
            '2018-09', '2018-10', '2018-11', '2018-12',
            '2019-01', '2019-02', '2019-03', '2019-04',
            '2019-05', '2019-06', '2019-07', '2019-08',
            '2019-09', '2019-10', '2019-11', '2019-12',
        ],
        CheckedDay:[],
        CheckedData:[]
    }
    async componentDidMount() {
         lazyImg()
        let { data } = await axios.get('http://49.232.154.155:2003/linedetail/init')
        let moreList = data[0].Data.Results
        // console.log(moreList)
        this.setState({
            moreList
        })
       
    }
    showMore = () => {
        let showmore = document.getElementsByClassName('show-more')[0];

        if (showmore.getAttribute('class') == 'show-more') {
            showmore.classList.add('light');
        } else {
            showmore.classList.remove('light');
        }
    }
    islandShow = (isok) => {
        let island = document.getElementsByClassName('isLand-cover')[0];
        if (isok) {
            island.style.display = 'block';
        } else {
            island.style.display = 'none';
        }
    }
    sortShow = async(isok,sort,e) => {
        let sortCover = document.getElementsByClassName('sort-cover')[0];
        let sortList = document.getElementById('sort-ul');
       

        if (isok) {
            sortCover.style.display = 'block'
        } else {
           
            if (e.target.tagName.toLowerCase() == 'li') {
                sortList.childNodes.forEach(item => {
                    item.classList.remove('active')
                })
                e.target.classList.add('active')
            }

            if(sort == 'asc'){
                let {data} = await axios.get('http://49.232.154.155:2003/linedetail/pricesort',{
                    params:{
                        type:'asc'
                    }
                }) 
                let moreList = data[0].Data.Results;
                this.setState({
                    moreList
                })
            }else if (sort == 'desc'){
                // console.log(e)
                let {data} = await axios.get('http://49.232.154.155:2003/linedetail/pricesort',{
                    params:{
                        type:'desc'
                    }
                }) 
                let moreList = data[0].Data.Results;
                this.setState({
                    moreList
                })
            }else if(sort == 'init'){
                let {data} = await axios.get('http://49.232.154.155:2003/linedetail/init')
                let moreList = data[0].Data.Results;
                this.setState({
                    moreList
                })
            }
            sortCover.style.display = 'none'
        }
      
    }
    DateShow = (isok)=>{
        let isLand = document.getElementsByClassName('isLand-cover')[1];

        if(isok){
            isLand.style.display = 'block'
        }else{
            isLand.style.display = 'none'
        }
    }
    DataOpen = (e) => {
        let attr = e.target.getAttribute('class');
        let checkMore = document.getElementsByClassName('check-more')[1];
        if (attr == 'icon icon-arrowB') {
            e.target.classList.add('active');
            checkMore.classList.add('open');
        } else {
            e.target.classList.remove('active');
            checkMore.classList.remove('open');
        }

    }
    checkData = (e) => {

        let attr = e.currentTarget.getAttribute('class');
       let {CheckedData} = this.state;
        if (attr == '') {
            e.currentTarget.classList.add('active')
           CheckedData.unshift(e.currentTarget.innerText + ',')
        } else {
            e.currentTarget.classList.remove('active')
            CheckedData.pop(e.currentTarget.innerText +',')
        }
        this.setState({
            CheckedData
        })
    }
    checkDay = (e) => {
        let attr = e.currentTarget.getAttribute('class');
        let {CheckedDay} = this.state;
        if (attr == '') {
            e.currentTarget.classList.add('active')
            CheckedDay.unshift(e.currentTarget.innerText+',')
           
        } else {

            e.currentTarget.classList.remove('active')
            CheckedDay.pop(e.currentTarget.innerText + ',')
        } 
         this.setState({
                CheckedDay
            })
    }
    clearDate = ()=>{
        let {CheckedData,CheckedDay} = this.state;
        let DateList = document.querySelectorAll('.check-more li');
        DateList.forEach(item=>{
            item.classList.remove('active');
        })
        this.setState({
            CheckedData:[],
            CheckedDay:[]
        })
    }
    toTrip = (ProductCode)=>{
        let {history} = this.props;
        history.push('/trip/' + ProductCode)
    }
    goBack = ()=>{
        let {history} = this.props;
        history.go(-1);
    }
    render() {
        
        let {name} = this.props.match.params
        let { moreList, outDay, outData,CheckedDay,CheckedData } = this.state;
        return (
            <div className='line-detail'>
                <div className='line-main'>
                    <div className='line-header'>
                        <div className='search-box'>
                            <span onClick={this.goBack}><i className="icon icon-arrowL"></i></span>
                            <div className="search-input"><i className="icon icon-search"></i> <input type="text" value={name}/></div>
                            <i className='icon icon-bigShow'></i>
                        </div>
                        <div className='line-type'>
                            <div className="type-list"><ul className="type-ul" style={{ width: '165px' }}><li className="active"><span>推荐产品</span></li><li className=""><span>自由行</span></li></ul></div>
                            <div className="show-more" onClick={this.showMore}><i className="icon icon-arrowT"></i></div>
                        </div>
                    </div>
                    <div className='content-box'>
                        <div className='list-main'>
                            <ul>
                                {
                                    moreList.map(item => {
                                        return (
                                            <li key={item.DepartureDate} onClick={this.toTrip.bind(this,item.ProductCode)}>
                                                <div className="show-img">
                                                    <img src={item.Image} className="big-img" lazy='y' />
                                                    <p>{item.DepartureCities[0]}出发</p>
                                                    <span>自由行</span>
                                                </div>
                                                <div className="product-mes">
                                                    <h2>{item.ProductName}</h2>
                                                    <p className="fligt single-line-clamp">
                                                        <label>班期：</label>

                                                        <span>{item.DepartureDate.map(item => {
                                                            return item
                                                        }).join(',')}
                                                        </span>
                                                    </p>
                                                    <p className="label single-line-clamp">
                                                        {
                                                            item.ProductFeature.map(item => {
                                                                return (
                                                                    <span>{item}</span>
                                                                )
                                                            })
                                                        }
                                                        {/* <span>浮潜A级</span>
                                                        <span>私密性极佳</span>
                                                        <span>浪漫蜜月</span> */}
                                                    </p>
                                                    <p>
                                                        <span>23人点评</span>
                                                        <span>99%满意</span>
                                                        <span className="small">
                                                            {
                                                                item.Price == 0 ? <b style={{ fontSize: '.24rem' }}>实时询价</b> : <><em>￥</em><b>{parseInt(item.Price)}</b><i>起</i></>
                                                            }


                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <footer>
                            <ul id='open-cover' className='flex-row'>
                                <li className='flex-item active' onClick={this.sortShow.bind(this, true,'')}>
                                    <i className='icon icon-sort'></i>
                                    <p>综合排序</p>
                                    <em></em>
                                </li>
                                <li className='flex-item active' onClick={this.islandShow.bind(this, true)}>
                                    <i className='icon icon-localtion'></i>
                                    <p>目的地</p>
                                    <em></em>
                                </li>
                                <li className='flex-item' onClick={this.DateShow.bind(this,true)}>
                                    <i className='icon icon-calendar'></i>
                                    <p>行程天数</p>
                                    <em></em>
                                </li>
                                <li className='flex-item'>
                                    <i className='icon icon-screen'></i>
                                    <p>其他筛选</p>
                                    <em></em>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </div>
               
                <div className="sort-cover" style={{ display: 'none' }}>
                    <div className="gallery" onClick={this.sortShow.bind(this, false,'')}></div>
                    <ul id="sort-ul">
                        <li className="active" onClick={this.sortShow.bind(this, false,'init')}>综合排序</li>
                        <li className="" onClick={this.sortShow.bind(this, false,'asc')}>价格从低到高</li>
                        <li className="" onClick={this.sortShow.bind(this, false,'desc')}>价格从高到低</li>
                    </ul>
                </div>
                <div className='isLand-cover' style={{ display: 'none' }}>
                    <div className='gallery' onClick={this.islandShow.bind(this, false)}></div>
                    <div className='cover-main'>
                        <div className="btn-Item flex-row">
                            <span onClick={this.islandShow.bind(this, false)}>取消</span>
                            <span className="">
                                <em >确定</em>
                                <i >(313)</i>
                            </span>
                        </div>
                        <div className='list-box'>
                            <div className='list-item'>
                                <p>
                                    <span className='left-item'>目的地</span>
                                    <span className="right-item"></span>
                                </p>
                                <ul className='more'>
                                    <li className="active">
                                        <span className="single-line-clamp">【特色跟团】马尔代夫
                                        </span>
                                        <i className="icon icon-checked checked"></i>
                                        <i className="icon fire"></i>
                                    </li>
                                    <li className=""><span className="single-line-clamp">阿玛瑞岛6天4晚自由行</span> <i className="icon icon-checked checked"></i> <i className="icon fire"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="isLand-cover" style={{display:'none'}}>
                    <div className="gallery" onClick={this.DateShow.bind(this,false)}></div>
                    <div className="cover-main">
                        <div className="btn-Item flex-row">
                            <span onClick={this.DateShow.bind(this,false)}>取消</span>
                            <span onClick={this.clearDate}>重置</span>
                            <span className="">
                                <em >确定</em>
                                <i >(313)</i>
                            </span></div>
                        <div className="list-item">
                            <p >
                                <span className="left-item">行程天数</span>
                                <span className="right-item">
                                    <em>{CheckedDay}</em>
                                </span>
                            </p>
                            <ul className="check-more">
                                {
                                    outDay.map(item => {
                                        return (
                                            <li className="" onClick={this.checkDay}>
                                                <span >{item}天</span>
                                                <i className="icon icon-checked checked"></i>
                                            </li>
                                        )
                                    })

                                }

                            </ul>
                        </div>
                        <div className="list-item">
                            <p >
                                <span className="left-item">出游时间</span>
                                <span className="right-item">
                                    <em>{CheckedData}</em>
                                    <i className="icon icon-arrowB" onClick={this.DataOpen}></i>
                                </span></p>
                            <ul className="check-more">
                                {
                                    outData.map(item => {
                                        return (
                                            <li className="" onClick={this.checkData}>
                                                <span>{item}</span>
                                                <i className="icon icon-checked checked"></i>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <p className="other-p">
                                <span className="left-item">自定义出游日期</span></p>
                            <div className="custom"><input type="date" min="Sat Nov 02 2019 09:38:57 GMT+0800 (中国标准时间)" placeholder="最早出发" />
                                <label ></label>
                                <input type="date" min="Sat Nov 02 2019 09:38:57 GMT+0800 (中国标准时间)" placeholder="最晚出发" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LineDetail;