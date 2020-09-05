import React, {Component} from 'react'
import MyNavLink from "./MyNavLink";
import { Switch, Route, Redirect} from "react-router-dom";
import About from "../view/about";
import Home from "../view/home";

export default class App extends Component {
    render (){

        return (
            <div className='container'>
                <div className="col-12 mt-5 mb-2">
                    <h1>React Router Demo</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-4 list-group">
                        <MyNavLink className='nav-link' to='/about'> News</MyNavLink>
                        <MyNavLink className='nav-link ' to='/home'> News</MyNavLink>
                    </div>
                    <div className="col-8">
                        <Switch>
                            <Route path='/about' component={About}></Route>
                            <Route path='/home' component={Home}></Route>
                        </Switch>
                            <Redirect to='/about'></Redirect>
                    </div>
                </div>
            </div>
        )
    }
}
