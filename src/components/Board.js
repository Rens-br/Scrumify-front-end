import {Component} from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Board.css';
import Lane from './Lane';
import {inject, observer} from 'mobx-react';

const Board = inject('store')(observer(class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint: this.props.sprint
        }
    }

    render() {
        return (
            <Container id='board'>
                <Row id='row' style={{width: this.state.sprint.lanes.length * 320}}>
                    {this.state.sprint.lanes.map((lane) => <Lane data={lane}/>)}
                </Row>
            </Container>
        );
    }
}));

export default Board;