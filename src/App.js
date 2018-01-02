import React, { Component } from "react";

import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

class App extends Component {
  state = {
    searchEmployee: "",
    employees: []
  };

  componentDidMount() {
    this.fetchEmployee();
  }

  searchEmployee = e => {
    this.setState({ searchEmployee: e.target.value });
  };

  fetchEmployee = () => {
    fetch("https://uinames.com/api/?amount=10&ext")
      .then(response => response.json())
      .then(response => this.setState({ employees: response }));
  };

  render() {
    return (
      <div className="app">
        <HomePage />
        <EmployeePage />
      </div>
    );
  }
}

export default App;
