import React from 'react';
import '../css/bootstrap.min.css';
import '../css/Header.css';
import Logo from '../img/Scrumify logo wit.png';


export default class Header extends React.Component{
  render(){
    return(
        <div className="header">
            <img src={Logo} alt="LOGO" className="headerImg" ></img>
            <h1 className="title">Scrumify</h1>
        </div>
    );
  }
}