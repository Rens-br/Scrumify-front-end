import React, {Component} from 'react';
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";

class OrganizationScreen extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Enter your organization name</h1>
                    <CustomInputField placeholder='organization name'/>
                    <CustomButton label='Submit name'/>
                </div>
            </div>
        );
    }
}

export default OrganizationScreen;