import React, { Component } from "react";

import EmployeeListItem from "./EmployeeListItem";

export default class EmployeeList extends Component {
  render() {
    return (
      <div className="employeeList">
        <EmployeeListItem
          employees={this.props.employees}
          fetchEmployee={this.props.fetchEmployee}
        />
      </div>
    );
  }
}
