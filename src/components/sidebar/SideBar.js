import React from 'react';
import NavButton from './NavButton';
import Divider from './Divider';
import '../../css/bootstrap.min.css';
import './SideBar.css';
import Header from './Header';
import ProjectList from './ProjectList';


export default class SideBar extends React.Component{
  render(){
    return(
      <div id="sidebar">
        <Header/>
        <Divider />
        <NavButton icon="dashboard" label="Dashboard" path="/newpage" />
        <Divider />
        <ProjectList/>
      </div>
    );
  }
}