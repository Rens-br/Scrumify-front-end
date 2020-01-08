import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Task from "./Task";
import { toJS } from "mobx";
const DashboardTaskList = inject("store")(
  observer(
    class DashboardTaskList extends Component {
      constructor(props) {
        super(props);
      }

      makeShortDescription(wi) {
        return this.props.store.userStore.projects
          .find(project => project.projectId === wi.ProjectId)
          .projectName.slice(0, 3)
          .toUpperCase();
      }
      handleSelectedWorkItem() {}

      render() {
        return (
          <div className="dashboardTaskContainer">
            {console.log(toJS(this.props.store.userStore.projects))}
            {console.log(toJS(this.props.store.userStore.workItems))}

            {this.props.store.userStore.workItems.map(wi => (
              <Task
                id={wi.id}
                title={wi.title}
                shortDesc={this.makeShortDescription(wi)}
              />
            ))}
          </div>
        );
      }
    }
  )
);

export default DashboardTaskList;
