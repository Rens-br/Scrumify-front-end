import React, { Component } from "react";
import TopNavBar from "../TopNavBar";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import BackLogItemList from "./BackLogItemList";
import "./Backlog.css";

// const sprints = [
//   {
//     sprintId: 0,
//     sprintTitle: "a",
//     lanes: [
//       {
//         laneId: 0,
//         laneTitle: "test"
//       }
//     ]
//   }
// ];

// const lanes = [
//   {
//     laneId: 0,
//     laneTitle: 'b'
//   }
// ]

// const workItems = [{ id: 0, title: "balbal", laneId: 0 }];

const Backlog = inject("store")(
    observer(
        class Backlog extends Component {

            openWorkItem = (workItemId) => {
                this.props.store.clientStore.openWorkItem(workItemId);
            };

            render() {
                console.log(toJS(this.props.store.projectStore));
                console.log(
                    "PROJECT USERS:",
                    toJS(this.props.store.projectStore.projectUsers)
                );
                // Find organization
                // Find project
                // Display all work items that are related to the project
                // workitem id, title, sprint, assigned user, time est, label, color.

                // const sprint = this.props.store.projectStore.sprints.find(sp => {
                //   sp.lanes.contains(x => x.laneId === this);
                // });
                if (this.props.store.projectStore.projectId === undefined) {
                    return <div>MY awesome loading screen</div>;
                } else {
                    return (
                        <div className="backlog">
                            <TopNavBar />
                            <h2 id="backlogTitle">Backlog</h2>
                            <div className="backlogContainer">
                                <BackLogItemList
                                    onClick={this.openWorkItem}
                                    workItems={this.props.store.projectStore.workItems}
                                    sprints={this.props.store.projectStore.sprints}
                                    users={toJS(this.props.store.projectStore.projectUsers)}
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
        }
    )
);

export default Backlog;
