import React, { Component } from "react";

export default class EmployeeListItem extends Component {
  render() {
    return this.props.employees.map(employee => (
      <div
        key={employee.email}
        onClick={() => this.props.selectEmployee(employee.email)}
      >
        <img className="employeeImage" src={employee.photo} alt="" />
        <div className="employeeDescription">
          <span className="employeeName">
            {employee.name} {employee.surname}
          </span>
          <span>
            Gender: {employee.gender} Age: {employee.age} From:{" "}
            {employee.region}
          </span>
        </div>
      </div>
    ));
  }
}
