import React, { Component } from "react";
import TopNavBar from "../TopNavBar";
import { inject, observer } from "mobx-react";
import BackLogItemList from "./BackLogItemList";
import "./Backlog.css";

const Backlog = inject("store")(
  observer(
    class Backlog extends Component {
      render() {
        // Find organization
        // Find project
        // Display all work items that are related to the project
        // workitem id, title, sprint, assigned user, time est, label, color.
        console.log(this.props.store.projectStore.sprints);
        // const sprint = this.props.store.projectStore.sprints.find(sp => {
        //   sp.lanes.contains(x => x.laneId === this);
        // });
        return (
          <div className="backlog">
            <TopNavBar />
            <h2>Backlog</h2>
            <div className="backlogContainer">
              <BackLogItemList
                workItems={this.props.store.projectStore.workItems}
                sprints={this.props.store.projectStore.sprints}
              />
            </div>

            <div>
              {/* {this.props.store.projectStore.workItems.map(x => (
                <div />
              ))} */}
            </div>
          </div>
        );
      }
    }
  )
);

export default Backlog;
