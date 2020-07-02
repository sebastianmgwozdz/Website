import React, { useState, useEffect } from "react";
import { YAxis, ReferenceLine, AreaChart, Area } from "recharts";

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
    let incl = [...arr, props.reference];
    let min = Math.min.apply(Math, incl);
    let max = Math.max.apply(Math, incl);

    let diff = max - min;

    return [min - diff / 4, max + diff / 4];
  }

  let color =
    (data.length > 0 && data[data.length - 1]["val"] > props.reference) ||
    props.dataPoint > 0
      ? "#24e361"
      : "#f55936";

  if (data.length <= 1) {
    return null;
  }

  console.log(data);

  return (
    <AreaChart
      width={props.width ? props.width : 350}
      height={props.height ? props.height : 155}
      data={data}
      margin={{ top: 15, left: 25, right: 25, bottom: 10 }}
    >
      <defs>
        <linearGradient id={props.reference} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.2} />
          <stop offset="50%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <YAxis type="number" domain={minMax()} hide></YAxis>
      <ReferenceLine y={props.reference} strokeDasharray="3 3" />
      <Area
        type="monotone"
        dataKey="val"
        stroke={color}
        dot={false}
        isAnimationActive={false}
        strokeWidth={props.strokeWidth}
        fillOpacity={1}
        fill={"url(#" + props.reference + ")"}
      />
    </AreaChart>
  );
}
