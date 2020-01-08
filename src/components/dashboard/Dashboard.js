import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./Dashboard.css";
import DashboardProjecList from "./DashboardProjectList";
import DashboardTaskList from "./DashboardTaskList";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

// React.useEffect(() => {
//   const projectResults = people.filter(person =>
//     person.toLowerCase().includes(searchTerm)
//   );
//   setSearchResults(results);
// }, [searchTerm]);
const Dashboard = inject("store")(
  observer(props => {
    const [projectSearchTerm, setProjectSearchTerm] = React.useState("");
    const [projectSearchResults, setProjectSearchResults] = React.useState([]);
    const [searchMessage, setSearchMessage] = React.useState("");
    /* ------------- TASKS ------------- */
    const [taskSearchTerm, setTaskSearchTerm] = React.useState("");
    const [taskSearchResults, setTaskSearchResults] = React.useState([]);
    /* ------------- HANDLERS ------------- */
    // const handleOnProjectSubmit = e => {
    //   e.preventDefault();
    //   alert(projectSearchTerm);
    // };

    // const handleOnTaskSubmit = e => {
    //   e.preventDefault();
    // };

    const handleOnProjectSearch = e => {
      setProjectSearchTerm(e.target.value);
      // Pass projectSearchResults to DashboardProjectList
      // By default show all projects
      // If user starts typing, filter the list and display those results.
    };
    const handleOnTaskSearch = e => {
      setTaskSearchTerm(e.target.value);
    };

    React.useEffect(() => {
      const projectResults = props.store.userStore.projects
        .filter(
          x => x.organizationId === props.store.userStore.currentOrganization
        )
        .map(prj => toJS(prj))
        .filter(project =>
          project.projectName.toLowerCase().includes(projectSearchTerm)
        );
      setProjectSearchResults(projectResults);
    }, [projectSearchTerm]);

    return (
      <React.Fragment>
        <div id="d-board">
          <div className="flex-grid">
            <div className="col">
              <div className="db-container mt-5">
                <h4>Your Projects</h4>
                <SearchBar
                  headerText="Your Projects"
                  placeholder={"Search for a project"}
                  // handleOnSubmit={handleOnProjectSubmit}
                  value={projectSearchTerm}
                  onSearch={handleOnProjectSearch}
                />
                <div className="project-list mt-5">
                  <DashboardProjecList
                    value={projectSearchTerm}
                    searchResult={projectSearchResults}
                    searchMessage={searchMessage}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="db-container mt-5">
                <h4>Your Tasks</h4>
                <SearchBar
                  placeholder="Search for a task"
                  // handleOnSubmit={handleOnTaskSubmit}
                  onSearch={handleOnTaskSearch}
                  value={taskSearchTerm}
                />
                <div className="task-list mt-5">
                  <DashboardTaskList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  })
);

// function Dashboard() {
//   /* ------------ PROJECTS ----------- */

// }
export default Dashboard;
