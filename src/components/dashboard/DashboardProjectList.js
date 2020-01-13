import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Project from "./Project";

const DashboardProjectList = inject("store")(
  observer(
    class DashboardProjectList extends Component {
      handleProject(projectId) {
        this.props.store.projectStore.getProject(projectId);
        this.props.store.clientStore.setCurrentScreen(1);
      }
      render() {
        // Display all projects if there is no on going search
        if (this.props.value === "") {
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
                    key={project.projectId}
                    projectId={project.projectId}
                    projectName={project.projectName}
                    handleProject={this.handleProject.bind(this)}
                  />
                ))}
            </div>
          );
        } else {
          if (this.props.searchResult.length > 0) {
            return (
              <div className="dashboardProjectContainer">
                {this.props.searchResult.map(project => (
                  <Project
                    projectId={project.projectId}
                    projectName={project.projectName}
                    handleProject={this.handleProject.bind(this)}
                  />
                ))}
              </div>
            );
          } else {
            return <div>Your search did not match any projects</div>;
          }
        }
      }
    }
  )
);

export default DashboardProjectList;
