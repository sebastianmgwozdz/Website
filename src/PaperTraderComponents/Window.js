import React from "react";
import Positions from "./PositionsComponents/Positions";
import Account from "./Account";
import Companies from "./CompaniesComponents/Companies";

let views = [
  <Positions></Positions>,
  <Companies></Companies>,
  <Account></Account>,
  <div>view4</div>,
  <div>view5</div>,
];

export default function Window(props) {
  return views[props.menuOption];
}
