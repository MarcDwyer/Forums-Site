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
        const {posts} = this.props;
            if(!posts) {
                return <div>Loading...</div>
            }
            return (
            <div>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}> Delete </button>
                <h3>{this.props.posts.title}</h3>
                <h6></h6>
                <p></p>
                <Link to="/" className="btn btn-warning">Go back</Link>
            </div>
        );
    }
}

function getProps({posts}, ownProps) {
    return {
        posts: posts[ownProps.match.params._id]
    }
}

export default connect(getProps, {getPost})(PostShow);