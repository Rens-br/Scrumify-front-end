import React from 'react';
import SideBar from './components/sidebar/SideBar';
import Board from "./components/Board";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Content/>
    </div>
  );
}

export default App;
