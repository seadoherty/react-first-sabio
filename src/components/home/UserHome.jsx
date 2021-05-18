import React, { Component } from "react";
import usersService from "../../services/users";

class UserHome extends Component {
  state = {
    data: {
      name: "",
    },
  };

  componentDidMount = () => {
    usersService
      .current()
      .then(this.onCurrentUserSuccess)
      .catch(this.onCurrentUserError);
  };

  onCurrentUserSuccess = (res) => {
    console.log({ user: res });

    this.setState(() => {
      let data = { ...this.state.data };
      data.name = res.data.item.name;
      return { data };
    });
  };

  onCurrentUserError = (err) => {
    console.log({ error: err });
  };

  render() {
    return (
      <>
        <h1>Logged In User Page</h1>
        <h2>Welcome {this.state.data.name}</h2>
      </>
    );
  }
}

export default UserHome;
