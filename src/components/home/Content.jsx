import React, { Component } from "react";
import axios from "axios";

class Content extends Component {
  
  usersService = {
    endpoint: "https://api.remotebootcamp.dev/api/users",
    payload: {
      email: "mj@example.com",
      password: "TestPassword1!",
      tenantId: "U01UMQF15R6",
    },
  };

  config = {
    method: "POST",
    url: `${this.usersService.endpoint}/login`,
    data: this.usersService.payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  // componentDidMount() {
  //   console.log("Test");
  //   return axios(this.config)
  //     .then(function (data) {  console.log(data); })
  //     .catch(function (data) { console.warn(data); });
  // }

  handleClick = () => {
    return axios(this.config)
      .then(function (data) {
        console.log(data);
      })
      .catch(function (data) {
        console.warn(data);
      });
  };

  render() {
    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Console Log
            </button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <button className="btn btn-secondary">
                  View details &raquo;
                </button>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </>
    );
  }
}

export default Content;
