import React from 'react';
import '../../css/bootstrap.min.css';
import './ProjectList.css';
import NavDropdown from './NavDropdown';
import { inject, observer } from 'mobx-react';


const ProjectList = inject('store')(observer(class ProjectList extends React.Component{
  loadSprints = (projectId) => {
    this.props.store.projectStore.getProject(projectId);
  };

  render(){
    return(
        <div className="projectListDiv">
          {this.props.store.userStore.projects.map((project, index) => <NavDropdown onSprintsClick={this.loadSprints} key={index} data={project}/>)}
        </div> 
    );
  }
}));

export default ProjectList;