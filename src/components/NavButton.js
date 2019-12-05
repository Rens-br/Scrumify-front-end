import React from 'react';
import '../css/bootstrap.min.css';
import '../css/NavButton.css';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';


export default class NavButton extends React.Component{
  ocEvent = () => {
    alert('You clicked a button'+this.props.path);
  }

  render(){
    return(
        <div className="btnDiv" onClick={this.ocEvent}>
            <MaterialIcon className="btnIcon" icon={this.props.icon} style={{ fontSize: '24px' }}/>
            <p className="btnText">{this.props.label}</p>
        </div>
    );
  }
}