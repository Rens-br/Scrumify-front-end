import React, { Component } from "react";
import SettingSideNav from "./SettingSideNav";
import "./Settings.css";
import ProfileSettings from "./ProfileSettings";
import ProjectSettings from "./ProjectSettings";
import OrganizationSettings from "./OrganizationSettings";
import Preferences from "./Preferences";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0
    };
  }
  render() {
    const setCurrentScreen = screen => {
      console.log("[RENDER ME PLS]");
      this.setState({ screen: screen });
    };

    /* TODO in future sprint: 
      Change switch logic into 
      renderSwitch(param) {
        switch(param)
         case 0:
           return Component
      }
    */
    switch (this.state.screen) {
      case 0:
        return (
          <div id="settingsBackground">
            <p id="settingsTitle">Settings</p>
            <div className="settingsContainer">
              <div id="settingsSideNavigation">
                <SettingSideNav changeScreen={setCurrentScreen} />
              </div>
              <div id="settingsContentContainer">
                <ProfileSettings />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div id="settingsBackground">
            <p id="settingsTitle">Settings</p>
            <div className="settingsContainer">
              <div id="settingsSideNavigation">
                <SettingSideNav changeScreen={setCurrentScreen} />
              </div>
              <div id="settingsContentContainer">
                <OrganizationSettings />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div id="settingsBackground">
            <p id="settingsTitle">Settings</p>
            <div className="settingsContainer">
              <div id="settingsSideNavigation">
                <SettingSideNav changeScreen={setCurrentScreen} />
              </div>
              <div id="settingsContentContainer">
                <ProjectSettings />
              </div>
            </div>
          </div>
        );
    }
    return (
      <div id="settingsBackground">
        <p id="settingsTitle">Settings</p>
        <div className="settingsContainer">
          <div id="settingsSideNavigation">
            <SettingSideNav changeScreen={setCurrentScreen} />
          </div>
          <div id="settingsContentContainer">
            <Preferences />
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;
