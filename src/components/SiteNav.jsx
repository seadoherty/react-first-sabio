import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import usersService from "../services/users.js";

class SiteNav extends Component {

  onLogOutClickHandler=(e)=>{
    usersService
      .logout()
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);    
    }

    onLogoutSuccess = (res) =>{
      console.log({ user: res });

      this.props.history.push("/login");
    }

    onLogoutError = (err) =>{
      console.log({ error: err });
    }

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sabio">
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">     
          <li className="nav-item"> <NavLink to="/" className="nav-link"> Home </NavLink> </li>
          <li className="nav-item"> <NavLink to="/login" className="nav-link"> Login </NavLink> </li>
          <li className="nav-item"> <NavLink to="/register" className="nav-link">  Register </NavLink> </li>      
          <li className="nav-item"> <NavLink to="/friends" className="nav-link"> Friends </NavLink> </li>
          <li className="nav-item"> <NavLink to="/blogs" className="nav-link"> Blogs </NavLink> </li>
          <li className="nav-item"> <NavLink to="/companies" className="nav-link"> Tech Companies </NavLink> </li>
          <li className="nav-item"> <NavLink to="/jobs" className="nav-link"> Jobs </NavLink> </li>
          <li className="nav-item"> <NavLink to="/events" className="nav-link"> Events </NavLink> </li>
        </ul>
      </div>
      <div className="d-flex navbar-expand-md text-light align-middle row m-2">
        <p className="d-flex align-middle mr-2">(current user)</p>
        <button className="d-flex align-middle mr-2" onClick={this.onLogOutClickHandler}>Log Out</button>          
      </div>
    </nav>        
      </>
    );
  }
}

export default SiteNav;
