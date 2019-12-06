import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import '../css/Card.css';

class Card extends Component{
	render() {
		return (
			<div>
				<div id='cardHeader'>
					<p id='cardTitle'>Work Item</p>
					<MaterialIcon id='cardIcon' icon='menu'/>
				</div>
			</div>
		);
	}
}

export default Card;