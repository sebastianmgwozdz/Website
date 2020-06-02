import React, { useEffect, useState } from "react";
import Graph from "../PositionsComponents/Graph";
import { get } from "../Helpers";
import { Card } from "antd";

export default function HomeGraph() {
  const [data, setData] = useState({});

  useEffect(() => {
    randomSymbol().then((rand) => {
      get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" +
          rand +
          "&apikey=MZVTEZTGKT653IH3"
      ).then((weeklyData) => {
        setData(weeklyData["Weekly Time Series"]);
      });
    });
  }, []);

  async function randomSymbol() {
    let symbol;
    await get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bpleiinrh5r8m26im1dg"
    ).then((symbols) => {
      let rand = Math.floor(Math.random() * symbols.length);
      symbol = symbols[rand]["symbol"];
    });

    return symbol;
  }

  function formattedData() {
    let form = [];

    let vals = Object.values(data).reverse();

    for (let i = 0; i < vals.length; i += 5) {
      let val = vals[i];
      form.push({ uv: val["1. open"], amt: i });
    }

    return form;
  }

  return (
    <Card hoverable style={{ height: 500, width: 810 }}>
      <Graph
        data={formattedData()}
        height={450}
        width={800}
        strokeWidth={2}
      ></Graph>
    </Card>
  );
}
