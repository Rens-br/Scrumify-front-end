import React from 'react';
import '../css/bootstrap.min.css';
import './DropdownItem.css';


export default class DropdownItem extends React.Component{
  render(){
    return(
        <div className="ddItemContainer" onClick={this.props.onClick}>
            <p className="ddItem" key={this.props.id} >{this.props.label}</p>
        </div>
    );
  }
}