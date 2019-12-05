import React from 'react';
import NavButton from './NavButton';
import Divider from './Divider';
import '../css/bootstrap.min.css';
import '../css/SideBar.css';
import NavDropdown from './NavDropdown';
import Header from './Header';


export default class SideBar extends React.Component{
  render(){
    return(
      <div id="sidebar">
        <Header/>
        <Divider />
        <NavButton icon="dashboard" label="Dashboard" />
        <Divider />
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
        <NavDropdown/>
        <Divider/>
      </div>
    );
  }
}