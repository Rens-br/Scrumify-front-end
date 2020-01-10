import {Component} from 'react';
import React from 'react';
import './StyleSettings.css';
import {inject, observer} from 'mobx-react';

const ProfileSettings = inject('store')(observer(class ProfileSettings extends Component {


    render() {
        return (
            <div className="SettingsViewContainer">
                <p className="SettingsHeader">Profile Settings</p>
                <div className="settingsInputField">
                    <p className="inputTitle">Change profile name:</p>
                    <input type="text" className="settingsInputBar"></input>
                </div>
                <div className="settingsInputField">
                    <p className="inputTitle">Change email:</p>
                    <input type="text" className="settingsInputBar"></input>
                </div>
                <p className="SettingsHeader">Change password</p>
                <div className="settingsInputField">
                    <p className="inputTitle">Old password:</p>
                    <input type="password" className="settingsInputBar"></input>
                </div>
                <div className="settingsInputField">
                    <p className="inputTitle">Change password:</p>
                    <input type="password" className="settingsInputBar"></input>
                </div>
                <div className="settingsInputField">
                    <p className="inputTitle">Confirm password:</p>
                    <input type="password" className="settingsInputBar"></input>
                </div>
                <div className="SettingsSubmitBtn">Accept changes</div>
            </div>
        );
    }
}));

export default ProfileSettings;