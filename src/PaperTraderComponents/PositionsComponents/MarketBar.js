import React from "react";
import DayCard from "./DayCard";

export default function MarketBar(props) {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid rgb(235, 237, 240)",
        width: "83vw",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <DayCard
        name="NASDAQ"
        data={props.marketData["QQQ"]}
        width={300}
        height={105}
      ></DayCard>
      <DayCard
        name="DJIA"
        data={props.marketData["DIA"]}
        width={300}
        height={105}
      ></DayCard>
      <DayCard
        name="S&P 500"
        data={props.marketData["SPY"]}
        width={300}
        height={105}
      ></DayCard>
    </div>
  );
}
