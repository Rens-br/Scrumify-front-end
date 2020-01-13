import React, { Component } from "react";
import BacklogItem from "./BacklogItem";
import "./BacklogItemList.css";
class BackLogItemList extends Component {
  render() {
    // const getBackLogItems = wi => {
    //   const sprint = this.props.sprints.find(sp =>
    //     sp.Lanes.includes(x => x.laneId === wi.laneId)
    //   )(
    //     <BacklogItem
    //       id={wi.workItemId}
    //       title={wi.workItemTitle}
    //       assignedUser={wi.workItemUser}
    //       sprint={sprint.sprintTitle}
    //       status
    //       label
    //       timeEstimation={wi.workItemTimeEst}
    //     />
    //   );
    // };
    return (
      <div className="backlogItemListContainer">
        <div className="backlogItem">
          <div></div>
          <div>ID</div>
          <div>TITLE</div>
          <div>SPRINT</div>
          <div>STATUS</div>
          <div>LABEL</div>
          <div>Time Estimation</div>
        </div>
        {this.props.workItems.map(wi => (
          <BacklogItem
            id={wi.workItemId}
            title={wi.workItemTitle}
            assignedUser={wi.workItemUser}
            sprint={wi.laneId}
            // sprint={sprint.sprintTitle}
            status
            label
            timeEstimation={wi.workItemTimeEst}
          />
        ))}
      </div>
    );
  }
}

export default BackLogItemList;
