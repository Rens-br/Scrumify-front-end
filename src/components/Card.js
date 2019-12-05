import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import {Row} from 'react-bootstrap';

class Card extends Component{
	render() {
		return (
			<Row>
				<div id='card'>
					<div>
						<p>Title</p>
						<MaterialIcon icon='menu'/>
					</div>
				</div>
			</Row>
		);
	}
}

export default Card;