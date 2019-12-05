import React from 'react';
import '../css/bootstrap.min.css';
import '../css/TopNavBar.css';


export default class TopNavBar extends React.Component{
  render(){
    return(
        <div className="TopNavBar">
        <h1 className="NavBarTitle">NavBar</h1>
        </div>
    );
  }
}