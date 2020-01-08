import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Task from "./Task";

const DashboardTaskList = inject("store")(
  observer(
    class DashboardTaskList extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div className="dashboardTaskContainer">
            {console.log(this.props.store.userStore.workItems[0])}
            {/* {console.log(
              this.props.store.userStore.workItems.map(wi => (
                <Task id={wi.id} title={wi.title} status={wi.status} />
              ))
            )} */}
          </div>
        );
      }
    }
  )
);

export default DashboardTaskList;
