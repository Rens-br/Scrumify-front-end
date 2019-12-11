import React from 'react';
import {Component} from 'react';
import './TabBar.css';
import MaterialIcon from '@material/react-material-icon';
import EditableTitle from './EditableTitle';
import {CurrentTheme} from '../ThemeProvider';

class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		}
	}

	tabClicked = (index, callBack) => {
		if(index !== this.state.selected){
			this.setState({selected: index});
			callBack(index);
		}
	};

	render() {
		return (
			<div className='tabBar'>
				{this.props.tabs.map((x, index) =>
					<div key={index} onClick={() => this.tabClicked(index, this.props.onTabClicked)} id={index === this.state.selected ? 'active' : ''} className='tab'>
						<EditableTitle title={x} titleChanged={() => console.log('sprint changed')} className='tabTitle' style={{ "font-size": "20px","font-weight": "600"}}/>
						{index === this.state.selected ? <MaterialIcon icon='more_vert'/> : null}
					</div>)}
				<div className='addTab' onClick={this.props.onAddClicked}>
					<MaterialIcon icon='add'/>
				</div>
			</div>
		);
	}
}

export default TabBar;