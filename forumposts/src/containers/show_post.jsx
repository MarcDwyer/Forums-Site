import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPost} from '../actions/index';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar';
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
            </div>
            </div>
        );
    }
}

function getProps({posts}, ownProps) {
    return {
        post: posts[ownProps.match.params.id]   
        }
}

export default connect(getProps, {getPost})(PostShow);