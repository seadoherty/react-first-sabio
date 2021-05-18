import React, { Component } from "react";
import usersService from "../../services/users.js";

class Login extends Component {
  // "email": "mj@example.com",
  // "password": "TestPassword1!",
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U01UMQF15R6",
    },
  };

  onChangeHandler = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    usersService
      .login(this.state.formData)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (res) => {
    console.log({ user: res });
    this.props.history.push("/home");
  };

  onLoginError = (err) => {
    console.log({ error: err });
  };

  render() {
    return (
      <>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <h1 className="text-center">User Login Form</h1>
          <form name="loginForm">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={this.onChangeHandler}
                value={this.state.formData.email}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
                value={this.state.formData.password}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary"
                value="Sign In"
                onClick={this.onSubmitHandler}
              >
                Sign
              </button>
            </div>

            <div className="mb-3">
              <a href="/register">Register here</a>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
