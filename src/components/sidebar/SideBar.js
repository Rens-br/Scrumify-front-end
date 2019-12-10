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
    this.state = {
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize" , this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate(){
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  render(){
    const isDesktop = this.state.isDesktop;
    return(
      {isDesktop && (
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
      )}
    );
  }
}