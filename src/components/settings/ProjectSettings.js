import React, { Component } from "react";
import './StyleSettings.css';
import {inject, observer} from "mobx-react";
import MaterialIcon from "@material/react-material-icon";


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

    getProjectUsers = () => {
        return this.props.store.projectStore.projectUsers.map(x =>
            <div style={{display: "flex",}}>
                <p>{x.name}</p>
                <MaterialIcon icon='delete' style={{ fontSize: '24px' }}/>
            </div>
        )
    };

    render() {
        return (
            <div className="SettingsViewContainer">
                <p className="SettingsHeader">Project Settings</p>
                {
                    this.state.projId
                        ? <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                            <div className="settingsInputField">
                                <p className="inputTitle">Change project name:</p>
                                <input type="text" className="settingsInputBar" value={this.state.projName}
                                       onChange={(event) => this.setState({projName: event.target.value})}/>
                            </div>
                            <div className="settingsInputField">
                                <p className="inputTitle">Project users:</p>
                                {this.props.store.projectStore.projectUsers.map(x =>
                                    <div key={x.id} style={{display: "flex",}}>
                                        <p>{x.name}</p>
                                        <div onClick={this.props.store.socketStore.removeProjectUser(this.state.projId, x.id)}>
                                        <MaterialIcon icon='delete' style={{ fontSize: '24px' }}/>
                                        </div>
                                    </div>)}
                                <div>Add User</div>
                            </div>
                            < div className="SettingsSubmitBtn" onClick={this.saveChanges}>Save changes</div>
                        </div>
                        : <p>Please select a project first</p>
                }
            </div>
        );
    }
}));

export default ProjectSettings;
