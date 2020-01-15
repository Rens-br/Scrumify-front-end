import React, { Component } from "react";
import './StyleSettings.css';
import {inject, observer} from "mobx-react";
import MaterialIcon from "@material/react-material-icon";
import CustomInputField from "../CustomInputField";
import CustomButton from "../CustomButton";


const ProjectSettings = inject('store')(observer(class ProjectSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projId: this.props.store.projectStore.projectId,
            projName: this.props.store.projectStore.projectName,
            addUserPopupOpen: false,
            userEmail: undefined
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

    submitName = () => {
        this.props.store.socketStore.addProjectUser(this.state.projId, this.state.userEmail);
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

                                <div className="SettingsUserList">
                                    {this.props.store.projectStore.projectUsers.map(x =>
                                    <div key={x.id} className="SettingsUserListItem">
                                        <p className="SettingsUserListName">{x.name}</p>
                                        <div onClick={this.props.store.socketStore.removeProjectUser(this.state.projId, x.id)}>
                                            <MaterialIcon icon='delete' style={{ fontSize: '24px', marginTop: "10px" }}/>
                                        </div>
                                    </div>)}
                                </div>
                                <div style={{width: "105px"}} className="SettingsColorBtn" onClick={() => this.setState({addUserPopupOpen: true})}>Add User</div>
                            </div>
                            < div className="SettingsSubmitBtn" onClick={this.saveChanges}>Save changes</div>
                        </div>
                        : <p>Please select a project first</p>
                }
                {this.state.addUserPopupOpen &&
                <div className='settingsPopupBg'>
                    <div className='settingsPopup'>
                        <h1 className='PopupTitle'>Enter new user's email</h1>
                        <div className='PopupInput' id="orgInputField">
                            <CustomInputField style={{minWidth: '500px'}} placeholder='User email' valueChanged={(value) => this.setState({userEmail: value})}/>
                        </div>
                        <div className='PopupButtonHolder'>
                            <div className='PopupButton'><CustomButton label='Cancel' onClick={() => {this.setState({userEmail: undefined, addUserPopupOpen: false})}}/></div>
                            <div className='PopupButton'><CustomButton label='Add User' onClick={this.submitName}/></div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}));

export default ProjectSettings;
