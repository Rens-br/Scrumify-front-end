import {Component} from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Board.css';
import Lane from './Lane';
import {inject, observer} from 'mobx-react';
import NewLaneButton from './NewLaneButton';

const Board = inject('store')(observer(class Board extends Component {

    getLaneData = (lane) => {
        return {
            laneId: lane.laneId,
            laneTitle: lane.laneTitle,
            laneItems: this.props.store.projectStore.workItems.filter(x => x.laneId === lane.laneId)
        }
    };

    render() {
        return (
            <Container id='board'>
                <Row id='row' style={{width: this.props.sprint.lanes.length * 320 + 60}}>
                    {this.props.sprint.lanes.map((lane) => <Lane data={this.getLaneData(lane)}/>)}
                    <NewLaneButton />
                </Row>
            </Container>
        );
    }
}));

export default Board;