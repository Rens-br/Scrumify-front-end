import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadTheme } from "./ThemeProvider";
import ProtectedRoute from "./components/Routing/ProtectedRoute";
import LandingPage from "./components/LandingPage.js";
import NotFound from "./components/NotFound";
import './App.css'
import {inject, observer} from "mobx-react";
import LoadingScreen from "./components/LoadingScreen";

const App = inject('store')(observer(function App(props) {
  LoadTheme();

  if(props.store.clientStore.isLoading){
    return (
        <LoadingScreen/>
    );
  }
  else{
    return (
        <div
            style={{ display: "flex", maxWidth: "100%", height: "100%" }}
            className="App"
        >
          <Router>
            <Switch>
              <Route exact path="/" component={ProtectedRoute} />
              <Route exact path="/login" component={LandingPage} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
    );
  }
}));

export default App;
