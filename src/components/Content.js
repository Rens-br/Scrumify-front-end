import React from 'react';
import '../css/Content.css'
import Board from "./board/Board";
import { Component } from 'react';
import {inject, observer} from 'mobx-react';
import TopNavBar from './TopNavBar';

const Content = inject('store')(observer(class Content extends Component{
    render() {
        return (
            <div id='content'>
				<TopNavBar />
                <Board sprint={this.props.store.projectStore.sprints[0]}/>
            </div>
        );
    }
}));

export default Content;