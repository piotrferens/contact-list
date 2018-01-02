import React, { Component } from "react";

export default class EmployeeListItem extends Component {
  render() {
    return (
      <div>
        {this.props.employees.map(employee => (
          <p key={employee.email}>{employee.name}</p>
        ))}
      </div>
    );
  }
}
