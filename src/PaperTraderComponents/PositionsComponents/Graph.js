import React, { useState, useEffect } from "react";
import {
  YAxis,
  ReferenceLine,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

export default function Graph(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.dataPoint) {
      setData([
        ...data,
        {
          val: props.dataPoint,
          x: data.length,
        },
      ]);
    } else if (props.data) {
      setData(props.data);
    }
  }, [props.dataPoint, props.data]);

  function minMax() {
    let arr = data.map((dp) => {
      return dp.val;
    });
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);

    return [min, max];
  }

  let color =
    (data.length > 0 && data[data.length - 1]["val"] > 0) || props.dataPoint > 0
      ? "#24e361"
      : "#f55936";

  if (data.length <= 1) {
    return null;
  }

  console.log(data);

  return (
    <LineChart
      width={props.width ? props.width : 350}
      height={props.height ? props.height : 155}
      data={data}
      margin={{ top: 15, left: 15, right: 25, bottom: 10 }}
    >
      <YAxis type="number" domain={minMax()} hide></YAxis>
      <ReferenceLine y={props.reference} strokeDasharray="3 3" alwaysShow />
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
