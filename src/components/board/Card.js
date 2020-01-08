import React from 'react';
import { Component } from 'react';
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
	constructor(props) {
		super(props);
		this.state = {
			wasClicked: false,
			isOpen: false,
			timeout: 200,
		};
	}


	menuItemClicked = (index) => {
		if(index === 0){
			this.props.onRemove(this.props.workItem.workItemId);
		}
	};

	clickedCard = () => {
		if(this.state.wasClicked){
			this.setState({wasClicked: false});
			this.props.onDoubleClick(this.props.workItem.workItemId);
		}
		else{
			this.setState({wasClicked: true});

			setTimeout(() => {
				this.setState({wasClicked: false})
			}, this.state.timeout);
		}
	};

	render() {
		return this.props.connectDragSource(
			<div onClick={this.clickedCard} id="card">
				<div className='cardHeader'>
					<p>{this.props.workItem.workItemTitle}</p>
					<DropDownMenu onOptionClick={this.menuItemClicked} options={['Remove', 'Edit']}/>
				</div>
					<p class="workItemUserName">Rens B</p>
					<p class="workItemUserName">{Math.round(Math.random() * 10 + 1)} hours</p>
			</div>
		);
	}
}

export default DragSource('card', cardSource, connect => ({
	connectDragSource: connect.dragSource(),
}))(Card);