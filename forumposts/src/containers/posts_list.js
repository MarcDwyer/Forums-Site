import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom';
import _ from 'lodash';


class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {

    if (!this.props.posts) return (<h6>Loading...</h6>);
    return (
      <div>
        <Navbar posts={this.props.posts} />
      <div className="App container">
      <div className="fix">
      <Link className="btn float-left help" to="/create-post">Create Post</Link>
      </div>
      <ul className='form-group'>
      {this.renderPosts()}
      </ul>
      </div>
      </div>
    );
  }
  renderPosts() {
    const {posts} = this.props;
   return _.map(posts, post => {
    const path = `/posts/${post._id}`;
    return (
      <div key={post._id || post.key} className="posts">
        <Link className="remove" to={path}>
      <li className="list-group-item">
      <h6>{post.title}</h6>
      </li>
      </Link>
      </div>
   );
  })
}
}

function getProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(getProps, {getPosts})(App);
