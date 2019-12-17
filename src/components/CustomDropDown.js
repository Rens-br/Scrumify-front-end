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
	};

	getOrganizationName() {
		let org = this.props.store.userStore.organizations[this.props.store.userStore.currentOrganization - 1];
		return org ? org.name : 'unknown'
	}

	render() {
		return (
			<div className='customDropDown' onClick={this.toggleDropdown}>
				{/* TODO: fix selecting organizations from dropdown */}
				<DropdownItem label={this.getOrganizationName()} />
				<MaterialIcon icon='keyboard_arrow_down'/>
				{this.state.dropdownToggled && (
					<div className="extendedDropdown">
				{this.props.store.userStore.organizations.map((obj) => <DropdownItem className="ddItem" label={obj.name} key={obj.id} onClick={() => this.onSelegitct(obj.id)}/>)}
						{/*<DropdownItem onClick={this.props.store.userStore.setCurrentOrganization(null)} label="Empty" key={0}/>*/}
					</div>
				)}
			</div>
		);
	}
}));

export default CustomDropDown;