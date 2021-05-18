import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import companiesService from "../../services/companies";
import CompanyCard from "./CompanyCard";

class Companies extends Component {
  state = {
    pageIndex: 0,
    pageSize: 4,
  };

  componentDidMount() {
    this.onGetFriends();
  }

  onGetFriends = () => {
    companiesService
      .all(this.state.pageIndex, this.state.pageSize)
      .then(this.onGetAllCompaniesSuccess)
      .catch(this.onGetAllCompaniesError);
  };

  onGetAllCompaniesSuccess = (res) => {
    console.log(res);

    this.setState(() => {
      return {
        mappedCompanies: res.data.item.pagedItems.map(this.mapCompanies),
      };
    });
  };

  onGetAllCompaniesError = (err) => console.log({ error: err });

  mapCompanies = (oneCompany) => {
    return(
      <CompanyCard 
        key={oneCompany.id} 
        company={oneCompany} 
      />
    );
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-4 bg-light rounded shadow p-1">
          <h1 className="m-4">
            Tech Companies{" "}
            <NavLink to="/companies/add" className="btn btn-primary">
              {" "}
              + Company{" "}
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
        <div className="shadow rounded p-5 m-5">
          <div className="d-flex justify-content-center mx-auto">
            {this.state.mappedCompanies}
          </div>
        </div>

      </>
    );
  }
}

export default Companies;
