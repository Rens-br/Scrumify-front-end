import React from "react";
import SearchBar from "./SearchBar";
import "./Dashboard.css";
import DashboardProjecList from "./DashboardProjectList";
import DashboardTaskList from "./DashboardTaskList";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const Dashboard = inject("store")(
  observer(props => {
    const [projectSearchTerm, setProjectSearchTerm] = React.useState("");
    const [projectSearchResults, setProjectSearchResults] = React.useState([]);
    /* ------------- TASKS ------------- */
    const [taskSearchTerm, setTaskSearchTerm] = React.useState("");
    const [taskSearchResults, setTaskSearchResults] = React.useState([]);
    /* ------------- HANDLERS ------------- */

    const handleOnProjectSearch = e => {
      setProjectSearchTerm(e.target.value);
    };
    const handleOnTaskSearch = e => {
      setTaskSearchTerm(e.target.value);
    };

    React.useEffect(() => {
      props.store.socketStore.getUser(props.store.userStore.userId);
    }, []);

    // This function will be executed to modify the searchState when a user starts typing.
    React.useEffect(() => {
      // Retrieve all stored projects from our state Store
      // Then filter by organization, so we only get the projects that belong to an organization
      // Loop over those projects and find a match with the given search query.
      // Finally set the searchState accordingly with the matched results.
      const projectResults = props.store.userStore.projects
        .filter(
          x => x.organizationId === props.store.userStore.currentOrganization
        )
        .map(prj => toJS(prj)) // MobX creates [ Proxy ] objects, to undo this we must call the toJS function so our code knows what object to filter on.
        .filter(project =>
          project.projectName
            .toLowerCase()
            .includes(projectSearchTerm.toLowerCase())
        );
      setProjectSearchResults(projectResults);
    }, [
      projectSearchTerm,
      props.store.userStore.currentOrganization,
      props.store.userStore.projects
    ]);

    /* -------- TASK SEARCH --------*/
    React.useEffect(() => {
      // Retrieve all assigned work items and display them
      // Loop over the work items and find a match for work item name and shortdesc.
      const taskResults = props.store.userStore.workItems.filter(wi =>
        wi.title.toLowerCase().includes(taskSearchTerm.toLowerCase())
      );
      // Finally set the searchState accordingly with the matched results
      setTaskSearchResults(taskResults);
    }, [taskSearchTerm, props.store.userStore.workItems]);

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
                  value={projectSearchTerm}
                  onSearch={handleOnProjectSearch}
                />
                <div className="project-list mt-5">
                  <DashboardProjecList
                    value={projectSearchTerm}
                    searchResult={projectSearchResults}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="db-container mt-5">
                <h4>Your Tasks</h4>
                <SearchBar
                  placeholder="Search for a task"
                  onSearch={handleOnTaskSearch}
                  value={taskSearchTerm}
                />
                <div className="task-list mt-5">
                  <DashboardTaskList
                    value={taskSearchTerm}
                    searchResult={taskSearchResults}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  })
);

export default Dashboard;
