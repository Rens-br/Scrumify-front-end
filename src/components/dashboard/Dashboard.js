import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./Dashboard.css";
import DashboardProjecList from "./DashboardProjectList";
import DashboardTaskList from "./DashboardTaskList";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="d-board">
          <div className="flex-grid">
            <div className="col">
              <div className="db-container mt-5">
                <h4>Your projects</h4>
                <SearchBar placeholder="Search for a project" />
                <div className="project-list mt-5">
                  <DashboardProjecList />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="db-container mt-5">
                <h4>Your tasks</h4>
                <SearchBar placeholder="Search for a task" />
                <div className="task-list mt-5">
                  <DashboardTaskList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
