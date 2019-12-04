import React from 'react';
import { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../css/Lane.css';

class Lane extends Component{
	render() {
		return (
			<Col id='lane'>
				<div id='laneHeader'>
					<p>{this.props.data.laneTitle}</p>
				</div>
				<Container>

				</Container>
			</Col>
		);
	}
}

export default Lane;