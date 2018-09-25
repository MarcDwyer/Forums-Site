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
                return (
                    <div>
                    <Navbar />
                    <div>Loading...</div>
                    </div>
                    );
            }
            return (
            <div>
                <Navbar />
                <div className="container">
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <Link to="/" className="btn btn-warning">Go back</Link>
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