import React from 'react';
import '../css/Content.css'
import Board from "./board/Board";
import { Component } from 'react';
import {inject, observer} from 'mobx-react';
import TopNavBar from './TopNavBar';
import TabBar from './TabBar';
import {toJS} from 'mobx';
import {Spinner} from 'react-bootstrap';

const Content = inject('store')(observer(class Content extends Component{
	constructor(props) {
		super(props);
		this.state = {
			sprint: 0
		}
	}

	changeSprint = (index) => {
		this.setState({...this.state, ...{sprint: index}});
	};

	addSprint = () => {
		this.props.store.projectStore.addSprint('new sprint')
	};

	render() {

		if(this.props.store.projectStore.projectId !== undefined) {
			return (
				<div id='content'>
					<TopNavBar/>
					<TabBar tabs={toJS(this.props.store.projectStore.sprints.map(x => x.sprintTitle))}
							onTabClicked={this.changeSprint} onAddClicked={this.addSprint}/>
					<Board sprint={this.props.store.projectStore.sprints[this.state.sprint]}/>
				</div>
			);
		}
		else{
			return (
				<div id='content'>
					<TopNavBar/>
					<Spinner className='spinner' animation='border'/>
				</div>
			)
		}
    }
}));

export default Content;