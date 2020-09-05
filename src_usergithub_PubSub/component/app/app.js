import React, {Component} from 'react'
import Search from "../search/search";
import Display from "../display/display";
import PubSub from 'pubsub-js'

export default class App extends Component {

    render (){
            return (
                <div>
                    <div className="container">
                        <Search  />
                        <Display />
                    </div>
                </div>
            )
    }
}
