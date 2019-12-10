import React from 'react';
import NavButton from './NavButton';
import Divider from './Divider';
import '../../css/bootstrap.min.css';
import './SideBar.css';
import Header from './Header';
import ProjectList from './ProjectList';
import SmallSideBar from './SmallSideBar';


export default class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isDesktop: true
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount(){
    if(window.innerWidth < 1450){
      this.setState({isDesktop: false});
      document.getElementById('sidebarContainer').style.flex = '50px 0 0';
    } 
  }

  toggleSidebar(){
    if (this.state.isDesktop) {
      this.setState({
        isDesktop: false
      })
      document.getElementById('sidebarContainer').style.flex = '50px 0 0';
    } else {
      this.setState({
        isDesktop: true
      })
      document.getElementById('sidebarContainer').style.flex = '240px 0 0';
    }

    console.log("toggleSidebar clicked");
  }

  render(){
    const isDesktop = this.state.isDesktop;
    return(
      <div id="sidebarContainer" style={{ flex: '240px 0 0' }}>
      {isDesktop && (
      <div id="sidebar">
        <div className="topbar">
          <Header/>
          <Divider />
          <NavButton icon="dehaze" label="Minimize sidebar" onClick={this.toggleSidebar}/>
          <Divider />
          <NavButton icon="dashboard" label="Dashboard" path="/newpage" />
          <Divider />
        </div>
        <div className="bottombar">
          <ProjectList/>
        </div>
        </div>
        )}
      {!isDesktop && (
        <SmallSideBar onClick={this.toggleSidebar}/>
      )}
      </div>
    );
  }
}