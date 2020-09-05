import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class CommentListItem extends Component {
    static propTypes = {
        comment: PropTypes.object,
        removeComment: PropTypes.func,
        index: PropTypes.number
    }

    handleRemove = ()=>{
        let {comment,removeComment,index} = this.props;
        console.log(removeComment)
        removeComment(index);
    }

    render (){

        let {comment,removeComment,index} = this.props;


        return (
        <div>

                    <li className="list-group-item">
                        <div className="handle">
                            <a href="#" onClick={this.handleRemove}>删除</a>
                        </div>
                        <p className="user"><span >{comment.author}</span><span>说:</span></p>
                        <p className="text-justify">{comment.text}</p>
                    </li>

        </div>
        )
    }
}
