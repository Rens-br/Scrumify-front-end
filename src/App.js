import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Content from "./components/Content";

import { LoadTheme } from './ThemeProvider';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
    LoadTheme();

    return (
        <div style={{display:'flex', maxWidth: '100%'}} className="App">
            <DndProvider backend={HTML5Backend}>
                <SideBar />
                <Content/>
            </DndProvider>
        </div>
    );
}

export default App;
