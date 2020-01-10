import React from "react";
import SideNavBtn from './SideNavBtn.js';
import './SettingSideNav.css';

function SettingSideNav() {
  return (
    <div id="settingsSideNavContainer">
      <SideNavBtn label="Profile Settings" />
      <SideNavBtn label="Organization Settings" />
      <SideNavBtn label="Project Settings" />
      <SideNavBtn label="Preferences" />
    </div>
  );
}

export default SettingSideNav;
