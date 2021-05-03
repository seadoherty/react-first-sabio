import React, { Component } from "react";

class Blogs extends Component {
  state = {
    formData: {
      firstName: "Seamus",
      lastName: "Doherty",
      email: "",
      color: "Red",
      agree: false,
    },
    isModalOpen: false,
    hasMadeAjax: true,
    arrayOfComp: [],
  };

  onChangeHandler = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.type==="checkbox"? currentTarget.checked: currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      console.log({ formData });

      return { formData };
    });
  };

  render() {
    return (
      <>
        <div className="w-50 p-3 mx-auto shadow m-5 rounded">
          <h1 className="text-center">Blogs Test Form</h1>
          <form name="testForm">
            <label htmlFor="exampleFormControlSelect1">Fav Color</label>
            <select
              onChange={this.onChangeHandler}
              className="form-select"
              name="color"
              value={this.state.formData.color}
            >
              <option value="">Select Color</option>
              <option value="1">Red</option>
              <option value="2">Green</option>
              <option value="3">Blue</option>
            </select>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="agree"
                onChange={this.onChangeHandler}
                value={this.state.formData.agree}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agree to Terms
              </label>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Blogs;
