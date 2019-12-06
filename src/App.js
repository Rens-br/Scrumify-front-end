import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Board from "./components/Board";
import Content from "./components/Content";

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <SideBar />
                <Content/>
            </DndProvider>
        </div>
    );
}

export default App;
