import React, { Component } from "react";

import HeaderList from "./HeaderList";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <HeaderList />
        <SearchBar />
        <EmployeeList />
      </div>
    );
  }
}
