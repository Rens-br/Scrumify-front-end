import React, { Component } from "react";
import BacklogItem from "./BacklogItem";
import "./BacklogItemList.css";
import { toJS } from "mobx";

class BackLogItemList extends Component {
  render() {
    /* Retrieves the project data stored in projectStore */
    const sprints = toJS(this.props.sprints);
    const workItems = toJS(this.props.workItems);
    const projectUsers = this.props.users;

    // To get the backlog items we need the following attributes:
    // [ workItemID, workItemTitle, sprintName, assignedUser, status -> laneTitle, label, workItemTimeEst ]

    workItems.map(item => {
      /* -------- USERNAME RETRIEVAL -------- */
      const usr = item.workItemUser; // store the userID assigned to a workItem
      // Search through the projectUsers object projectUsers: { name: 'some name', id: 1}
      // compare the userID with the the userID on the workItem, we want to retrieve the user name
      projectUsers.find(user => {
        // If a match was found, create a new property on the workitems array/object and assign it the property user name
        if (user.id === usr) {
          item.user = user.name;
        }
      });

      /* -------- LANE & SPRINT NAME RETRIEVAL -------- */
      const laneId = item.laneId; // Assign the laneID from the workItem

      // Map over the sprints array
      // Map over the Lanes array
      sprints.map(sprint => {
        sprint.Lanes.map(lane => {
          // Compare the laneID of the workItem to the laneID on the lanes array
          if (lane.laneId === laneId) {
            console.log("FOUND TITLE:", lane.laneTitle);
            // If a match was found, assign a new property to the workitem array/object with the values of sprintTitle and laneTitle
            item.laneTitle = lane.laneTitle;
            item.sprintName = sprint.sprintTitle;
          }
        });
      });
    });

    // TODO future:
    // Rewrite data structure to make this look cleaner
    // This is a dirty way to get each property, ideally we need to adjust the data table.
    const backlogItems = [];
    for (let item of workItems) {
      const backlogItem = (
        <BacklogItem
          id={item.workItemId}
          title={item.workItemTitle}
          assignedUser={item.user}
          sprint={item.sprintName}
          status={item.laneTitle}
          workItemTag={item.workItemTag}
          timeEstimation={item.workItemTimeEst}
          color={item.workItemColor}
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
