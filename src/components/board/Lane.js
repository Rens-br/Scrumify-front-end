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
import DropDownMenu from '../sidebar/DropDownMenu';
import NewCard from "./NewCard";

const laneTarget = {
	drop(targetProps, monitor) {
		monitor.getItem().callback(monitor.getItem().item, targetProps)
	},
};

export const Lane = inject('store')(observer(class Lane extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isAdding: false
		}
	}


	moveWorkItem = (item, dest) => {
		 this.props.store.projectStore.updateWorkItem(item.workItemId, {laneId: dest.data.laneId});
	 };

	 changeLaneTitle = (title) => {
		this.props.store.projectStore.updateLaneName(this.props.data.sprintId, this.props.data.laneId, title);
	 };

	 addWorkItem = () => {
	 	this.setState({isAdding: true});
	 };

	 createWorkItem = (title) => {
	 	this.setState({isAdding: false});
	 	this.props.store.projectStore.addWorkItem(this.props.data.laneId, title);
	 };

	 clearLane = () => {
	 	this.props.store.projectStore.workItems.filter(x => x.laneId === this.props.data.laneId).forEach(i => this.props.store.projectStore.updateWorkItem(i.workItemId, {laneId: undefined}));
	 };

	 menuOptionClicked = (index) => {
	 	switch (index) {
			case 0:
					this.props.store.projectStore.removeLane(this.props.data.laneId);
				break;
			case 1:
					this.clearLane();
				break;
			default:
				break;
		}
	 };

	 removeWorkItem = (workItemId) => {
		this.props.store.projectStore.removeWorkItem(workItemId);
	 };

	 workItemClicked = (workItemId) => {
		this.props.store.clientStore.openWorkItem(workItemId);
	 };

	 getUserName= (item) =>{
	 	let user = this.props.store.projectStore.projectUsers.find(x => x.id === item.workItemUser);
		return user ? user.name : 'Unassigned'
	 };

	render() {
		const { isOver, connectDropTarget } = this.props;
		const style = {
			opacity: isOver ? .8 : 1
		};
		return connectDropTarget(
			<div>
			<Col id='lane' style={style}>
				<div className='laneHeader'>
					<EditableTitle titleChanged={this.changeLaneTitle} title={this.props.data.laneTitle} className='laneTitle' style={{maxWidth: '90%', fontSize: "20px","fontWeight": "600"}}/>
					<div className='headerIcons'>
						<MaterialIcon onClick={this.addWorkItem} icon='add'/>
						<DropDownMenu options={['Remove', 'Clear']} onOptionClick={this.menuOptionClicked}/>
					</div>
				</div>
				<SimpleBar id='cardArea'  forceVisible="y" autoHide="true">
					{this.state.isAdding && <NewCard onCreateWorkItem={(title) => this.createWorkItem(title)} onCancel={() => this.setState({isAdding: false})}/>}
					{this.props.data.laneItems.map((item, index) => (
						<Card onDoubleClick={this.workItemClicked} onRemove={() => this.removeWorkItem(item.workItemId)} key={index} workItem={{...item, ...{name: this.getUserName(item)}}} callback={this.moveWorkItem}/>
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