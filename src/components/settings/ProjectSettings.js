import React, { Component } from "react";
import './StyleSettings.css';
import {inject, observer} from "mobx-react";


const ProjectSettings = inject('store')(observer(class ProjectSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projId: this.props.store.projectStore.projectId,
            projName: this.props.store.projectStore.projectName
        }
    }

    saveChanges = () => {
        this.props.store.socketStore.updateProject(this.state.projId, this.state.projName);
    };

    render() {
        return (
            <div className="SettingsViewContainer">
                <p className="SettingsHeader">Project Settings</p>
                {
                    this.state.projId
                        ? <div style={{flex: 1, display: 'flex'}}>
                            <div className="settingsInputField">
                                <p className="inputTitle">Change project name:</p>
                                <input type="text" className="settingsInputBar" value={this.state.projName}
                                       onChange={(event) => this.setState({projName: event.target.value})}/>
                            </div>
                            <div className="SettingsSubmitBtn" onClick={this.saveChanges}>Save changes</div>
                        </div>
                        : <p>Please select a project first</p>
                }
            </div>
        );
    }
}));

export default ProjectSettings;
