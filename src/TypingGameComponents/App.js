import React from "react";
import NavBar from "./NavBar";
import "./css/App.css";

export default function App(props) {
  return (
    <div className="background">
      <NavBar switchPage={props.switchPage}></NavBar>
    </div>
  );
}
