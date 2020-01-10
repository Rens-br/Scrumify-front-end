import React, { Component } from "react";
import './StyleSettings.css';

class Preferences extends Component {
  render() {
    return(
        <div className="SettingsViewContainer">
            <p className="SettingsHeader">Preferences</p>

            <div className="SettingsSubmitBtn" style={{minWidth: "700px"}}>Change colorscheme</div>
        </div>
    );
  }
}
export default Preferences;
