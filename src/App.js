import React, { Component } from "react";

import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

class App extends Component {
  state = {
    searchEmployee: "",
    employees: [],
    filteredEmployees: [],
    selectedEmployee: null
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
    fetch("https://uinames.com/api/?amount=50&ext")
      .then(response => response.json())
      .then(response =>
        this.setState({ employees: response, filteredEmployees: response })
      );
  };

  selectEmployee = email => {
    this.setState({
      selectedEmployee: this.state.employees.find(
        employee => employee.email === email
      )
    });
  };

  render() {
    return (
      <div className="app">
        <HomePage
          searchEmployee={this.state.searchEmployee}
          employees={this.state.filteredEmployees}
          searchingEmployee={this.searchingEmployee}
          fetchEmployee={this.fetchEmployee}
          selectEmployee={this.selectEmployee}
        />
        <EmployeePage selectedEmployee={this.state.selectedEmployee} />
      </div>
    );
  }
}

export default App;
