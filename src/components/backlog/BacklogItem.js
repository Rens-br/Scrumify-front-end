import React, { Component } from "react";
import "./BacklogItem.css";
class BacklogItem extends Component {
  render() {
    return (
      <div className="backlogItem" style={{borderLeftColor: this.props.color === null ? 'rgb(204,204,204' : this.props.color}}>
        <div className="backlogID">{this.props.id}</div>
        <div className="backlogTitle">{this.props.title}</div>
        <div className="backlogSprint">{this.props.sprint}</div>
        <div className="backlogWorkItemUser">{this.props.assignedUser}</div>
        <div className="backlogStatus">{this.props.status}</div>
        <div className="backlogLabel">{this.props.workItemTag}</div>
        <div className="backlogTimeEstimation">{this.props.timeEstimation}</div>
      </div>
    );
  }
}
export default BacklogItem;
