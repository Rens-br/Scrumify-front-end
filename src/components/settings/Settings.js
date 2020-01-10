import React, { Component } from "react";
import SettingSideNav from "./SettingSideNav";
import './Settings.css';
import ProfileSettings from "./ProfileSettings";

class Settings extends Component {
  render() {
    return (
      <div id="settingsBackground">
        <p id="settingsTitle">Settings</p>
        <div className="settingsContainer">
          <div id="settingsSideNavigation">
            <SettingSideNav />
          </div>
          <div id="settingsContentContainer">
            <ProfileSettings />
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;
