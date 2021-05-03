import React, { Component } from "react";
import CarCard from "./CarCard";

class Cars extends Component {
  state = {
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
  }

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

  filterCars = (yearParam) => {

    this.setState((prevState) => {
      return {
        mappedCars: prevState.cars
          .filter((number) => {
            return number.year === yearParam;
          })
          .map(this.mapCars),
      };
    });
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

  render() {
    return (
      <>
      <div className="d-flex">
        <button onClick={this.showHide} className="btn btn-primary shadow">
          Show/Hide
        </button>

        <div className="d-flex ml-4">
          <button className="btn btn-primary shadow"onClick={()=>this.filterCars(2019)}>2019</button>
          <button className="btn btn-primary ml-2 shadow"onClick={()=>this.filterCars(2020)}>2020</button>
          <button className="btn btn-primary ml-2 shadow"onClick={()=>this.filterCars(2021)}>2021</button>
        </div>

      </div>

        <div className="d-flex justify-content-between align-items-center m-4 bg-light rounded shadow p-1">
          {this.state.showCars
            ? this.state.mappedCars || this.state.filteredCars
            : null}
        </div>
      </>
    );
  }
}

export default Cars;
