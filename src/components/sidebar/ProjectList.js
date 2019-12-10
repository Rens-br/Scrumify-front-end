import React from 'react';
import '../../css/bootstrap.min.css';
import './ProjectList.css';
import NavDropdown from './NavDropdown';
import { inject, observer } from 'mobx-react';


const ProjectList = inject('store')(observer(class ProjectList extends React.Component{
  render(){
    return(
        <div className="projectListDiv">
          {this.props.store.userStore.projects.map((project, index) => <NavDropdown key={index} data={project}/>)}
        </div> 
    );
  }
}));

export default ProjectList;