import React, { Component } from "react";

class Jumbo extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Landing Page!</h1>
            <p>
             Spoiler Alert this is the Landing Page
            </p>
            <p>
              <button className="btn btn-primary btn-lg">
                Learn more &raquo;
              </button>
            </p>
          </div>
        </div>        
      </>
    );
  }
}

export default Jumbo;
