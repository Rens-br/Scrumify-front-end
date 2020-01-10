import React, { Component } from "react";
import './SideNavBtn.css';

class SideNavBtn extends Component {
  render() {
    return (
      <div className="SettingsSideNavBtn" id={this.props.id}>
        <p>{this.props.label}</p>
      </div>
    );
  }
}
export default SideNavBtn;
