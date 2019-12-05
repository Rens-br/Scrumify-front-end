import React from 'react';
import '../css/bootstrap.min.css';
import '../css/NavButton.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';


export default class NavButton extends React.Component{
  render(){
    return(
        <div className="btnDiv">
            <MaterialIcon className="btnIcon" icon={this.props.icon} style={{ fontSize: '24px' }}/>
            <p className="btnText">{this.props.label}</p>
        </div>
    );
  }
}