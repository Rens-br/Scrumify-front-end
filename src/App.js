import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Content from "./components/Content";

import { LoadTheme } from './ThemeProvider';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import LoginScreen from "./components/LoginScreen";

function App() {
    LoadTheme();

    return (
        <div style={{display:'flex', maxWidth: '100%', height:'100%'}} className="App">
            <DndProvider backend={HTML5Backend}>
                {/*<LoginScreen/>*/}
                <SideBar/>
                <Content/>
            </DndProvider>
        </div>
    );
}

export default App;
