import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {
    static propTypes ={
        setSearchName: PropTypes.func,
    }

    handleSearch = (event)=>{
        const searchName = this.user.value.trim();
        if (searchName){
            this.props.setSearchName(searchName);
        }
        event.preventDefault();
        this.user.value = '';
    }
    render (){
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h2>Search User of Github</h2>
                            <form >
                                <div className="form-group ">
                                    <label htmlFor="username ">请输入用户名</label>
                                    <input className="col-sm-10 form-control" type="text" id="username" ref={input => this.user = input}/>
                                </div>
                                <button className="btn btn-primary" type="submit" onClick={this.handleSearch}>搜索</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}
