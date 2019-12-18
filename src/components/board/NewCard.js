import React from 'react';
import { Component } from 'react';
import './NewCard.css';
import EditableTitle from "../EditableTitle";

export default class NewCard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			cardTitle: '',
		};
	}

	onNewWorkItem = () => {
		if(this.state.cardTitle === ''){
			this.props.onCancel();
		}
		else{
			this.props.onCreateWorkItem(this.state.cardTitle);
		}
	};

	render() {
		return (
			<div onClick={this.clickedCard} className="newCard">
					<EditableTitle onStopEditing={() => this.onNewWorkItem()} placeholder='Work item title' startEditing isLocked={this.props.isStatic} title={this.state.cardTitle} titleChanged={(title) => this.props.onCreateWorkItem(title)}/>
			</div>
		);
	}
}