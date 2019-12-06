import {Component} from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Board.css';
import Lane from './Lane';
import {inject, observer} from 'mobx-react';
import {DragDropContext} from 'react-beautiful-dnd';

const Board = inject('store')(observer(class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprint: this.props.sprint,
            lanes: []
        }
    }

    componentDidMount() {
        this.getLanes(this.state.sprint)
    }

    getLanes(sprint){
        let newLanes = [];
        sprint.lanes.forEach(lane => {
            newLanes.push({
                laneId: lane.laneId.toString(),
                items: this.props.store.projectStore.workItems.filter(x => x.laneId === lane.laneId).map(x => x.workItemId.toString())
            })
        })
        this.setState({...this.state, ...{lanes: newLanes}})
        this.forceUpdate()
        console.log(this.state)
    }

    onDragEnd = (result) => {
        let OldLanes = this.state.lanes;
        let sourceLane = OldLanes.find(x => x.laneId == result.source.droppableId);
        let destLane = OldLanes.find(x => x.laneId == result.destination.droppableId);

        let newSouce = sourceLane;
        newSouce.items = sourceLane.items.filter(x => x != result.draggableId);
        let newDest = destLane;
        newDest.items.push(result.draggableId);

        OldLanes[OldLanes.indexOf(sourceLane)] = newSouce;
        OldLanes[OldLanes.indexOf(destLane)] = newDest;

        console.log(OldLanes)

        this.setState({lanes: OldLanes})
        console.log(this.state)
    };

    render() {
        console.log(this.state.lanes)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Container id='board'>
                    <Row id='row' style={{width: this.state.sprint.lanes.length * 320}}>
                        {this.state.lanes.map((lane) => <Lane data={lane}/>)}
                    </Row>
                </Container>
            </DragDropContext>
        );
    }
}));

export default Board;