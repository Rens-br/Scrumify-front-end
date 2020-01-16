import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Task from "./Task";
import SimpleBar from "simplebar-react";
const DashboardTaskList = inject("store")(
    observer(
        class DashboardTaskList extends Component {
            makeShortDescription(wi) {
                return this.props.store.userStore.projects
                    .find(project => project.projectId === wi.ProjectId)
                    .projectName.slice(0, 4)
                    .toUpperCase();
            }
            handleSelectedWorkItem() {}

            render() {
                if (this.props.value === "") {
                    return (
                        <div className="dashboardTaskContainer">
                            <SimpleBar style={{maxHeight: '78vh'}}>
                                {this.props.store.userStore.workItems.map(wi => (
                                    <Task
                                        id={wi.id}
                                        title={wi.title}
                                        shortDesc={this.makeShortDescription(wi)}
                                    />
                                ))}</SimpleBar>
                        </div>
                    );
                } else {
                    if (this.props.searchResult.length > 0) {
                        return (
                            <div className="dashboardTaskContainer">
                                <SimpleBar style={{maxHeight: '78vh'}}>
                                    {this.props.searchResult.map(sr => (
                                        <Task
                                            id={sr.id}
                                            title={sr.title}
                                            shortDesc={this.makeShortDescription(sr)}
                                        />
                                    ))}
                                </SimpleBar>
                            </div>
                        );
                    } else {
                        return (
                            <div className="dashboardTaskContainer">
                                <div>Your search did not match any tasks</div>
                            </div>
                        );
                    }
                }
            }
        }
    )
);

export default DashboardTaskList;
