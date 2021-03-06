import {Component} from 'react';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Board.css';
import Lane from './Lane';
import {inject, observer} from 'mobx-react';
import NewLaneButton from './NewLaneButton';

const Board = inject('store')(observer(class Board extends Component {

    getLaneData = (lane) => {
        return {
            sprintId: this.props.sprint.sprintId,
            laneId: lane.laneId,
            laneTitle: lane.laneTitle,
            laneItems: this.props.store.projectStore.workItems === undefined ? [] : this.props.store.projectStore.workItems.filter(x => x.laneId === lane.laneId)
        }
    };

    addLane = () => {
        this.props.store.projectStore.addLane(this.props.sprint.sprintId, 'new lane');
    };

    render() {
        return (
            <Container id='board'>
                <Row id='row' style={{width: this.props.sprint.Lanes.length * 320 + 65}}>
                    {this.props.sprint.Lanes.map((lane, index) => <Lane key={index} data={this.getLaneData(lane)}/>)}
                    <NewLaneButton onClick={this.addLane} />
                </Row>
            </Container>
        );
    }
}));

export default Board;