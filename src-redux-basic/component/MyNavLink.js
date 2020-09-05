import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component {
    render (){
        return (
            // 将外部所有属性传入NavLink
            <NavLink {...this.props} activeClassName='selected'></NavLink>
        )
    }
}
