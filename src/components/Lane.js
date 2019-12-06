import React from 'react';
import { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../css/Lane.css';
import Card from './Card';
import {Droppable} from 'react-beautiful-dnd';
import {inject, observer } from 'mobx-react';

const Lane = inject('store')(observer(class Lane extends Component{
	render() {
		return (
			<Col id='lane'>
				<div id='laneHeader'>
					<p id="laneTitle">{this.props.data.laneId.toString()}</p>
				</div>
				<Droppable droppableId={this.props.data.laneId.toString()}>
					{(provided, snapshot) => (
						<div
							id='cardArea'
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{this.props.data.items.map((item, index) => (
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