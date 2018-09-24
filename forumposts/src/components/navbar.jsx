import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Navbar extends Component {
render() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
  <Link to="/" className="navbar-brand">Radit</Link>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    );
}
}

export default Navbar;