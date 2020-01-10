import React, { Component } from "react";
import TopNavBar from "../TopNavBar";
class Backlog extends Component {
  render() {
    return (
      <div className="backlogContainer">
        <TopNavBar />
        <div>Een mooi idee voor stijn om op te lossen</div>
      </div>
    );
  }
}

export default Backlog;
