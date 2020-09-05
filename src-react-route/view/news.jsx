import React, {Component} from 'react'

export default class News extends Component {

    state = {
        newsArr: ["cxy001","cxy002","cxy003"]
    }
    render (){
        return (
            <div>
                <ul>
                    {
                        this.state.newsArr.map((news,index) =>
                            <li key={index}>
                                {news}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
