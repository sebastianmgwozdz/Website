import React, { useState, useEffect } from "react";
import { YAxis, ReferenceLine, Line, LineChart } from "recharts";

const GRAY = "#787777";
const GREEN = "#24e361";
const RED = "#f55936";

export default function Graph(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isNaN(props.dataPoint)) {
      data.push({
        val: props.dataPoint,
        x: data.length,
      });
    } else if (props.data) {
      setData(props.data);
    }
  }, [props.data, props.dataPoint, props.positions]);

  function minMax() {
    let arr = data.map((dp) => {
      return dp.val;
    });
    let incl = [...arr, props.reference];
    let min = Math.min.apply(Math, incl);
    let max = Math.max.apply(Math, incl);

    let diff = max - min;

    return [min - diff / 4, max + diff / 4];
  }

  function ticks(domain) {
    let t = [];
    let diff = domain[1] - domain[0];
    let gap = Math.round(diff / 3);
    console.log(domain);
    console.log(gap);
    for (let i = Math.floor(domain[0]); i <= Math.ceil(domain[1]); i += gap) {
      t.push(Math.round(i));
    }
    console.log(t);
    return t;
  }

  if (data.length <= 1) {
    return null;
  }

  let color;
  let diff = data[data.length - 1]["val"] - props.reference;

  if (Math.abs(diff) < 0.005) {
    color = GRAY;
  } else {
    color = diff > 0 ? GREEN : RED;
  }

  let domain = minMax();

  return (
    <LineChart
      width={props.width ? props.width : 350}
      height={props.height ? props.height : 155}
      data={data}
      margin={{ top: 15, left: 25, right: 25, bottom: 10 }}
    >
      <YAxis
        type="number"
        domain={[domain[0] - 1, domain[1] + 1]}
        ticks={ticks(domain)}
        hide={props.hide}
      ></YAxis>
      <ReferenceLine y={props.reference} strokeDasharray="3 3" />

      <Line
        type="monotone"
        dataKey="val"
        stroke={color}
        dot={false}
        isAnimationActive={false}
        strokeWidth={props.strokeWidth}
      />
    </LineChart>
  );
}
