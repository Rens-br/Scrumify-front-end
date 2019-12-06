import React from 'react';
import '../../css/bootstrap.min.css';
import './ProjectList.css';
import NavDropdown from './NavDropdown';
import Divider from './Divider';


export default class ProjectList extends React.Component{
  render(){
    return(
        <div className="projectListDiv">
          <NavDropdown />
          <Divider />
        </div>
    );
  }
}