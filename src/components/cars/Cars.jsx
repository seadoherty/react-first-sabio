import React, { Component } from "react";
import CarCard from "./CarCard";

class Cars extends Component {
  state = {
    selectedCar:"",
    showCars: true,
    cars: [
      {
        id: 1,
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        id: 2,
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        id: 3,
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        id: 4,
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        id: 5,
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        id: 6,
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        id: 7,
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        id: 8,
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        id: 9,
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        id: 10,
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        id: 11,
        make: "Ford",
        model: "F-150",
        year: 2021,
      },
    ],
  };

  componentDidMount() {   
    this.getAllCars();
  };
  getAllCars = () => {
    this.setState(() => {
      return {
        mappedCars: this.state.cars.map(this.mapCars),
      };
    });
  };
  mapCars = (oneCar) => {
    return <CarCard key={oneCar.id} car={oneCar} />;
  };
  showHide = () => {
    if (this.state.showCars) {
      this.setState(() => {
        return { showCars: false };
      });
    } else {
      this.setState(() => {
        return { showCars: true };
      });
    }
  };

  filterCars = (yearParam) => {

    this.setState((prevState) => {
      return {
        mappedCars: prevState.cars
          .filter((number) => {
            return number.year === parseInt(yearParam);
          })
          .map(this.mapCars),
      };
    });
  };

  filterOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });

    this.filterCars(event.target.value);
  }

  render() {
    return (
      <>
      <div className="d-flex">
        <button onClick={this.showHide} className="btn btn-primary shadow">
          Show/Hide
        </button>

        <div className="d-flex ml-4">
          <select
          onChange={this.filterOnSelect}
          name="selectedCar"
          value={this.state.selectedCar}
          className="ml-2 btn-primary rounded"
          >
              <option value="">Select a Year</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
          </select>
        </div>

      </div>

        <div className="d-flex justify-content-between align-items-center m-4 bg-light rounded shadow p-1">
          {this.state.showCars
            ? this.state.mappedCars
            : null}
        </div>
      </>
    );
  }
}

export default Cars;
