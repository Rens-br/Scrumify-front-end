import React from 'react';
import '../../css/bootstrap.min.css';
import './NavDropdown.css';
import NavButton from './NavButton';

export default class NavDropdown extends React.Component{

  render(){
    return(
      <div className="dropdownDiv">
        <NavButton onClick={this.props.openDropdown} icon={this.props.isOn ? "keyboard_arrow_down" : "keyboard_arrow_right"} label={this.props.data.projectName} />
        {this.props.isOn && (
          <div className="dropdownBtn">
          <NavButton onClick={() => this.props.onSprintsClick(this.props.data.projectId)} icon="directions_run" label="Sprints"/>
          <NavButton icon="list_alt" label="Backlogs"/>
          </div>
        )}
      </div>
    );
  }
}