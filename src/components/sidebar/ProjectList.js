import React from 'react';
import '../../css/bootstrap.min.css';
import './ProjectList.css';
import NavDropdown from './NavDropdown';
import { inject, observer } from 'mobx-react';
import NavButton from './NavButton';
import Divider from './Divider';
import EditableTitle from '../EditableTitle';
import MaterialIcon from '@material/react-material-icon';

const ProjectList = inject('store')(observer(class ProjectList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isAddingProject: false
    }
  }

  loadSprints = (projectId) => {
    this.props.store.projectStore.getProject(projectId);
  };

  onNewProjectCreation = (title) => {
    if(title !== ""){
      this.setState({ isAddingProject: false });
      this.props.store.projectStore.addProject(title);
    }
  }


  render(){
    return(
        <div className="projectListDiv">
          {this.props.store.userStore.projects.map((project, index) => <NavDropdown onSprintsClick={this.loadSprints} key={index} data={project}/>)}
          {this.state.isAddingProject && (
            <div className="newProjectBtn">
              <MaterialIcon icon="fiber_new" style={{ fontSize: '24px' }} className="newProjectIcon"/>
              <EditableTitle startEditing isLocked={this.props.isStatic} title="New Project" titleChanged={(title) => this.onNewProjectCreation(title)} className="newProjectBtnText" />
            </div>
          )}
          <Divider />
          <NavButton icon="add" label="New Project" onClick={() => this.setState({isAddingProject: true})}/>

        </div> 
    );
  }
}));

export default ProjectList;