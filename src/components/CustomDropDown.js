import React from 'react';
import { Component } from 'react'
import './CustomDropDown.css'
import MaterialIcon from '@material/react-material-icon';
import DropdownItem from './DropdownItem';

class CustomDropDown extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dropdownToggled: false
		}
	}

	toggleDropdown = () => {
		this.setState({dropdownToggled: !this.state.dropdownToggled})
		console.log(this.state.dropdownToggled);
	}

	render() {
		return (
			<div className='customDropDown' onClick={this.toggleDropdown}>
				<p>Company</p>
				<MaterialIcon icon='keyboard_arrow_down'/>
				{this.state.dropdownToggled && (
					<div className="extendedDropdown">
						<DropdownItem className="ddItem" label="Testing123"/>
						<DropdownItem className="ddItem" label="kkRens"/>
						<DropdownItem className="ddItem" label="Rens sloopt alles"/>
						<DropdownItem className="ddItem" label="!ez4rens"/>
					</div>
				)}
			</div>
		);
	}
}

export default CustomDropDown;