import React from "react";
import "./NewLaneButton.css";

export default class NewLaneButton extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="newLaneButton">
        <p>Add New Lane</p>
      </div>
    );
  }
}
