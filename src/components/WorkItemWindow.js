import React, {Component, useMemo} from 'react';
import './WorkItemWindow.css'
import MaterialIcon from '@material/react-material-icon';
import TabBar from './TabBar';
import {inject, observer} from 'mobx-react';
import EditableTitle from './EditableTitle';
import SimpleBar from "simplebar-react";
import RichText from "./RichText";
import WorkItemOption from "./WorkItemOption";
import {toJS} from "mobx";

const WorkItemWindow = inject('store')(observer(class WorkItemWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'test',
			workItems: props.store.projectStore.workItems,
			workItemIndex: this.getWorkItemIndex(props.store.clientStore.currentWorkItem),
		};
	}

	getWorkItemIndex = (workItemId) => {
		return this.props.store.projectStore.workItems.indexOf(this.props.store.projectStore.workItems.find(x => x.workItemId === workItemId));
	};

	render() {
		const workItem = this.state.workItems[this.state.workItemIndex];
		console.log(toJS(workItem));

		return (
			<div className='backdrop' onClick={this.props.store.clientStore.closeWorkItem}>
				<div className='window'  onClick={(event) => event.stopPropagation()}>
					<div className='windowHeader'>
						<div className='headerNameTab'>
							<p className='headerId'>#{workItem.workItemId}</p>
							<EditableTitle placeholder='Task' title={workItem.workItemTitle} titleChanged={(title) => this.props.store.projectStore.updateWorkItem(workItem.workItemId, {workItemTitle: title})} className='headerName' style={{ "textAlign": "left", "fontSize": "20px","fontWeight": "600"}}/>
						</div>
						<div onClick={this.props.store.clientStore.closeWorkItem} className='closeBtn'>
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
										<RichText/>
									</SimpleBar>
								</div>
								<div className='workItemOptions'>
									<h1>Settings</h1>
									<div className='optionDivider'/>
									<WorkItemOption title='User' type='ListSelection' default='undefined' value={workItem.workItemUser} />
									<WorkItemOption title='Sprint' type='ListSelection' default='undefined'/>
									<WorkItemOption title='Estimated time' type='NumberSelection' default='0'/>
									<WorkItemOption title='Tag' type='ListSelection' default='undefined' value={workItem.workItemStatus}/>
									<WorkItemOption title='Color' type='ColorSelection' default='dodgerblue'/>
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