import React from 'react';
import '../css/bootstrap.min.css';
import '../css/NavButton.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';


export default class NavButton extends React.Component{
  render(){
    return(
        <div className="btnDiv">
            <li style={this.props.style} className="btnItem">
                <MaterialIcon className="icon" style={{ fontSize: '30px', marginTop: '10px' }} icon={this.props.icon} />
                <p className="btnLabel">{this.props.label}</p>
            </li>
        </div>
    );
  }
}