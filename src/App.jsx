import React, { Component } from "react";
import {  Route, withRouter } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Home from "./components/home/Home";
import UserHome from "./components/home/UserHome";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Friends from "./components/friends/Friends";
import AddFriends from "./components/friends/AddFriends";
import Blogs from "./components/blogs/Blogs";
import Companies from "./components/companies/Companies";
import Jobs from "./components/jobs/Jobs";
import Events from "./components/events/Events";
import ProductForm from "./components/products/ProductForm";
import Footer from "./components/Footer";
import "rc-pagination/assets/index.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>

        <SiteNav {...this.props}/>

        <main role="main">
          <Route path="/" exact={true} render={(props)=> <Home {...this.props}/> }/>
          <Route path="/login" exact={true} render={(props)=> <Login {...this.props}/> }/>
          <Route path="/register" exact={true} render={(props)=> <Register {...this.props}/> }/>
          <Route path="/home" exact={true} render={(props)=> <UserHome {...this.props}/> }/>
          <Route path="/friends" exact={true} render={(props)=> <Friends {...this.props}/> }/>
          <Route path="/friends/add" exact={true} render={(props)=> <AddFriends {...this.props}/> }/>
          <Route path="/blogs" exact={true} render={(props)=> <Blogs {...this.props}/> }/>
          <Route path="/companies" exact={true} render={(props)=> <Companies {...this.props}/> }/>
          <Route path="/jobs" exact={true} render={(props)=> <Jobs {...this.props}/> }/>
          <Route path="/events" exact={true} render={(props)=> <Events {...this.props}/> }/>
          <Route path="/productform" exact={true} render={(props)=> <ProductForm {...this.props}/> }/>
        </main>

        <Footer />
        
      </>
    );
  }
}

export default withRouter(App);
