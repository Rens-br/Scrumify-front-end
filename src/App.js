import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Content from "./components/Content";

import {ThemeEnum, ApplyTheme} from './ThemeProvider';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
    ApplyTheme(ThemeEnum.LIGHT);

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
