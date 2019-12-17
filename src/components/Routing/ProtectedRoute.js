import React, { Component } from "react";
import SideBar from "../sidebar/SideBar";
import Content from "..//Content";
import { Redirect } from "react-router-dom";
import LoginScreen from "../LoginScreen";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
class ProtectedRoute extends Component {
  render() {
    let authenticated = false;
    if (!authenticated) {
      return <Redirect to="/login" component={LoginScreen} />;
    }
    return (
      <DndProvider backend={HTML5Backend}>
        <SideBar />
        <Content />
      </DndProvider>
    );
  }
}
export default ProtectedRoute;
