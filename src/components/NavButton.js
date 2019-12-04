import React from 'react';
import '../css/bootstrap.min.css';
import '../css/NavButton.css';


export default class NavButton extends React.Component{
  render(){
    return(
        <div className="btnDiv">
            <li style={this.props.style} className="btnText">{this.props.label}</li>
        </div>
    );
  }
}