import React from 'react';
import {Component} from 'react';
import './TabBar.css';
import MaterialIcon from '@material/react-material-icon';

class TabBar extends Component {

	render() {
		return (
			<div className='tabBar'>
				<div className='tab'>
					<p>Sprint 1</p>
				</div>
				<div className='tab' id='active'>
					<p>Sprint 2</p>
				</div>
				<div className='tab'>
					<p>Sprint 3</p>
				</div>
				<div className='tab'>
					<p>Sprint 4</p>
				</div>
				<div className='addTab'>
					<MaterialIcon icon='add'/>
				</div>
			</div>
		);
	}
}

export default TabBar;