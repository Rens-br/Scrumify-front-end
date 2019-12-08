import React from 'react';
import '../css/bootstrap.min.css';
import '../css/TopNavBar.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import {ThemeEnum, ApplyTheme} from '../ThemeProvider';


export default class TopNavBar extends React.Component{
  constructor() {
    super();
    this.state = {
      on: false,
    }
  }

  toggleDarkmode = () => {
    this.setState({
      on: !this.state.on
    })

    ApplyTheme(this.state.on ? ThemeEnum.DARK : ThemeEnum.LIGHT)
  }

  render(){
    return(
        <div className="TopNavBar">
        <h1 className="NavBarTitle">NavBar</h1>
        <div onClick={this.toggleDarkmode} className="profileButton">
          <MaterialIcon icon="account_circle" style={{ fontSize: '60px' }} className="profileIcon"/>
        </div>
        </div>
    );
  }
}