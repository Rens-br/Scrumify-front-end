import React from "react";
import "../../css/bootstrap.min.css";
import "./NavDropdown.css";
import NavButton from "./NavButton";
import { inject, observer } from "mobx-react";

const NavDropdown = inject("store")(
  observer(
    class NavDropdown extends React.Component {
      render() {
        return (
          <div className="dropdownDiv">
            <NavButton
              id={this.props.isOn ? "activeProject" : "inactiveProject"}
              onClick={this.props.openDropdown}
              icon={
                this.props.isOn ? "keyboard_arrow_down" : "keyboard_arrow_right"
              }
              label={this.props.data.projectName}
            />
            {this.props.isOn && (
              <div className="dropdownBtn">
                <NavButton
                  onClick={() => {
                    this.props.onSprintsClick(this.props.data.projectId);
                    this.props.store.clientStore.toggleSidebar(false);
                  }}
                  icon="directions_run"
                  label="Sprints"
                />
                <NavButton
                  icon="list_alt"
                  label="Backlogs"
                  onClick={() => {
                    this.props.onBacklogClick(this.props.data.projectId);
                    //this.props.store.clientStore.setCurrentScreen(2);
                    this.props.store.clientStore.toggleSidebar(false);
                  }}
                />
              </div>
            )}
          </div>
        );
      }
    }
  )
);
export default NavDropdown;
