import React, {Component} from 'react'
import MyNavLink from "../component/MyNavLink";
import { Switch, Route, Redirect} from "react-router-dom";
import News from "./news";
import Message from "./message";

export default class Home extends Component {
    render (){
        return (
        <div>
            <h1>Home</h1>
            <div>
                <ul className='nav nav-tabs'>
                    <li >
                        <MyNavLink className='nav-link ' to='/home/news'> News</MyNavLink>
                    </li>
                    <li className="nav-item">
                        <MyNavLink className='nav-link 'to='/home/message'> Message</MyNavLink>
                    </li>
                </ul>

                {/*可切换的路由组件, 只显示其中一个*/}
                <Switch>
                    {/*Route组件定义一个映射关系, 将组件与路径url对应*/}
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/message' component={Message}/>

                    <Redirect to='/home/news'/> //表示默认重定向路由
                </Switch>

            </div>
        </div>
        )
    }
}
