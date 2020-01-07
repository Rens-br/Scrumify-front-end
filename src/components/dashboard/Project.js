import React from "react";
import "./DashboardProject.css";
function Project(props) {
  return (
    <div
      onClick={() => props.handleProject(props.projectId)}
      className="projectListItem"
    >
      <div className="projectListItemName">{props.projectName}</div>
      <div className="projectListItemId">{props.projectId}</div>
    </div>
  );
}
export default Project;
