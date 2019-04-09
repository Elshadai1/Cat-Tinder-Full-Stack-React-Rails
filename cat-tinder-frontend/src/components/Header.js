import React, { Component } from 'react';


class Header extends Component {

    render() {
      return (
        <div>
        <h1> Cat Tinder </h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
      );
    }






}







export default Header;
