import React, { Component } from "react";
import TopNavBar from "../TopNavBar";
import {inject, observer} from "mobx-react";
const Backlog = inject('store')(observer( class Backlog extends Component {
  render() {
    return (
      <div className="backlogContainer">
        <TopNavBar />
        <div>
            {this.props.store.projectStore.workItems.map(x => <div/>)}
        </div>
      </div>
    );
  }
}));

export default Backlog;
