import React from 'react';
import '../../css/bootstrap.min.css';
import './NavButton.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';


export default class NavButton extends React.Component{
  ocEvent = () => {
    console.log('Kappertje te duur, neem dan een chemokuur');
  }

  render(){
    console.log(this.props.label);
    return(
        <div className="btnDiv" onClick={this.ocEvent}>
            <MaterialIcon className="btnIcon" icon={this.props.icon} style={{ fontSize: '24px' }}/>
            <p style={{ textOverflow: 'ellipsis' }} className="btnText">{this.props.label}</p>
        </div>
    );
  }
}