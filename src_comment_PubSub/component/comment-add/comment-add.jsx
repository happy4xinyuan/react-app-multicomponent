import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class commentAdd extends Component {
    static propTypes ={
        addcomment: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    handleSubmit = (event) => {
        this.props.addcomment(this.state.author,this.state.text);
        const state = {author:'', text:''};
        this.setState(state);
    }

    userChange = (event) =>{
        const author = event.target.value;
        this.setState({author});
    }

    textChange = (event) =>{
        const text = event.target.value;
        this.setState({text});
    }


    render (){
        return (

            <div className="col-md-4 ">
                <form className="form-horizontal" >
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text"  className="form-control" placeholder="用户名" value={this.state.author} onChange={this.userChange} />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control"  rows="6" placeholder="评论内容" value={this.state.text} onChange={this.textChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={this.handleSubmit} className="btn btn-primary  pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}