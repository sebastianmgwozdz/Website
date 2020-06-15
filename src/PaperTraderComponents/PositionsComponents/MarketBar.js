import React from "react";
import MarketCard from "./MarketCard";

export default function MarketBar(props) {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid rgb(235, 237, 240)",
        width: "83vw",
      }}
    >
      <MarketCard
        name="NASDAQ"
        symbol="QQQ"
        data={props.marketData["QQQ"]}
      ></MarketCard>
      <MarketCard
        name="DJIA"
        symbol="DIA"
        data={props.marketData["DIA"]}
      ></MarketCard>
      <MarketCard
        name="S&P 500"
        symbol="SPY"
        data={props.marketData["SPY"]}
      ></MarketCard>
    </div>
  );
}
