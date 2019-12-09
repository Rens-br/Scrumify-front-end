import React from 'react';
import '../css/bootstrap.min.css';
import '../css/TopNavBar.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import { NextTheme, NextHighlight } from '../ThemeProvider';


export default class TopNavBar extends React.Component{
  render(){
    return(
        <div className="TopNavBar">
          <h1 className="NavBarTitle">NavBar</h1>
          <div className="profileButton">
            <div onClick={NextTheme} className="profileButton">
              <MaterialIcon icon="account_circle" style={{ fontSize: '60px' }} className="profileIcon"/>
            </div>
            <div onClick={NextHighlight} className="profileButton">
              <MaterialIcon icon="account_circle" style={{ fontSize: '60px' }} className="profileIcon"/>
            </div></div>
        </div>
    );
  }
}