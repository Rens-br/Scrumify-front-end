import React, { Component } from "react";
import './StyleSettings.css';
import { NextHighlight, CurrentHighlight } from "../../ThemeProvider";
import { inject, observer } from "mobx-react";

const Preferences = inject('store')(observer(class Preferences extends Component {
    cycleColor(){
        NextHighlight();
    }

    render() {
    return(
        <div className="SettingsViewContainer">
            <p className="SettingsHeader">Preferences</p>

            <div className="SettingsSubmitBtn" style={{marginTop: "30px", minWidth: "210px"}} onClick={this.cycleColor}>Change colorscheme</div>
        </div>
    );
  }
}
));
export default Preferences;
