import React, { Component } from "react";
import friendsService from "../../services/friends.js";
import { toast } from "react-toastify";

class AddFriends extends Component {
  state = {
    formTitle: "",
    formData: {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
    },
  };

  componentDidMount() {
    const { state: locationState } = this.props.location;

    if (locationState && locationState.type === "EDIT_FRIEND") {
      let existingData = { ...locationState.payload };

      this.setState(() => {
        return {
          formTitle: `Update ${existingData.title}`,
          formData: {
            title: existingData.title,
            bio: existingData.bio,
            summary: existingData.summary,
            headline: existingData.headline,
            slug: existingData.slug,
            statusId: "Active",
            primaryImage: existingData.primaryImage.imageUrl,
          },
        };
      });
    } else {
      this.setState(() => {
        return {
          formTitle: "Add Friend",
        };
      });
    }
  }

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
    const { state: locationState } = this.props.location;

    if (locationState && locationState.type === "EDIT_FRIEND") {
      console.log("PUSH");

      console.log(this.props.location.state.payload.id);
      friendsService
        .update(this.state.formData, this.props.location.state.payload.id)
        .then(this.onUpdateFriendSuccess)
        .catch(this.onUpdateFriendError);
    } else {
      console.log("POST DATA");
      friendsService
        .add(this.state.formData)
        .then(this.onNewFriendSuccess)
        .catch(this.onNewFriendError);
    }
  };

  onUpdateFriendSuccess = (res) => {
    console.log({ friend: res });
    toast.success(`Successful Updated Friend!`);
    this.props.history.push("/friends");
  };
  onUpdateFriendError = (err) => console.log({ error: err });

  onNewFriendSuccess = (res) => {
    console.log({ friend: res });
    toast.success(`Successful Added New Friend!`);
    this.props.history.push("/friends");
  };

  onNewFriendError = (err) => console.log({ error: err });

  render() {
    return (
      <>
        <h1 className="text-center pt-4">{this.state.formTitle}</h1>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <form onSubmit={this.onSubmitHandler} name="addFriendForm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Title"
                onChange={this.onChangeHandler}
                value={this.state.formData.title}
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
                name="statusId"
                placeholder="Status"
                onChange={this.onChangeHandler}
                value={this.state.formData.statusId}
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

export default AddFriends;
