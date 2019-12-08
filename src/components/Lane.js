import React from 'react';
import { Component } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import '../css/Lane.css';
import Card from './Card';
import {inject, observer } from 'mobx-react';
import { DropTarget } from 'react-dnd';
import SimpleBar from 'simplebar-react';
import {CurrentTheme} from '../ThemeProvider';

const laneTarget = {
	drop(targetProps, monitor) {
		monitor.getItem().callback(monitor.getItem().item, targetProps)
	},
};

export const Lane = inject('store')(observer(class Lane extends Component{
	 moveWorkItem = (item, dest) => {
		 this.props.store.projectStore.updateWorkItem(item.workItemId, {laneId: dest.data.laneId});
	};

	render() {
		const { isOver, connectDropTarget } = this.props;
		const style = {
			opacity: isOver ? .8 : 1
		};

		return connectDropTarget(
			<div>
			<Col id='lane' style={style}>
				<div id='laneHeader'>
					<p id="laneTitle">{this.props.data.laneTitle}</p>
				</div>
				<SimpleBar id='cardArea'  forceVisible="y" autoHide="true">
					{this.props.data.laneItems.map((item) => (
						<Card workItem={item} callback={this.moveWorkItem}/>
					))}
				</SimpleBar>
			</Col>
			</div>
		);
	}
}));

export default DropTarget('card', laneTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
}))(Lane);