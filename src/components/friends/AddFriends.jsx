import React, { Component } from "react";
import friendsService from "../../services/friends.js";

class Friends extends Component {
  state = {
    formData: {
      title: "Dwight Schrute",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
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
    friendsService
      .add(this.state.formData)
      .then(this.onNewFriendSuccess)
      .catch(this.onNewFriendError);
  };

  onNewFriendSuccess = (res) => {
    console.log({ friend: res });
    this.props.history.push("/friends");
  };

  onNewFriendError = (err) => console.log({ error: err });

  render() {
    return (
      <>
        <h1 className="text-center">Add or Edit Friend</h1>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <form onSubmit={this.onSubmitHandler} name="loginForm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Title"
                onChange={this.onChangeHandler}
                value={this.state.formData.email}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="bio"
                placeholder="Bio"
                onChange={this.onChangeHandler}
                value={this.state.formData.bio}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="summary"
                placeholder="Summary"
                onChange={this.onChangeHandler}
                value={this.state.formData.summary}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="headline"
                placeholder="Headline"
                onChange={this.onChangeHandler}
                value={this.state.formData.headline}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="slug"
                placeholder="Slug"
                onChange={this.onChangeHandler}
                value={this.state.formData.slug}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Status"
                onChange={this.onChangeHandler}
                value={this.state.formData.status}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="primaryImage"
                placeholder="Primary Image"
                onChange={this.onChangeHandler}
                value={this.state.formData.primaryImage}
              />
            </div>

            <div className="d-flex justify-content-end">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Friends;
