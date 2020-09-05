import React, {Component} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import PubSub from "pubsub-js";

export default class Display extends Component {
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    //挂载后开启监听
    componentDidMount() {
        PubSub.subscribe('MY SearchName', (msg,SearchName)=>{
            this.setState({
                initView: false,
                loading: true,
            })
            //发送ajax请求
            const url = `https://api.github.com/search/users?q=${SearchName}`;
            axios.get(url)
                .then(res => {
                    //请求成功,处理
                    console.log(res);
                    const data = res.data;
                    const users = data.items.map(e => (
                            {
                                url: e.html_url,
                                avatarUrl: e.avatar_url,
                                name: e.login
                            }
                        )
                    );
                    this.setState({
                        loading: false,
                        users: users
                    });
                })
                .catch(error => {
                    this.setState({
                        initView: true,
                        errorMsg: error,
                    })
                });
        })
    }


    render (){
        const {initView,loading,users,errorMsg } = this.state;
        if(initView){
            return <h2>请输入搜索</h2>
        } else if(loading) {
            return <h2>Loading</h2>
        } else if(errorMsg){
            return <h2>{errorMsg}</h2>
        } else{
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.users.map((user,index) =>
                                <div className="col-md-3">
                                <div className="card" >
                                    <a href={user.url}>
                                        <img src={user.avatarUrl} className="card-img-top" />
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title">{user.name}</h5>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        )}
    }
}
