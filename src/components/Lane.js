import React from 'react';
import { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../css/Lane.css';
import Card from './Card';
import {inject, observer } from 'mobx-react';

const Lane = inject('store')(observer(class Lane extends Component{
	render() {
		return (
			<Col id='lane'>
				<div id='laneHeader'>
					<p id="laneTitle">{this.props.data.laneId.toString()}</p>
				</div>
				<div id='cardArea'>
					{this.props.store.projectStore.workItems.filter(x => x.laneId === this.props.data.laneId).map((item, index) => (
						<Card workitem={item} index={index}/>
					))}
				</div>
			</Col>
		);
	}
}));

export default Lane;