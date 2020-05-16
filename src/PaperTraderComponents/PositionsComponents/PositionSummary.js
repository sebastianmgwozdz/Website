import React from "react";
import Header from "./Header";
import { withFirebase } from "../../Firebase";
import ActivePositions from "./ActivePositions";
import PriceCounter from "../CompaniesComponents/PriceCounter";

function PositionSummary(props) {
  return (
    <div>
      <Header returnFunc={props.returnFunc} ticker={props.ticker}></Header>
      <PriceCounter ticker={props.ticker}></PriceCounter>
      <span> Active Positions:</span>
      <ActivePositions ticker={props.ticker}></ActivePositions>
      <span> Closed Positions:</span>
    </div>
  );
}

export default withFirebase(PositionSummary);
