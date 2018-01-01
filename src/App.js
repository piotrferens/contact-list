import React, { Component } from "react";

import HomePage from "./HomePage";
import EmployeePage from "./EmployeePage";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <EmployeePage />
      </div>
    );
  }
}

export default App;
