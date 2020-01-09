import React from 'react';
import {Component} from 'react';
import './EditableTitle.css';

class EditableTitle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			wasClicked: false,
			isEditing: this.props.startEditing,
			timeout: 200,
		}
	}

	clickedTitle = () => {
		if(this.state.wasClicked || this.props.singleClick){
			this.setState({wasClicked: false, isEditing: true})
		}
		else{
			this.setState({wasClicked: true});

			setTimeout(() => {
				this.setState({wasClicked: false})
			}, this.state.timeout);
		}
	};

	stopEditing = () => {
		this.setState({wasClicked: false, isEditing: false});

		if(this.state.title === "" || this.state.title === this.props.title){
			this.setState({title: this.props.title});
			if(this.props.onStopEditing)this.props.onStopEditing();
		}else{
			this.props.titleChanged(this.state.title);
		}
	};

	static getDerivedStateFromProps(props, state) {
		if(state.isEditing) return null;

		if (state.title !== props.title) {
			return {
				title: props.title
			}
		}
		return null
	}

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			this.stopEditing();
		}
	};

	render() {
		if(this.state.isEditing && !this.props.isLocked){
			return (
				<div className={this.props.className}>
					<input onKeyDown={this.handleKeyDown} type={this.props.number ? 'number' : 'text'} placeholder={this.props.placeholder ? this.props.placeholder : ''} onChange={(event) =>this.setState({title: event.target.value})} autoFocus onBlur={this.stopEditing} value={this.state.title} style={this.props.style} className='inputField'/>
				</div>
			)
		}else{
			return (
				<div onClick={this.clickedTitle} className={this.props.className}>
					<p style={this.props.style} className='title'>{this.state.title === '' || this.state.title === undefined ? '0' : this.state.title}</p>
				</div>
			)
		}
	}

}

export default EditableTitle;