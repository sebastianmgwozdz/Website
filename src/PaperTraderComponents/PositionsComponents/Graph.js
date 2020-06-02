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

  {
    /**<LineChart
        width={props.width ? props.width : 350}
        height={props.height ? props.height : 155}
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      >
        <YAxis type="number" domain={minMax()} hide></YAxis>
        <ReferenceLine y={props.reference} strokeDasharray="3 3" alwaysShow />
        <Line
          type="monotone"
          dataKey="uv"
          stroke={color}
          dot={false}
          isAnimationActive={false}
          strokeWidth={props.strokeWidth}
        />
      </LineChart> */
  }

  return (
    <div>
      <AreaChart
        width={props.width ? props.width : 350}
        height={props.height ? props.height : 155}
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
      >
        <YAxis type="number" domain={minMax()} hide></YAxis>
        <ReferenceLine y={props.reference} strokeDasharray="3 3" alwaysShow />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="uv"
          stroke={color}
          dot={false}
          isAnimationActive={false}
          strokeWidth={props.strokeWidth}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}
