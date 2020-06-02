import React from "react";
import Positions from "./PositionsComponents/Positions";
import Account from "./Account";
import Companies from "./CompaniesComponents/Companies";
import EarningsCalendar from "./CalendarComponents/EarningsCalendar";

let views = [
  <Positions></Positions>,
  <Companies></Companies>,
  <EarningsCalendar></EarningsCalendar>,
  <Account></Account>,
  <div>view5</div>,
];

export default function Window(props) {
  return views[props.menuOption];
}
