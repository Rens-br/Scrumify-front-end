import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./Dashboard.css";
import DashboardProjecList from "./DashboardProjectList";
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
                  <ul>
                    <li>Test 1</li>
                    <li>Test 2</li>
                    <li>Test 3</li>
                    <li>Test 4</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="search-row">
            <div class="col">
              <SearchBar />
              <div>Your Projects</div>
            </div>
          </div>
          <div className="search-row">
            <div class="col">
              <div>Your tasks</div>
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
// {this.props.store.userStore.projects
//   .filter(
//     x =>
//       x.organizationId ===
//       this.props.store.userStore.currentOrganization
//   )
//   .map((project, index) => (
//     <NavDropdown
//       openDropdown={() => this.onOpenProject(index)}
//       isOn={
//         index === this.props.store.clientStore.currentProjectIndex
//       }
//       onSprintsClick={this.loadSprints}
//       key={index}
//       data={project}
//     />
//   ))}
