import React from 'react';
import { Component } from 'react'
import './CustomDropDown.css'
import MaterialIcon from '@material/react-material-icon';
import DropdownItem from './DropdownItem';
import { inject, observer } from 'mobx-react';

const CustomDropDown = inject('store')(observer(class CustomDropDown extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dropdownToggled: false
		};
		this.onSelect = this.onSelect.bind(this);
	};

	toggleDropdown = () => {
		this.setState({dropdownToggled: !this.state.dropdownToggled});
	};

	onSelect(id) {
		this.props.store.userStore.setCurrentOrganization(id);
		this.props.store.clientStore.setCurrentScreen(0);
		this.props.store.projectStore.clearProject();
	};

	getOrganizationName() {
		let org = this.props.store.userStore.organizations.find(x => x.id === this.props.store.userStore.currentOrganization);
		return org ? org.name : 'unknown'
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = (e) => {
		if(this.state.dropdownToggled) {
			if (this.node.contains(e.target)) {
				return;
			}

			this.setState({dropdownToggled: false});
		}
	};

	render() {
		if(this.props.store.userStore.organizations.length > 1) {
			return (
				<div  ref={node => this.node = node} className='customDropDown' onClick={this.toggleDropdown}>
					<DropdownItem label={this.getOrganizationName()}/>
					<MaterialIcon icon='keyboard_arrow_down'/>
					{this.state.dropdownToggled && (
						<div className="extendedDropdown">
							{this.props.store.userStore.organizations.map((obj) => <DropdownItem className="ddItem"
																								 label={obj.name}
																								 key={obj.id}
																								 onClick={() => this.onSelect(obj.id)}/>)}
						</div>
					)}
				</div>
			);
		}
		else{
			return (
				<div className='disabledDropdown'>
					<p>{this.getOrganizationName()}</p>
				</div>
			);
		}
	}
}));

export default CustomDropDown;