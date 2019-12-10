import React from 'react';
import './NewLaneButton.css';
import { Col } from 'react-bootstrap';


export default class NewLaneButton extends React.Component{
  render(){
    return(
        <Col className="newLaneButton"><p>Add New Lane</p></Col>
    );
  }
}