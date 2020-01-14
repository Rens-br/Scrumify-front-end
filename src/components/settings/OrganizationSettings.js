import React, { Component } from "react";
import './StyleSettings.css';
import {inject, observer} from "mobx-react";

const OrganizationSettings = inject('store')(observer(class OrganizationSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgId: this.props.store.userStore.currentOrganization,
            orgName: this.props.store.userStore.organizations.find(x => x.id === this.props.store.userStore.currentOrganization).name
        }
    }

    saveChanges = () => {
        this.props.store.socketStore.updateOrganization(this.state.orgId, this.state.orgName);
    };

    render() {
        return (
            <div className="SettingsViewContainer">
                <p className="SettingsHeader">Organization Settings</p>
                <div className="settingsInputField">
                    <p className="inputTitle">Change organization name:</p>
                    <input type="text" className="settingsInputBar" value={this.state.orgName} onChange={(event) => this.setState({orgName: event.target.value})}/>
                </div>
                <div className="SettingsSubmitBtn" onClick={this.saveChanges}>Save changes</div>
            </div>
        );
    }
}));

export default OrganizationSettings;
