import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Commit.scss';
import $ from 'jquery';
import axios from 'axios'
import {connect} from 'react-redux';
const mapStateToProps =(dispatch)=>{
    return dispatch

}
@connect(mapStateToProps)
@withRouter
class Commit extends Component {
    componentDidMount() {
        this.setState({
            update:2
        })
        {
            (function () {
                $('.write-comment-container textarea').on('input', function () {
                    $('.write-comment-footer p em').text($(this).val().length)
                })
            })();
            Date.prototype.format = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1,                 //月份 
                    "d+": this.getDate(),                    //日 
                    "h+": this.getHours(),                   //小时 
                    "m+": this.getMinutes(),                 //分 
                    "s+": this.getSeconds(),                 //秒 
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                    "S": this.getMilliseconds()             //毫秒 
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            }
        }
    }
    shouldComponentUpdate(){
        let {username,history} = this.props;
        // console.log('this.props',this.props)
        // console.log('kankanusername，看',username)
        if( username.username == undefined){
            history.push('/login')
        }else{
           return true;
        }
        
    }
    state = {
        update:''
    }
    render() {
        console.log(this.props.username.username)
        let { match, history} = this.props
        let {username} = this.props.username
        // console.log(username)
        return (
            <div id="commit">
                <header className="write-comment-header">
                    <a onClick={() => {
                        history.go(-1)
                    }} className="h-left"><b className="c-ico ico-left"></b></a>
                    <p className="h-title">评论</p>
                </header>
                <section className="write-comment-container">
                    <textarea name="" id="" placeholder="此时此刻的想法" maxLength="300"></textarea>
                </section>
                <footer className="write-comment-footer">
                    <p><em>0</em>/300字</p>
                    <input type="button" value="发送" className="send" onClick={async () => {
                        let res = await axios.post('http://49.232.154.155:2003/discover/commitcreate', {
                            UserName: username,
                            Desc: $('.write-comment-container textarea')[0].value,
                            CreatedOn: new Date().format("yyyy-MM-dd hh:mm:ss"),
                            NickName: username,
                            ID: match.params.id
                        })
                        history.go(-1)
                    }} />
                </footer>
            </div>
        )
    }
}

export default Commit;