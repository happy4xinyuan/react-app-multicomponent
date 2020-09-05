import React, {Component} from 'react'
import './comment-list.css'
import PropTypes from 'prop-types';
import CommentListItem from "../comment-listitem/comment-listitem";

export default class commentList extends Component {
    static propTypes ={
        comments: PropTypes.array.isRequired ,
        removeComment: PropTypes.func
    }

    render (){
        let {comments,removeComment}= this.props;
        return (
        <div>
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <CommentListItem comment={comment} removeComment={removeComment} index={index}/>
                        )
                    }
                </ul>
            </div>
        </div>
        )
    }
}

