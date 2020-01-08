import React, {Component, useMemo} from 'react';
import './WorkItemWindow.css'
import MaterialIcon from '@material/react-material-icon';
import TabBar from './TabBar';
import {inject, observer} from 'mobx-react';
import EditableTitle from './EditableTitle';
import SimpleBar from "simplebar-react";
import RichText from "./RichText";

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
		return (
			<div className='backdrop' onClick={this.props.store.clientStore.closeWorkItem}>
				<div className='window'  onClick={(event) => event.stopPropagation()}>
					<div className='windowHeader'>
						<div className='headerNameTab'>
							<p className='headerId'>#{this.state.workItems[this.state.workItemIndex].workItemId}</p>
							<EditableTitle placeholder='Task' title={this.state.workItems[this.state.workItemIndex].workItemTitle} titleChanged={(title) => this.props.store.projectStore.updateWorkItem(this.state.workItems[this.state.workItemIndex].workItemId, {title: title})} className='headerName' style={{ "textAlign": "left", "fontSize": "20px","fontWeight": "600"}}/>
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
									<div className='option'>
										<p className='optionTitle'>User</p>
										<p className='optionContent'>Rens B</p>
										<div className='optionDivider'/>
									</div>
									<div className='option'>
										<p className='optionTitle'>Sprint</p>
										<p className='optionContent'>new sprint</p>
										<div className='optionDivider'/>
									</div>
									<div className='option'>
										<p className='optionTitle'>Estimated Time</p>
										<p className='optionContent'>4 Hours</p>
										<div className='optionDivider'/>
									</div>
									<div className='option'>
										<p className='optionTitle'>Tag</p>
										<p className='optionContent'>Frontend</p>
										<div className='optionDivider'/>
									</div>
									<div className='option'>
										<p className='optionTitle'>Color</p>
										<p className='optionContent'>Frontend</p>
										<div className='optionDivider'/>
									</div>
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