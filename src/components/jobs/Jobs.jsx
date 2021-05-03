import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Jobs extends Component {
 
  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-4 bg-light rounded shadow p-1">
          <h1 className="m-4">
            Jobs{" "}
            <NavLink to="/jobs/add" className="btn btn-primary">
              {" "}
              + Job{" "}
            </NavLink>
          </h1>
          <form
            onSubmit={this.onSearchSubmitHandler}
            className="d-flex justify-content-between align-items-center mr-4"
          >
            <input
              className="d-flex col form-control"
              type="text"
              onChange={this.onSearchChangeHandler}
              placeholder="Search"
            />
            <input
              type="submit"
              className="btn btn-primary m-2"
              value="Search"
            />
          </form>
        </div>        
      </>
    )
  }
}

export default Jobs;
