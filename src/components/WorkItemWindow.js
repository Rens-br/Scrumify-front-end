import React, {Component, useMemo} from 'react';
import './WorkItemWindow.css'
import MaterialIcon from '@material/react-material-icon';
import TabBar from './TabBar';
import {inject, observer} from 'mobx-react';
import EditableTitle from './EditableTitle';
import SimpleBar from "simplebar-react";
import RichText from "./RichText";
import WorkItemOption from "./WorkItemOption";

const WorkItemWindow = inject('store')(observer(class WorkItemWindow extends Component {
	constructor(props) {
		super(props);

		const workItem = this.getWorkItem(props.store.clientStore.currentWorkItem);

		this.state = {
			value: 'test',
			workItems: props.store.projectStore.workItems,
			workItem: workItem,
			workItemSprint: this.getSprint(workItem),
			workItemDesc: this.getWorkItemDescription(workItem)
		};
	}

	getSprint = (workItem) => {
		return workItem.laneId !== null ? (this.props.store.projectStore.sprints.find(x => x.Lanes.find(y => y.laneId === workItem.laneId) !== undefined)).sprintId : undefined;
	};

	changeSprint = (id) => {
		this.updateWorkItem({laneId: id === undefined ? -1 : this.props.store.projectStore.sprints.find(x => x.sprintId === id).Lanes[0].laneId})
	};

	getWorkItem = (workItemId) => {
		return this.props.store.projectStore.workItems.find(x => x.workItemId === workItemId);
	};

	getWorkItemDescription = (workItem) => {
		if(workItem.workItemDescription === null || workItem.workItemDescription === undefined) return undefined;
		return JSON.parse(workItem.workItemDescription);
	};

	updateWorkItem = (changes) => {
		this.setState({workItem: {...this.state.workItem, ...changes}});
	};

	sendWorkItemUpdate = () => {
		const desc = JSON.stringify(this.state.workItemDesc);

		this.props.store.projectStore.updateWorkItem(this.state.workItem.workItemId, {...this.state.workItem, ...{workItemDescription: desc}});
	};

	render() {
		return (
			<div className='backdrop' onClick={() => {
				this.sendWorkItemUpdate();
				this.props.store.clientStore.closeWorkItem();
			}}>
				<div className='window'  onClick={(event) => event.stopPropagation()}>
					<div className='windowHeader'>
						<div className='headerNameTab'>
							<p className='headerId'>#{this.state.workItem.workItemId}</p>
							<EditableTitle placeholder='Task' title={this.state.workItem.workItemTitle} titleChanged={(title) => this.updateWorkItem({workItemTitle: title})} className='headerName' style={{ "textAlign": "left", "fontSize": "20px","fontWeight": "600"}}/>
						</div>
						<div onClick={() => {
							this.sendWorkItemUpdate();
							this.props.store.clientStore.closeWorkItem();
						}} className='closeBtn'>
							<MaterialIcon icon='close'/>
						</div>
					</div>
					<TabBar onTabClicked={(tab) => console.log(tab)} isStatic style={{background: 'var(--color-background-dark)'}} tabs={['Information', 'Discussion']}/>
					<div className='windowContent'>
						<div className='workItemInformation'>
							<div className='top'>
								<div className='workItemDescription'>
									<h1>Description</h1>
									<SimpleBar style={{margin:'10px', maxHeight: '550px', paddingRight: '12px'}}>
										<RichText value={this.state.workItemDesc} onValueChange={(value) => this.setState({workItemDesc: value})}/>
									</SimpleBar>
								</div>
								<div className='workItemOptions'>
									<h1>Settings</h1>
									<div className='optionDivider'/>
									<WorkItemOption title='User' type='ListSelection' default='undefined' value={this.state.workItem.workItemUser} options={Array.from(this.props.store.projectStore.projectUsers, x => x = {id: x.id, title: x.name})} onValueChanged={(value) => this.updateWorkItem({workItemUser: value === undefined ? -1 : value})}/>
									<WorkItemOption title='Sprint' type='ListSelection' default='undefined' value={this.state.workItemSprint} options={Array.from(this.props.store.projectStore.sprints, x => x = {id: x.sprintId, title: x.sprintTitle})} onValueChanged={(value) => this.changeSprint(value)}/>
									<WorkItemOption title='Estimated time' type='NumberSelection' default='0' value={this.state.workItem.workItemTimeEst.toString()} onValueChanged={(value) => this.updateWorkItem({workItemTimeEst: parseFloat(value)})}/>
									<WorkItemOption title='Tag' type='TextSelection' default='undefined' value={this.state.workItem.workItemTag} placeholder='Enter tag' onValueChanged={(value) => this.updateWorkItem({workItemTag: value})}/>
									<WorkItemOption title='Color' type='ColorSelection' default='#ccc' value={this.state.workItem.workItemColor} onValueChanged={(value) => this.updateWorkItem({workItemColor: value})}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}));

export default WorkItemWindow;