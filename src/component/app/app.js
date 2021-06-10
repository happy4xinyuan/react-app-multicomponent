import React, {Component} from 'react'
import Search from "../search/search";
import Display from "../display/display";

export default class App extends Component {
    state = {
        SearchName: null
    }

    setSearchName = (SearchName) => {
        this.setState({SearchName});
    }

    render (){
            return (
                <div>
                    <div className="container">
                        <Search setSearchName={this.setSearchName} />
                        <Display SearchName={this.state.SearchName}/>
                    </div>
                </div>
            )
    }
}
