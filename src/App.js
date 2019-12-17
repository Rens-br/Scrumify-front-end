import React from "react";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/Content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadTheme } from "./ThemeProvider";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import ProtectedRoute from "./components/Routing/ProtectedRoute";
import LoginScreen from "./components/LoginScreen";
import NotFound from "./components/NotFound";

function App() {
  LoadTheme();

  return (
    <div
      style={{ display: "flex", maxWidth: "100%", height: "100%" }}
      className="App"
    >
      <Router>
        <Switch>
          <Route exact path="/" component={ProtectedRoute} />
          <Route exact path="/login" component={LoginScreen} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
