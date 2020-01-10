import React, { Component } from "react";
import './StyleSettings.css';

class OrganizationSettings extends Component {
  render() {
    return (
        <div className="SettingsViewContainer">
            <p className="SettingsHeader">Organization Settings</p>
            <div className="settingsInputField">
                <p className="inputTitle">Change organization name:</p>
                <input type="text" className="settingsInputBar"></input>
            </div>
            <div className="settingsInputField">
                <p className="inputTitle">Admin password:</p>
                <input type="password" className="settingsInputBar"></input>
            </div>

            <div className="SettingsSubmitBtn">Accept changes</div>
        </div>
    );
  }
}
export default OrganizationSettings;
