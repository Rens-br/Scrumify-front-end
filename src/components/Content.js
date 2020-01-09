import React from "react";
import "./Content.css";
import Board from "./board/Board";
import { Component } from "react";
import { inject, observer } from "mobx-react";
import TopNavBar from "./TopNavBar";
import TabBar from "./TabBar";
import { toJS } from "mobx";
import WorkItemWindow from "./WorkItemWindow";
import Dashboard from "./dashboard/Dashboard";
import { Spinner } from "react-bootstrap";
import OrganizationScreen from "./OrganizationScreen";

const Content = inject("store")(
  observer(
    class Content extends Component {
      constructor(props) {
        super(props);
        this.state = {
          sprint: 0
        };
      }

      changeSprint = index => {
        this.setState({ ...this.state, ...{ sprint: index } });
      };

      addSprint = () => {
        this.props.store.projectStore.addSprint("new sprint");
      };

      changeSprintTitle = (index, title) => {
        this.props.store.projectStore.updateSprintTitle(
          this.props.store.projectStore.sprints[index].sprintId,
          title
        );
      };

      removeSprint = index => {
        this.props.store.projectStore.removeSprint(
          this.props.store.projectStore.sprints[index].sprintId
        );
      };

      render() {
        if (this.props.store.clientStore.currentScreen === 0) {
          return (
            <div id="content">
              <TopNavBar />
                {this.props.store.userStore.currentOrganization === undefined ? <OrganizationScreen/> : <Dashboard />}
            </div>
          );
        } else if (this.props.store.clientStore.currentScreen === 1) {
          if (this.props.store.projectStore.projectId !== undefined) {
            return (
              <div id="content">
                <TopNavBar />
                <TabBar
                  onChangeTab={this.changeSprintTitle}
                  tabs={toJS(
                    this.props.store.projectStore.sprints.map(
                      x => x.sprintTitle
                    )
                  )}
                  onTabClicked={this.changeSprint}
                  onAddClicked={this.addSprint}
                  onRemoveTab={this.removeSprint}
                />
                {this.props.store.projectStore.sprints[this.state.sprint] && (
                  <Board
                    sprint={
                      this.props.store.projectStore.sprints[this.state.sprint]
                    }
                  />
                )}
                {this.props.store.clientStore.isWorkItemOpen && (
                  <WorkItemWindow />
                )}
              </div>
            );
          } else {
            return <Spinner className="spinner" animation="border" />;
          }
        }
        // else {
        //   return <h2>JE KANKER MOEDER</h2>;
        // }

        // if (this.props.store.projectStore.projectId !== undefined) {
        //   return (
        //     <div id="content">
        //       <TopNavBar />
        //       <TabBar
        //         onChangeTab={this.changeSprintTitle}
        //         tabs={toJS(
        //           this.props.store.projectStore.sprints.map(x => x.sprintTitle)
        //         )}
        //         onTabClicked={this.changeSprint}
        //         onAddClicked={this.addSprint}
        //         onRemoveTab={this.removeSprint}
        //       />
        //       {this.props.store.projectStore.sprints[this.state.sprint] && (
        //         <Board
        //           sprint={
        //             this.props.store.projectStore.sprints[this.state.sprint]
        //           }
        //         />
        //       )}
        //       {this.props.store.clientStore.isWorkItemOpen && (
        //         <WorkItemWindow />
        //       )}
        //     </div>
        //   );
        // } else {
        //   return (
        //     <div id="content">
        //       <TopNavBar />
        //       <Dashboard />
        //
        //       {/*this.props.store.clientStore.isWorkItemOpen && <WorkItemWindow/>*/}
        //     </div>
        //   );
        // }
      }
    }
  )
);

export default Content;
