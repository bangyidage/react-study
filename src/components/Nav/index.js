import React from 'react';
import stylus from './stylus.styl';
import classNames from "classnames/bind";
import Files from './file.json';
import {BugOutlined, SearchOutlined} from '@ant-design/icons'

const ctx = classNames.bind(stylus);
const {myNavLink, myNavUser} = Files;

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    componentDidMount() {
        // const that = this;
        // window.onscroll = function () {
        //     let t = document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚动时距离顶部的位置
        //     // let cth = document.documentElement.clientHeight || document.body.clientHeight;//页面可视区域高度
        //     // let sth = document.documentElement.scrollHeight || document.body.scrollHeight;//滚动条总高度
        //     if(t<100){
        //         that.r.style.transition="1s";
        //         that.r.style.top="0";
        //     }
        //     else{
        //         that.r.style.background = "#fbf8f8";
        //         that.r.style.transition="1s";
        //         that.r.style.top="0";
        //     }
        // }
    }

    onSearch = (e) => {
        this.setState({
            searchValue: e.target.value && e.target.value.trim()
        })
        console.log(window.devicePixelRatio);
    }

    render() {
        return (
            <nav className={ctx('nav')} ref={r => this.r = r}>
                <BugOutlined className={ctx('nav-icon')}/>
                <ul className={ctx('nav-link-ul')}>
                    {
                        myNavLink.map(item => {
                            const {id, value} = item;
                            return <li className={ctx('nav-link-li')} key={id}><a href='##'>{value}</a></li>
                        })
                    }
                </ul>
                <div className={ctx('nav-search')}>
                    <input className={ctx('nav-search-input')} type='text' onChange={this.onSearch}
                           value={this.state.searchValue} placeholder='大胖和二胖都瘦了'/>
                    <button className={ctx('nav-search-btn')}><SearchOutlined/></button>
                </div>
                <ul className={ctx('nav-link-ul')}>
                    {
                        myNavUser.map(item => {
                            const {id, value} = item;
                            return (
                                <li className={ctx('nav-link-li')} key={id}>
                                    <a href='##'>{value}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}
