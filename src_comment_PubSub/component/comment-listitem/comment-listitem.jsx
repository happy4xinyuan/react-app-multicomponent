import React, {Component} from 'react'
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class CommentListItem extends Component {
    static propTypes = {
        comment: PropTypes.object,
        index: PropTypes.number
    }

    handleRemove = ()=>{
        let {comment,index} = this.props;
        PubSub.publish('WillRemove',index );
    }

    render (){

        let {comment,index} = this.props;

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
