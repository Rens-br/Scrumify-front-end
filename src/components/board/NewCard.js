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

	render() {
		return (
			<div onClick={this.clickedCard} id="card">
				<div className='cardHeader'>
					<EditableTitle onStopEditing={() => this.setState({isAddingProject: false})} placeholder='Project title' startEditing isLocked={this.props.isStatic} titleChanged={(title) => this.onNewProjectCreation(title)} className='newCardTitle'/>
				</div>
			</div>
		);
	}
}