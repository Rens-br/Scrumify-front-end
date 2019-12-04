import React from 'react';
import '../css/bootstrap.min.css';
import '../css/NavDropdown.css';
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
        <div className="dropdownDiv" onClick={this.toggleDropdown}>
            <NavButton label="kkrProject" />
            {this.state.on && (
                <NavButton label="test a neef" />
            )}
        </div>
    );
  }
}