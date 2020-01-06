import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-div">
        <form className="search-bar" action="" method="post">
          <input
            name="search"
            type="text"
            id="search"
            placeholder={this.props.placeholder}
            className="txtInput"
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
      </div>
    );
  }
}
export default SearchBar;
