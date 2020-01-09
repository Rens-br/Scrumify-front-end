import React, {Component} from 'react';
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import {inject, observer} from "mobx-react";
import './OrganizationScreen.css';

const OrganizationScreen = inject('store')(observer(class OrganizationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }
    }

    submitName = () => {
        if(this.state.name === undefined || this.state.name === '') return;

        this.props.store.socketStore.createOrganization(this.props.store.userStore.userId, this.state.name);
    };

    render() {
        return (
            <div id="orgContainer">
                <div id="orgDiv">
                    <h1>Enter your organization name</h1>
                    <div id="orgInputField"><CustomInputField style={{minWidth: '500px'}} placeholder='organization name' valueChanged={(value) => this.setState({name: value})}/></div>
                    <div id="orgInputBtn"><CustomButton label='Submit name' onClick={this.submitName}/></div>
                </div>
            </div>
        );
    }
}));

export default OrganizationScreen;