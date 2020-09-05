import React, {Component} from 'react'
import { Switch, Route, Redirect} from "react-router-dom";
import MessageDetail from "./message-detail";
import MyNavLink from "../component/MyNavLink";

export default class Message extends Component {
    state = {
        message: [
            {id:1,title:'mse01'},
            {id:2,title:'mse02'},
        ]
    }

    componentDidMount() {
        //模拟ajax, 异步请求
        setTimeout(() =>{
            const message = [
                {id:1,title:'mse01',content:'abababbbaba'},
                {id:2,title:'mse02',content:'bnbnbbnbnbnb'},
            ];
            this.setState({message})
        }, 1000)
    }

    back = () =>{
        this.props.history.goBack();
    }
    forward = () =>{
        this.props.history.goForward();
    }
    showDetail = (id) =>{
        this.props.history.replace(`/home/message/message-detail/${id}`);
    }
    reqPage = ()=>{
        window.location = 'http://www.baidu.com'
    }

    render (){
        return (
            <div>
                <ul>
                    {
                        this.state.message.map((m,index)=>
                            <li key={index}>
                                {/*<a href={`/home/message/message-detail/${m.id}`} >{m.title}</a>*/}
                                <MyNavLink  to={`/home/message/message-detail/${m.id}`} >{m.title} NavLink</MyNavLink>
                                <button onClick={()=>this.showDetail(m.id)} className="btn btn-primary">history对象 手动模拟 查看</button>
                            </li>
                        )
                    }
                </ul>
                <Route path='/home/message/message-detail/:id' component={MessageDetail}></Route>
                <button onClick={this.back} className="btn btn-primary">回退</button>
                <button onClick={this.forward} className="btn btn-primary">前进</button>
                <button onClick={this.reqPage} className="btn btn-primary">跳转</button>
            </div>

        )
    }
}
