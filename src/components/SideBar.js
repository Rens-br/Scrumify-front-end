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
      <img src={ require('../img/Scrumify logo wit.png') } alt="KANKER" id="logo"></img>
        <h1 id="title">Scrumify</h1>
        <ul>
<<<<<<< HEAD
          <Divider style={{ marginTop: '15px' }}/>
          <NavButton icon="dashboard" label="Dashboard"/>
          <Divider />
          <NavDropdown label="kkrProject" />
          <Divider />
=======
          <Divider />
          <NavButton label="Project"/>
>>>>>>> fe52c40568129e7cb98faccd4ace0df2bd3df050
        </ul>
      </div>
    );
  }
}