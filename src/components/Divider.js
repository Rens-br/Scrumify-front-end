import React from 'react';
import '../css/bootstrap.min.css';
import '../css/Divider.css';


export default class SideBar extends React.Component{
  render(){
    return(
        <div style={this.props.style} className="dividerDiv"></div>
    );
  }
}