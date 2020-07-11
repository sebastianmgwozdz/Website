import React, { useState } from "react";
import { withFirebase } from "../../Firebase";
import PositionSummary from "./PositionSummary";
import CardGrid from "./CardGrid";
import BalanceButton from "./BalanceButton";
import MarketBar from "./MarketBar";

const buttonStyle = {
  position: "fixed",
  top: "82vh",
  left: "82vw",
  width: "12vw",
  height: "8vh",
  fontSize: "22px",
  backgroundColor: "#24e361",
  borderColor: "#24e361",
};

function Positions(props) {
  const [selectedStock, setSelectedStock] = useState("");

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
      <MarketBar marketData={props.marketData}></MarketBar>

      <CardGrid clickFunc={setSelectedStock}></CardGrid>
      <BalanceButton style={buttonStyle} shape="round"></BalanceButton>
    </div>
  );
}

export default withFirebase(Positions);
