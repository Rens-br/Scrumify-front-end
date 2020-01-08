import React from "react";

function Task(props) {
  return (
    <div className="taskItem">
      <div className="projectTaskItemName">{props.title}</div>
      <div className="projectTaskItemId">{props.status}</div>
    </div>
  );
}

export default Task;
