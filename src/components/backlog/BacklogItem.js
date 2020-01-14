import React, { Component } from "react";
import "./BacklogItem.css";
class BacklogItem extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.id)} className="backlogItem" style={{borderLeftColor: this.props.color === null ? 'rgb(204,204,204' : this.props.color}}>
        <div className="backlogID" id="blID">{this.props.id}</div>
        <div className="backlogTitle" id="blTitle">{this.props.title}</div>
        <div className="backlogSprint">{this.props.sprint}</div>
        <div className="backlogWorkItemUser">{this.props.assignedUser}</div>
        <div className="backlogStatus">{this.props.status}</div>
        <div className="backlogLabel">{this.props.workItemTag}</div>
        <div className="backlogTimeEstimation" id="blTimeEstimation">{this.props.timeEstimation}</div>
      </div>
    );
  }
}
export default BacklogItem;
