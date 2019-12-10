import React from 'react';
import { Component } from 'react'
import './CustomDropDown.css'
import MaterialIcon from '@material/react-material-icon';

class CustomDropDown extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class='customDropDown'>
				<p>Company</p>
				<MaterialIcon icon='keyboard_arrow_down'/>
			</div>
		);
	}
}

export default CustomDropDown;