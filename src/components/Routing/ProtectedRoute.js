import React, { Component } from "react";
import SideBar from "../sidebar/SideBar";
import Content from "..//Content";
import { Redirect } from "react-router-dom";
import LoginScreen from "../LoginScreen";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {inject, observer} from "mobx-react";
const ProtectedRoute = inject('store')(observer(class ProtectedRoute extends Component {
  render() {
    if (!this.props.store.userStore.loggedIn) {
      return <Redirect to="/login" component={LoginScreen} />;
    }
    return (
      <DndProvider backend={HTML5Backend}>
        <SideBar />
        <Content />
      </DndProvider>
    );
  }
}));
export default ProtectedRoute;
