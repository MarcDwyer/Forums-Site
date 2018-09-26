import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPost, postComment} from '../actions/index';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar';
import uuid from 'uuid';

class PostShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id);
    }
    render() {
        const {post} = this.props;
            if(!post) {
                return <div>Loading...</div>
            }
            return (
                <div>
                    <Navbar />
            <div className="container">
            <div className="thepost mb-4 mt-4">
                <h3>{post.title}</h3>    
                <p>{post.body}</p>
                <div className="buttons mb-2">
                <Link to="/" className="btn btn-warning">Go back</Link>
                </div>
                </div>
                <textarea
                className="comment" 
                rows="5"
                cols="15"
                placeholder="What are your thoughts?"
                />
                <button onClick={(e) => this.updateComment(e)} type="submit" className="btn">Comment</button>
                <ul className="list-group comments">
                {this.renderComments()}
            </ul>
            </div>
            </div>
        );
    }
    updateComment(e) {
        e.preventDefault();
        const comment = document.querySelector('.comment');
        if (comment.value.length < 1) {
            comment.placeholder = 'Comments must not be empty';
            return;
        } else {
            this.props.postComment(this.props.post._id, comment.value);
            comment.placeholder = 'Comment Posted!'
            comment.value = '';
        }
        
    }
    renderComments() {
        const {comments} = this.props.post;
        return comments.map(comment => {
            return (
                <li className="list-group-item" key={uuid()}>{comment}</li>
            );
        })
    }
}

function getProps({posts}, ownProps) {
    return {
        post: posts[ownProps.match.params.id]   
        }
}

export default connect(getProps, {getPost, postComment})(PostShow);