import React, { useState, useEffect } from "react";
import Graph from "./Graph";
import { get } from "../Helpers";

export default function MarketCard(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

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
      .map((v, index) => {
        return { val: Object.values(v)[0], x: index };
      })
      .slice(0, firstDataPoint() + 1)
      .reverse();
  }

  return (
    <div>
      {data ? (
        <Graph
          data={formattedData()}
          reference={prevClose()}
          width={300}
          height={105}
        ></Graph>
      ) : null}

      <div>{props.name + " " + props.symbol}</div>
    </div>
  );
}
