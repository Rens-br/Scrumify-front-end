import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import './Card.css';
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
			<div id="card">
				<div className='cardHeader'>
					<p>{this.props.workItem.workItemTitle}</p>
					<MaterialIcon icon='more_vert'/>
				</div>
			</div>
		);
	}
}

export default DragSource('card', cardSource, connect => ({
	connectDragSource: connect.dragSource(),
}))(Card);