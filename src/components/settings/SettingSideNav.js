import React from "react";
import SideNavBtn from "./SideNavBtn.js";
import "./SettingSideNav.css";

function SettingSideNav(props) {
  return (
    <div id="settingsSideNavContainer">
      <SideNavBtn
        label="Profile Settings"
        onClick={() => props.changeScreen(0)}
      />
      <SideNavBtn
        label="Organization Settings"
        onClick={() => props.changeScreen(1)}
      />
      <SideNavBtn
        label="Project Settings"
        onClick={() => props.changeScreen(2)}
      />
      <SideNavBtn label="Preferences" onClick={() => props.changeScreen(3)} />
    </div>
  );
}

export default SettingSideNav;
