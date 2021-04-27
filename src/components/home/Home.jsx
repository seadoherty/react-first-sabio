import React, { Component } from "react";
import Jumbo from "./Jumbo";
import Content from "./Content";

class Home extends Component {

  render() {
    return (
      <>
        <Jumbo/>
        <Content/>
      </>
    );
  }
}

export default Home;