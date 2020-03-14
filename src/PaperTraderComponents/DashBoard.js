import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import { withFirebase } from "../Firebase";
import Sidebar from "./Sidebar";

function DashBoard(props) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTick(tick + 1);
    }, 5000);
  }, [tick]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar></Sidebar>
      <StockCard ticker="BINANCE:BTCUSDT" tick={tick}></StockCard>
      <StockCard ticker="AAPL" tick={tick}></StockCard>
    </div>
  );
}

export default withFirebase(DashBoard);
