import React, { useState, useEffect } from "react";
import Graph from "./Graph";
import { get } from "../Helpers";

export default function MarketCard(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    function update() {
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
    }

    update();

    let timer = setInterval(update, 300000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function firstDataPoint() {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length - 1; i++) {
      let date = keys[i].substring(0, 10);
      let next = keys[i + 1].substring(0, 10);
      if (date !== next) {
        return i;
      }
    }

    return -1;
  }

  function prevClose() {
    let keys = Object.keys(data);

    if (keys.length <= 1) {
      return 0;
    }

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
    if (Object.keys(data).length === 0) {
      return [];
    }
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
