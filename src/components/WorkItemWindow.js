import React, {Component} from 'react';
import './WorkItemWindow.css'
import MaterialIcon from '@material/react-material-icon';
import TabBar from './TabBar';
import {inject, observer} from 'mobx-react';
import EditableTitle from './EditableTitle';

const WorkItemWindow = inject('store')(observer(class WorkItemWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workItem: this.getWorkItemFromStore(props.store.clientStore.currentWorkItem)
		};
	}

	getWorkItemFromStore = (workItemId) => {
		return this.props.store.projectStore.workItems.find(x => x.workItemId === workItemId);
	};

	render() {
		return (
			<div className='backdrop'>
				<div className='window'>
					<div className='windowHeader'>
						<div className='headerNameTab'>
							<p className='headerId'>#{this.state.workItem.workItemId}</p>
							<EditableTitle title={this.state.workItem.workItemTitle} titleChanged={(title) => console.log('edit')} className='tabTitle' style={{ "textAlign": "left", "fontSize": "20px","fontWeight": "600"}}/>
						</div>
						<div onClick={this.props.store.clientStore.closeWorkItem} className='closeBtn'>
							<MaterialIcon icon='close'/>
						</div>
					</div>
					<TabBar onTabClicked={(tab) => console.log(tab)} isStatic style={{background: 'var(--color-background-dark)'}} tabs={['Information', 'Discussion']}/>
					<div className='windowContent'>
						<div className='workItemInformation'>
							<div className='top'>
								<div className='workItemDescription'></div>
								<div className='workItemOptions'></div>
							</div>
							<div className='bottom'>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}));

export default WorkItemWindow;