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
    // this.updatePredicate = this.updatePredicate.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  // componentDidMount(){
  //   this.updatePredicate();
  //   window.addEventListener("resize" , this.updatePredicate);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updatePredicate);
  // }

  // updatePredicate(){
  //   this.setState({ isDesktop: window.innerWidth > 1450 });
  // }

  toggleSidebar(){
    if (this.state.isDesktop) {
      this.setState({
        isDesktop: false
      })
    } else {
      this.setState({
        isDesktop: true
      })
    }
    console.log("toggleSidebar clicked");
  }

  render(){
    const isDesktop = this.state.isDesktop;
    return(
      <div>
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