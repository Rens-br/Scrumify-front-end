import React from 'react';
import '../css/Content.css'
import Board from "./board/Board";
import { Component } from 'react';
import {inject, observer} from 'mobx-react';
import TopNavBar from './TopNavBar';
import TabBar from './TabBar';
import {toJS} from 'mobx';

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

	render() {
        return (
            <div id='content'>
				<TopNavBar />
				<TabBar tabs={toJS(this.props.store.projectStore.sprints.map(x => x.sprintTitle))} onTabClicked={this.changeSprint}/>
                <Board sprint={this.props.store.projectStore.sprints[this.state.sprint]}/>
            </div>
        );
    }
}));

export default Content;