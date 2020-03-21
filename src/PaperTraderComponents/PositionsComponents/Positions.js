import React, { useState } from "react";
import { withFirebase } from "../../Firebase";
import PositionSummary from "./PositionSummary";
import CardGrid from "./CardGrid";
import BalanceButton from "./BalanceButton";

function Positions(props) {
  const [selectedStock, setSelectedStock] = useState("");

  console.log("Positions");

  if (selectedStock) {
    return (
      <PositionSummary
        returnFunc={setSelectedStock}
        ticker={selectedStock}
      ></PositionSummary>
    );
  }

  return (
    <div>
      <CardGrid clickFunc={setSelectedStock}></CardGrid>
      <BalanceButton></BalanceButton>
    </div>
  );
}

export default withFirebase(Positions);
