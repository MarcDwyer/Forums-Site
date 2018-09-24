import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getPost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id);
    }
    render() {
        console.log(this.props);
        const {post} = this.props;
            if(!post) {
                return <div>Loading...</div>
            }
            return (
            <div>
                <h3>{this.props.post.title}</h3>
                <Link to="/" className="btn btn-warning">Go back</Link>
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