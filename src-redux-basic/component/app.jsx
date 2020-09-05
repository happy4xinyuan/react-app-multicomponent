import React, {Component} from 'react'
import {INCREASE,DECREASE,INCREASASYCN} from "../redux/action-types";

export default class App extends Component {

    handleAdd = ()=>{
        const num = this.num.value*1;
        this.props.store.dispatch({type:INCREASE,data: num })
    }
    handleSubtract = ()=>{
        const num = this.num.value*1;
        this.props.store.dispatch({type:DECREASE,data: num })
    }
    handleAsyncAdd = ()=>{
        const num = this.num.value*1;
        setTimeout(
            ()=>{
                this.props.store.dispatch({type:INCREASE,data: num})
            },1000
        )

    }

    render (){
        let state = this.props.store.getState();
        return (
            <div>
                    <div className="col-12 mt-5 mb-2">
                            <h1>React Router Demo {state}</h1>
                        <hr/>
                    </div>
                <select ref={(input) => this.num = input}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                    <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSubtract}>-</button>
                <button onClick={this.handleAsyncAdd}>+ asycn</button>
            </div>
        )
    }
}
