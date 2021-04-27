import React, { Component } from "react";
import usersService from "../../services/users";

class Register extends Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U01UMQF15R6",
    },
    terms: false,
  };

  handleOnChange = (e) => {
    let currentTarget = e.currentTarget;
    let name = currentTarget.name;
    let value = currentTarget.value;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[name] = value;
      return { formData };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    usersService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (res) => {
    console.log({ user: res });
    this.props.history.push("/login");
  };

  onRegisterError = (err) => console.log({ error: err });

  render() {
    return (
      <>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <h1 className="text-center">User Registration Form</h1>
          <form name="registrationForm" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email address"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                placeholder="Retype password"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="url"
                className="form-control"
                name="avatarUrl"
                placeholder="Avatar Url"
                onChange={this.handleOnChange}
              />
            </div>

            <div className="d-flex justify-content-end">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>

            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="terms"
              />
              <label className="form-check-label" for="terms">
                I agree to the <a href="#">terms</a>
              </label>
            </div> */}
          </form>
        </div>
      </>
    );
  }
}

export default Register;
