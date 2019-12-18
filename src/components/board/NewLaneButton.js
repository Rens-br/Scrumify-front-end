import React from 'react';
import './NewLaneButton.css';
import { Col } from 'react-bootstrap';


export default class NewLaneButton extends React.Component{
  render(){
    return(
        <div onClick={this.props.onClick} className="newLaneButton"><p>Add New Lane</p></div>
    );
  }
}