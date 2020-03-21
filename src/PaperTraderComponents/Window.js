import React from "react";
import Positions from "./Positions";
import Account from "./Account";

let views = [
  <Positions></Positions>,
  <Account></Account>,
  <div>view3</div>,
  <div>view4</div>,
  <div>view5</div>
];
export default function Window(props) {
  console.log("Window");
  return views[props.menuOption];
}
