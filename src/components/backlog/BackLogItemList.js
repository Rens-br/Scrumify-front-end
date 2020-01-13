import React, { Component } from "react";
import BacklogItem from "./BacklogItem";
import "./BacklogItemList.css";
import { toJS } from "mobx";

class BackLogItemList extends Component {
  render() {
    const sprints = toJS(this.props.sprints);
    console.log("SPRINTS", sprints);
    const workItems = toJS(this.props.workItems);
    const projectUsers = this.props.users;
    console.log("BACKLOG PROJECT USERS", this.props.users);
    //const titles = [];
    workItems.map(item => {
      const laneId = item.laneId;
      sprints.map(sprint => {
        sprint.Lanes.map(lane => {
          if (lane.laneId === laneId) {
            console.log("FOUND TITLE:", lane.laneTitle);
            //titles.push(lane.laneTitle);
            item.laneTitle = lane.laneTitle;
          }
        });
      });
    });
    workItems.map(item => {
      const usr = item.workItemUser;
      projectUsers.find(user => {
        if (user.id === usr) {
          //titles.push(user.name);
          item.user = user.name;
        }
      });
    });
    workItems.map(item => {
      const laneId = item.laneId;
      sprints.map(sprint => {
        sprint.Lanes.map(lane => {
          if (lane.laneId === laneId) {
            console.log("FOUND SPRINT TITLE", sprint.sprintTitle);
            item.sprintName = sprint.sprintTitle;
          }
        });
      });
    });
    const backlogItems = [];
    for (let item of workItems) {
      console.log("time:", item);
      const backlogItem = (
        <BacklogItem
          id={item.workItemId}
          title={item.workItemTitle}
          assignedUser={item.user}
          sprint={item.sprintName}
          status={item.laneTitle}
          timeEstimation={item.workItemTimeEst}
        />
      );
      backlogItems.push(backlogItem);
    }

    return (
      <div className="backlogItemListContainer">
        <div className="backlogItem">
          <div>ID</div>
          <div>TITLE</div>
          <div>SPRINT</div>
          <div>ASSIGNED USER</div>
          <div>STATUS</div>
          <div>LABEL</div>
          <div>Time Estimation</div>
        </div>
        {backlogItems}
      </div>
    );
  }
}

export default BackLogItemList;
