import React from "react";
import Dashboard from "./Dashboard";

let views = [
  <Dashboard></Dashboard>,
  <div>view2</div>,
  <div>view3</div>,
  <div>view4</div>,
  <div>view5</div>
];
export default function Window(props) {
  return views[props.menuOption];
}
