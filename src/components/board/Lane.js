import React from 'react';
import { Component } from 'react';
import { Col } from 'react-bootstrap';
import './Lane.css';
import Card from './Card';
import { inject, observer } from 'mobx-react';
import { DropTarget } from 'react-dnd';
import SimpleBar from 'simplebar-react';
import MaterialIcon from '@material/react-material-icon';
import EditableTitle from '../EditableTitle';

const laneTarget = {
	drop(targetProps, monitor) {
		monitor.getItem().callback(monitor.getItem().item, targetProps)
	},
};

export const Lane = inject('store')(observer(class Lane extends Component{
	 moveWorkItem = (item, dest) => {
		 this.props.store.projectStore.updateWorkItem(item.workItemId, {laneId: dest.data.laneId});
	 };

	 changeLaneTitle = (title) => {
		this.props.store.projectStore.updateLaneName(this.props.data.sprintId, this.props.data.laneId, title);
	 };

	 addWorkItem = () => {
		this.props.store.projectStore.addWorkItem(this.props.data.laneId, 'new workitem');
	 };

	render() {
		const { isOver, connectDropTarget } = this.props;
		const style = {
			opacity: isOver ? .8 : 1
		};
		console.log(this.props.data.laneItems)
		return connectDropTarget(
			<div>
			<Col id='lane' style={style}>
				<div className='laneHeader'>
					<EditableTitle titleChanged={this.changeLaneTitle} title={this.props.data.laneTitle} className='laneTitle' style={{"fontSize": "20px","fontWeight": "600"}}/>
					<div className='headerIcons'>
						<MaterialIcon onClick={this.addWorkItem} icon='add'/>
						<MaterialIcon icon='more_vert'/>
					</div>
				</div>
				<SimpleBar id='cardArea'  forceVisible="y" autoHide="true">
					{this.props.data.laneItems.map((item, index) => (
						<Card key={index} workItem={item} callback={this.moveWorkItem}/>
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