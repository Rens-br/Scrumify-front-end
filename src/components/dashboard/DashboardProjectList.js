import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Project from "./Project";

const DashboardProjectList = inject("store")(
  observer(
    class DashboardProjectList extends Component {
      constructor(props) {
        super(props);
      }

      handleProject(projectId) {
        //alert(projectId);
        //console.log(this.props);
        this.props.store.projectStore.getProject(projectId);
        this.props.store.clientStore.setCurrentScreen(1);
      }
      render() {
        return (
          <div className="dashboardProjectContainer">
            {this.props.store.userStore.projects
              .filter(
                x =>
                  x.organizationId ===
                  this.props.store.userStore.currentOrganization
              )
              .map(project => (
                <Project
                  projectId={project.projectId}
                  projectName={project.projectName}
                  handleProject={this.handleProject.bind(this)}
                />
              ))}
          </div>
        );
      }
    }
  )
);

export default DashboardProjectList;
