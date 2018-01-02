import React, { Component } from "react";

import HeaderEmployee from "./HeaderEmployee";
import ProfileView from "./ProfileView";

export default class EmployeePage extends Component {
  render() {
    return (
      <div className="employeePage">
        <HeaderEmployee />
        {this.props.selectedEmployee ? (
          <ProfileView selectedEmployee={this.props.selectedEmployee} />
        ) : null}
      </div>
    );
  }
}
