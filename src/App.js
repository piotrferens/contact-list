import React, { Component } from "react";

import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

class App extends Component {
  state = {
    searchEmployee: "",
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.fetchEmployee();
  }

  searchingEmployee = event => {
    const value = event.target.value;
    const filteredEmployee = this.state.employees.filter(employee =>
      employee.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      searchEmployee: value,
      filteredEmployees: filteredEmployee
    });
  };

  fetchEmployee = () => {
    fetch("https://uinames.com/api/?amount=10&ext")
      .then(response => response.json())
      .then(response =>
        this.setState({ employees: response, filteredEmployees: response })
      );
  };

  render() {
    return (
      <div className="app">
        <HomePage
          searchEmployee={this.state.searchEmployee}
          employees={this.state.filteredEmployees}
          searchingEmployee={this.searchingEmployee}
          fetchEmployee={this.fetchEmployee}
        />
        <EmployeePage />
      </div>
    );
  }
}

export default App;
