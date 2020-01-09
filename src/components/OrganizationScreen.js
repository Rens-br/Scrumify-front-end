import React, {Component} from 'react';
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import {inject, observer} from "mobx-react";

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
            <div>
                <div>
                    <h1>Enter your organization name</h1>
                    <CustomInputField placeholder='organization name' valueChanged={(value) => this.setState({name: value})}/>
                    <CustomButton label='Submit name' onClick={this.submitName}/>
                </div>
            </div>
        );
    }
}));

export default OrganizationScreen;