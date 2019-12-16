import React, {Component} from 'react';
import './CustomButton.css';

class CustomButton extends Component {
    render() {
        return (
            <div className='customButton' onClick={this.props.onClick}>
                <h2>{this.props.label}</h2>
            </div>
        );
    }
}

export default CustomButton;