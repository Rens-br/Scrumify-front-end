import React from 'react';
import '../css/bootstrap.min.css';
import '../css/TopNavBar.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import { NextTheme, NextHighlight } from '../ThemeProvider';
import CustomDropDown from './CustomDropDown';
import SettingsButton from './SettingsButton';


export default class TopNavBar extends React.Component{
  render(){
    return(
        <div className="TopNavBar">
          <CustomDropDown/>
          <SettingsButton />
          <div className="profileButton">
            <div onClick={NextTheme} className="profileButton">
              <MaterialIcon icon="account_circle" style={{ fontSize: '50px' }} className="profileIcon"/>
            </div>
            <div onClick={NextHighlight} className="profileButton">
              <MaterialIcon icon="account_circle" style={{ fontSize: '50px' }} className="profileIcon"/>
            </div></div>
        </div>
    );
  }
}