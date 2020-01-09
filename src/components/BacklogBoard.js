import {Component} from 'react';
import React from 'react';
import './Board.css';
import {inject, observer} from 'mobx-react';

const BacklogBoard = inject('store')(observer(class BacklogBoard extends Component {


    render() {
        return (
            <p>Kanker</p>
        );
    }
}));

export default BacklogBoard;