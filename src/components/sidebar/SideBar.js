import React from 'react';
import NavButton from './NavButton';
import Divider from './Divider';
import '../../css/bootstrap.min.css';
import './SideBar.css';
import Header from './Header';
import ProjectList from './ProjectList';


export default class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = 
  }

  render(){
    return(
      <div id="sidebar">
        <div className="topbar">
          <Header/>
          <Divider />
          <NavButton icon="dashboard" label="Dashboard" path="/newpage" />
          <Divider />
        </div>
        <div className="bottombar">
          <ProjectList/>
        </div>
      </div>
    );
  }
}