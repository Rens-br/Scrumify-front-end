import React from 'react';
import {Component} from 'react';
import './TabBar.css';
import MaterialIcon from '@material/react-material-icon';
import EditableTitle from './EditableTitle';

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
						<EditableTitle title={x} titleChanged={(title) => this.props.onChangeTab(index, title)} className='tabTitle' style={{ "textAlign": "left", "fontSize": "20px","fontWeight": "600"}}/>
						{index === this.state.selected ? <MaterialIcon onClick={() => this.props.onRemoveTab(index)} icon='close'/> : null}
					</div>)}
				<div className='addTab' onClick={this.props.onAddClicked}>
					<MaterialIcon icon='add'/>
				</div>
			</div>
		);
	}
}

export default TabBar;