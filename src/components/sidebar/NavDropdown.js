import React from 'react';
import '../../css/bootstrap.min.css';
import './NavDropdown.css';
import NavButton from './NavButton';

export default class NavDropdown extends React.Component{
    constructor() {
        super();
        this.state = {
          on: false,
        }
    }

    toggleDropdown = () => {
        if (this.state.on) {
            this.setState({
            on: false
            })
        } else {
            this.setState({
            on: true
            })
        }
    }


  render(){
    return(
      <div className="dropdownDiv">
        <NavButton onClick={this.toggleDropdown} icon={this.state.on ? "keyboard_arrow_down" : "keyboard_arrow_right"} label={this.props.data.projectName} />
        {this.state.on && (
          <div className="dropdownBtn">
          <NavButton icon="directions_run" label="Sprints"/>
          <NavButton icon="list_alt" label="Backlogs"/>
          </div>
        )}
      </div>
    );
  }
}