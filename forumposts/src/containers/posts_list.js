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
    console.log(this.props)
    if (!this.props.posts) return (<h6>Loading...</h6>);
    return (
      <div>
        <Navbar posts={this.props.posts} />
      <div className="App container">
      <div className="fix">
      <Link className="btn float-left help" to="/create-post">Create Post</Link>
      </div>
      <div className='gridder'>
      {this.renderPosts()}
      </div>
      </div>
      </div>
    );
  }
  renderPosts() {
    const {posts} = this.props;
   return _.map(posts, post => {
    const path = `/posts/${post._id}`;
    return (

      <div key={post._id || post.key} className="card border-dark mb-3">
  <div className="card-header">{post.title}</div>
  <div className="card-body text-dark">
    <p className="card-text">{post.body}</p>
      </div>
      <Link  to={path} className="btn btn-dark">View Post</Link>
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
