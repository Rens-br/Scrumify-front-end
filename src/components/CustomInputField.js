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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    stopEditing = () => {
        if(this.state.value === this.props.value) return;

        if(this.state.value === ""){
            this.setState({value: this.props.value})
        }else{
            this.props.valueChanged(this.state.value);
        }
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter' && this.props.onSubmit) {
            this.props.onSubmit(this.state.value);
        }
    };

    render() {
        return (
            <div className='customInput'>
                <input onKeyDown={this.handleKeyDown} type={this.props.isPassword ? 'password' : 'text'} placeholder={this.props.placeholder ? this.props.placeholder : ''} onChange={(event) =>this.setState({value: event.target.value})} autoFocus onBlur={this.stopEditing} value={this.state.value} style={this.props.style}/>
                {this.props.icon && <MaterialIcon icon={this.props.icon}/>}
            </div>
        );
    }
}

export default CustomInputField;