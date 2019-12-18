import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Project from "./Project";

const DashboardProjectList = inject("store")(
  observer(
    class DashboardProjectList extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <ul>
            {this.props.store.userStore.projects
              .filter(
                x =>
                  x.organizationId ===
                  this.props.store.userStore.currentOrganization
              )
              .map(project => (
                <Project projectName={project.projectName} />
              ))}
          </ul>
        );
      }
    }
  )
);

export default DashboardProjectList;
