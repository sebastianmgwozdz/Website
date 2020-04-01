import React, { useState, useEffect } from "react";
import { AreaChart, Area, ReferenceLine, YAxis } from "recharts";

export default function Graph(props) {
  const [data, setData] = useState([]);

  console.log("Graph");

  useEffect(() => {
    if (props.dataPoint) {
      setData([
        ...data,
        {
          uv: props.dataPoint,
          amt: data.length
        }
      ]);
    }
  }, [props.dataPoint, props.quote]);

  function minMax() {
    let arr = data.map(val => {
      return val.uv;
    });
    return [Math.min(arr), Math.max(arr)];
  }

  let color = props.dataPoint > 0 ? "#24e361" : "#f55936";

  return (
    <div>
      <AreaChart
        width={350}
        height={155}
        data={data}
        margin={{ top: 40, right: 30, left: 30, bottom: 10 }}
      >
        <defs>
          <linearGradient id={props.ticker} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.4} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <YAxis type="number" domain={[minMax()[0], minMax()[1]]} hide></YAxis>

        <Area
          type="monotone"
          dataKey="uv"
          stroke={color}
          fillOpacity={0.4}
          fill={"url(#" + props.ticker + ")"}
          strokeWidth={1.5}
          isAnimationActive={false}
        />
      </AreaChart>
    </div>
  );
}
