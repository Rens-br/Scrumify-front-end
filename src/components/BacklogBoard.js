import { Component } from "react";
import React from "react";
import "./Board.css";
import { inject, observer } from "mobx-react";

const BacklogBoard = inject("store")(
  observer(
    class BacklogBoard extends Component {
      render() {
        return <p>FIX JE KANKER LANDING PAGE X </p>;
      }
    }
  )
);

export default BacklogBoard;
