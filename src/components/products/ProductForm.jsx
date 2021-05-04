import React, { Component } from "react";
import productsService from "../../services/products.js";
import { toast } from "react-toastify";

class ProductForm extends Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: 0,
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

    productsService
      .add(this.state.formData)
      .then(this.onAddProductSuccess)
      .catch(this.onLoginError);
  };

  onAddProductSuccess = (res) => {
    console.log(`The product was created with id: ${res.data.item}`);
    toast.success(`Successful Entity creation ID: ${res.data.item}`);
    this.props.history.push("/home");
  };

  onAddProductError = (err) => {
    console.log({ error: err });
    toast.error("Entity was not added properly please try again");
  };

  render() {
    return (
      <div className="w-50 p-3 mx-auto shadow m-5 rounded">
        <h1 className="text-center">Product Form</h1>
        <form name="productForm" onSubmit={this.onSubmitHandler}>
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
              name="manufacturer"
              placeholder="Manufacturer"
              onChange={this.onChangeHandler}
              value={this.state.formData.manufacturer}
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
              type="number"
              className="form-control"
              name="cost"
              placeholder="Cost"
              onChange={this.onChangeHandler}
              value={this.state.formData.cost}
            />
          </div>

          <div className="d-flex justify-content-end">
            <input
              type="submit"
              className="btn btn-primary"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
