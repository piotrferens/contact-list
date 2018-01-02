import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <input
          onChange={this.props.searchingEmployee}
          value={this.props.searchEmployee}
        />
      </div>
    );
  }
}
