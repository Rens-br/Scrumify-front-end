import React, { Component } from "react";
import './StyleSettings.css';

class ProjectSettings extends Component {
  render() {
    return (
        <div className="SettingsViewContainer">
            <p className="SettingsHeader">Project Settings</p>
            <div className="settingsInputField">
                <p className="inputTitle">Change project name:</p>
                <input type="text" className="settingsInputBar"></input>
            </div>
            <div className="settingsInputField">
                <p className="inputTitle">Admin password:</p>
                <input type="password" className="settingsInputBar"></input>
            </div>

            <div className="SettingsSubmitBtn">Save changes</div>
        </div>
    );
  }
}

export default ProjectSettings;
