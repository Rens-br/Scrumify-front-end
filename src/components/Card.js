import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import '../css/Card.css';
import {DragSource} from 'react-dnd';
import {toJS} from 'mobx';

const cardSource = {
	beginDrag(props) {
		return {
			item: toJS(props.workItem),
			callback: props.callback
		};
	},
};

export class Card extends Component{
	render() {
		return this.props.connectDragSource(
			<div style={{backgroundColor: '#ff0000'}}>
				<div id='cardHeader'>
					<p id='cardTitle'>{this.props.workItem.workItemTitle}</p>
					<MaterialIcon id='cardIcon' icon='menu'/>
				</div>
			</div>
		);
	}
}

export default DragSource('card', cardSource, connect => ({
	connectDragSource: connect.dragSource(),
}))(Card);