import React, { useState, useEffect } from "react";
import { YAxis, ReferenceLine, LineChart, Line } from "recharts";

export default function Graph(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
      console.log(props.data);
    }
  }, [props.data]);

  console.log(props.data);

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

    return [min, max];
  }

  let color =
    (props.data && data[data.length - 1]) || props.dataPoint > 0
      ? "#24e361"
      : "#f55936";

  if (data.length <= 1) {
    return null;
  }

  console.log(minMax());

  return (
    <div>
      <LineChart
        width={350}
        height={155}
        data={data}
        margin={{ top: 40, right: 30, left: 30, bottom: 10 }}
      >
        <YAxis type="number" domain={minMax()} hide></YAxis>
        <ReferenceLine y={props.reference} strokeDasharray="3 3" alwaysShow />
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
