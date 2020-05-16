import React, { useState, useEffect } from "react";
import { YAxis, ReferenceLine, LineChart, Line } from "recharts";

export default function Graph(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.dataPoint) {
      setData([
        ...data,
        {
          uv: props.dataPoint,
          amt: data.length,
        },
      ]);
    }
  }, [props.dataPoint]);

  function minMax() {
    let arr = data.map((val) => {
      return val.uv;
    });
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);
    if (min > 0 && max > 0) {
      return [-0.5 * max, max];
    } else if (min < 0 && max < 0) {
      return [min, -0.5 * min];
    } else {
      return [min, max];
    }
  }

  let color = props.dataPoint > 0 ? "#24e361" : "#f55936";

  if (data.length <= 1) {
    return null;
  }

  return (
    <div>
      <LineChart
        width={350}
        height={155}
        data={data}
        margin={{ top: 40, right: 30, left: 30, bottom: 10 }}
      >
        <YAxis type="number" domain={minMax()} hide></YAxis>
        <ReferenceLine y={0} strokeDasharray="3 3" ifOverflow="visible" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={color}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </div>
  );
}
