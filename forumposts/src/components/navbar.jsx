import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../actions/index';


class Navbar extends Component {
    componentDidMount() {
        this.props.getUser();
    }
render() {
    const {user} = this.props;
    console.log(user)
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
  <Link to="/" className="navbar-brand">Radit</Link>
  <div className="dropdown show">
  <a className="btn btn-success dropdown-toggle loginmarg" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user ? user.user: 'Sign In'}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {this.renderAuth()}
  </div>
</div>
</nav>
    );
}
renderAuth() {
    const {user} = this.props;
    if (user) {
        return (
            <a href="/auth/google" target="_self" className="btn">Check Posts</a>
        )
    } else {
        return(
            <a href="/auth/google" target="_self" className="btn">Sign in with Google+</a>
        );
    }
}
}
function getProps({user}) {
    return {
        user
    };
}

export default connect(getProps, {getUser})(Navbar);