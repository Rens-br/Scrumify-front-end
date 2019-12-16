import React, {Component} from 'react';
import EditableTitle from "./EditableTitle";
import MaterialIcon from "@material/react-material-icon";
import './CustomInputField.css'

class CustomInputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    stopEditing = () => {
        if(this.state.value === this.props.value) return;

        if(this.state.value === ""){
            this.setState({value: this.props.value})
        }else{
            this.props.valueChanged(this.state.value);
        }

    };

    render() {
        return (
            <div className='customInput'>
                <input type={this.props.isPassword ? 'password' : 'text'} placeholder={this.props.placeholder ? this.props.placeholder : ''} onChange={(event) =>this.setState({value: event.target.value})} autoFocus onBlur={this.stopEditing} value={this.state.value} style={this.props.style}/>
                {this.props.icon && <MaterialIcon icon={this.props.icon}/>}
            </div>
        );
    }
}

export default CustomInputField;