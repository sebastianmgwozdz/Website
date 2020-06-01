import React, { useState, useEffect } from "react";
import Graph from "./Graph";
import { get } from "../Helpers";

export default function MarketCard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        props.symbol +
        "&interval=5min&apikey=MZVTEZTGKT653IH3"
    ).then((res) => {
      if (res) {
        let series = Object.values(res)[1];

        setData(series);
      }
    });
  }, []);

  function firstDataPoint() {
    for (let i = 0; i < Object.keys(data).length - 1; i++) {
      let date = Object.keys(data)[i].substring(0, 10);
      let next = Object.keys(data)[i + 1].substring(0, 10);
      if (date !== next) {
        return i;
      }
    }

    return -1;
  }

  function prevClose() {
    if (data.length <= 1) {
      return data;
    }

    let keys = Object.keys(data);
    for (let i = 1; i < keys.length; i++) {
      let k = keys[i];
      let date = k.substring(0, 10);
      let prev = keys[i - 1].substring(0, 10);
      if (date !== prev) {
        return Object.values(data[k])[3];
      }
    }

    return null;
  }

  function formattedData() {
    console.log(data);
    let vals = Object.values(data);
    return vals
      .map((val, index) => {
        return { uv: Object.values(val)[0], amt: index };
      })
      .slice(0, firstDataPoint() + 1)
      .reverse();
  }

  console.log(firstDataPoint());

  return (
    <div>
      <Graph data={formattedData()} reference={prevClose()}></Graph>
      <div>{props.name + " " + props.symbol}</div>
    </div>
  );
}
