import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component {


    constructor() {
        super();
        this.state ={
            comments: [{author:'cxy',text:'love you!'},{author:'cxy',text:'love you!'}]
        }
    }

    removeComment = (index)=>{
        let {comments} = this.state;
        comments.splice(index, 1);
        this.setState(comments);
    }

    addComment = (author, text) =>{
        let comment = {author: author,text:text};
        let {comments} = this.state;
        comments.unshift(comment);
        this.setState(comments);
    }

    render= () =>{
        let {comments} = this.state;
        return (
        <div>
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd  addcomment = {this.addComment}/>
                    <CommentList comments={comments} removeComment= {this.removeComment} />
                </div>
            </div>
        </div>
        )
    }
}
