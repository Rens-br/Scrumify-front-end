import React from 'react';
import '../css/bootstrap.min.css';
import './SettingsButton.css';
import MaterialIcon from '@material/react-material-icon';


export default class SettingsButton extends React.Component{
  render(){
    return(
        <div className="settingsBtnDiv">
            <MaterialIcon icon="build" style={{ fontSize: '35px' }} className="settingsBtnIcon"/>
        </div>
    );
  }
}