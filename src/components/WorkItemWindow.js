import React, {Component} from 'react';
import './WorkItemWindow.css'
import MaterialIcon from '@material/react-material-icon';
import TabBar from './TabBar';

class WorkItemWindow extends Component {
	render() {
		return (
			<div className='backdrop'>
				<div className='window'>
					<div className='windowHeader'>
						<div className='headerNameTab'>
							<p className='headerId'>#12345</p>
							<p className='headerName'>Als backend wil ik een verzoek om een nieuwe workitem te creeëren afhandelen</p>
						</div>
						<div className='closeBtn'>
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
}

export default WorkItemWindow;