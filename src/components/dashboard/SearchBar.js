import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-div">
        <form className="search-bar">
          <input
            name="search"
            type="text"
            id="search"
            placeholder={this.props.placeholder}
            className="txtInput"
            value={this.props.value}
            onChange={this.props.onSearch}
          />
          {/* <input type="submit" value="Search" className="search-btn" /> */}
        </form>
      </div>
    );
  }
}
export default SearchBar;
