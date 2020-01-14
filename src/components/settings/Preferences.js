import React, { Component } from "react";
import './StyleSettings.css';
import { SetHighlight, HighlightEnum } from "../../ThemeProvider";
import { inject, observer } from "mobx-react";

const Preferences = inject('store')(observer(class Preferences extends Component {
    render() {
    return(
        <div className="SettingsViewContainer">
            <p className="SettingsHeader">Preferences</p>
            <p className="inputTitle">Change color</p>
            <div className="SettingsColorBtnContainer">
                <div className="SettingsColorBtn" id="pinkBtn" onClick={() => SetHighlight(HighlightEnum.PINK)}>Pink</div>
                <div className="SettingsColorBtn" id="redBtn" onClick={() => SetHighlight(HighlightEnum.RED)}>Red</div>
                <div className="SettingsColorBtn" id="greenBtn" onClick={() => SetHighlight(HighlightEnum.GREEN)}>Green</div>
                <div className="SettingsColorBtn" id="blueBtn" onClick={() => SetHighlight(HighlightEnum.BLUE)}>Blue</div>
                <div className="SettingsColorBtn" id="orangeBtn" onClick={() => SetHighlight(HighlightEnum.ORANGE)}>Orange</div>
                <div className="SettingsColorBtn" id="yellowBtn" onClick={() => SetHighlight(HighlightEnum.YELLOW)}>Yellow</div>
            </div>
        </div>
    );
  }
}
));
export default Preferences;
