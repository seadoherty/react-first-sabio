import React, { Component } from "react";
import companiesService from "../../services/companies.js";
import { toast } from "react-toastify";

class AddCompanies extends Component {
  state = {
    formData: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "Active",
      images: null,
      urls: null,
      tags: null,
      friendsIds: null,
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
    companiesService
      .add(this.state.formData)
      .then(this.onNewCompanySuccess)
      .catch(this.onNewCompanyError);
  };

  onNewCompanySuccess = (res) => {
    console.log({ company: res });
    toast.success(`Successful Added New Company!`);
    this.props.history.push("/companies");
  };
  onNewCompanyError = (err) => console.log({ error: err });

  render() {
    return (
      <>
        <h1 className="text-center pt-4">Add Company</h1>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <form onSubmit={this.onSubmitHandler} name="addCompanyForm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                onChange={this.onChangeHandler}
                value={this.state.formData.name}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="profile"
                placeholder="profile"
                onChange={this.onChangeHandler}
                value={this.state.formData.profile}
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
                placeholder="headline"
                onChange={this.onChangeHandler}
                value={this.state.formData.headline}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="contactInformation"
                placeholder="Contact Information"
                onChange={this.onChangeHandler}
                value={this.state.formData.contactInformation}
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
                placeholder="Status Id"
                onChange={this.onChangeHandler}
                value={this.state.formData.statusId}
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

export default AddCompanies;
