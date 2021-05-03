import React, { Component } from "react";
import jobsService from "../../services/jobs.js";
import { toast } from "react-toastify";

class AddJobs extends Component {
  state = {
    formData: {
      title: "",
      description: "",
      summary: "",
      pay: "",
      slug: "",
      statusId: "",
      techCompanyId: 0,
      skills: [""],
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
      jobsService
        .add(this.state.formData)
        .then(this.onNewJobSuccess)
        .catch(this.onNewJobError);  
  };

  onNewJobSuccess = (res) => {
    console.log({ job: res });
    toast.success(`Successful Added New Friend!`);
    this.props.history.push("/jobs");
  };
  onNewJobError = (err) => console.log({ error: err });

  render() {
    return (
      <>
        <h1 className="text-center pt-4">Add Job</h1>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <form onSubmit={this.onSubmitHandler} name="addJobForm">
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
                name="description"
                placeholder="Description"
                onChange={this.onChangeHandler}
                value={this.state.formData.description}
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
                name="pay"
                placeholder="Pay"
                onChange={this.onChangeHandler}
                value={this.state.formData.pay}
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
                placeholder="statusId"
                onChange={this.onChangeHandler}
                value={this.state.formData.statusId}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="techCompanyId"
                onChange={this.onChangeHandler}
                value={this.state.formData.techCompanyId}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="skills"
                placeholder="Skills"
                onChange={this.onChangeHandler}
                value={this.state.formData.skills}
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

export default AddJobs;
