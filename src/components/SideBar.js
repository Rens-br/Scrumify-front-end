import React from 'react';
import NavButton from './NavButton';
import Divider from './Divider';
import '../css/bootstrap.min.css';
import '../css/SideBar.css';
import NavDropdown from './NavDropdown';


export default class SideBar extends React.Component{
  render(){
    return(
      <div id="sidebar">
        <NavButton icon="dashboard" label="KANKER" />
        <Divider />
        <NavButton label="CHEMO" />
        <Divider />
      </div>
    );
  }
}