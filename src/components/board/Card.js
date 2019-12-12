import React from 'react';
import { Component } from 'react';
import MaterialIcon from '@material/react-material-icon';
import './Card.css';
import {DragSource} from 'react-dnd';
import {toJS} from 'mobx';
import DropDownMenu from '../sidebar/DropDownMenu';

const cardSource = {
	beginDrag(props) {
		return {
			item: toJS(props.workItem),
			callback: props.callback
		};
	},
};

export class Card extends Component{
	menuItemClicked = (index) => {
		if(index === 0){
			this.props.onRemove(this.props.workItem.workItemId);
		}
	};

	render() {
		return this.props.connectDragSource(
			<div id="card">
				<div className='cardHeader'>
					<p>{this.props.workItem.workItemTitle}</p>
					<DropDownMenu onOptionClick={this.menuItemClicked} options={['Remove', 'Edit']}/>
				</div>
			</div>
		);
	}
}

export default DragSource('card', cardSource, connect => ({
	connectDragSource: connect.dragSource(),
}))(Card);