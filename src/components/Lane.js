import React from 'react';
import { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../css/Lane.css';
import Card from './Card';
import {Droppable} from 'react-beautiful-dnd';
import {inject, observer} from 'mobx-react';

const Lane = inject('store')(observer(class Lane extends Component{
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.store.projectStore.workItems.filter(x => x.laneId === this.props.data.laneId)
		};
	}

	render() {
		return (
			<Col id='lane'>
				<div id='laneHeader'>
					<p>{this.props.data.laneTitle}</p>
				</div>
				<Droppable droppableId={this.props.data.laneId}>
					{(provided, snapshot) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{this.state.items.map((item, index) => (
								<Card workitem={item} index={index}/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</Col>
		);
	}
}));

export default Lane;