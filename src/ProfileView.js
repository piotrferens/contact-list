import React, { Component } from "react";

export default class ProfileView extends Component {
  render() {
    const { selectedEmployee } = this.props;
    return (
      <div key={selectedEmployee.email} className="profile">
        <div className="selectedEmployee">
          <img
            className="selectedEmployeeImage"
            src={selectedEmployee.photo}
            alt=""
          />
          <div className="selectedEmployeeDescription">
            <span>
              {selectedEmployee.name} {selectedEmployee.surname}
            </span>
            <span>Gender: {selectedEmployee.gender}</span>
            <span>Age: {selectedEmployee.age}</span>
            <span>Email: {selectedEmployee.email}</span>
          </div>
        </div>
        <div className="selectedEmployeeInfo">
          <div>
            <span>From </span> <span>{selectedEmployee.region}</span>
          </div>
          <div>
            <span>Phone number </span> <span>{selectedEmployee.phone}</span>
          </div>
          <div>
            <span> Birthday (D/M/Y) </span>
            <span>{selectedEmployee.birthday.dmy}</span>
          </div>
          <div>
            <span> Credit card number</span>
            <span> {selectedEmployee.credit_card.number}</span>
          </div>
        </div>
      </div>
    );
  }
}
