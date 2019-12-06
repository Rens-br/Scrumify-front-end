import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import '../css/Card.css';
import {Draggable} from 'react-beautiful-dnd';

class Card extends Component{
	render() {
		return (
			<Draggable draggableId={this.props.workitem} index={this.props.index}>
				{(provided, snapshot) => (
					<div
						id='card'
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<div id='cardHeader'>
							<p id='cardTitle'>Work Item {this.props.workitem}</p>
							<MaterialIcon id='cardIcon' icon='menu'/>
						</div>
					</div>
				)}
			</Draggable>
		);
	}
}

export default Card;