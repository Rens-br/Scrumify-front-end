import React from 'react';
import '../css/bootstrap.min.css';
import './SideBar.css';


export default class SideBar extends React.Component{
  render(){
    return(
      <div id="sidebar">
      <img src={ require('../img/Scrumify logo wit.png') } alt="KANKER" id="logo"></img>
        <h1 id="title">Scrumify</h1>
        <hr id="divider"/>
      </div>
    );
  }
}