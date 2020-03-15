import React, { useState, useEffect } from "react";
import { LineChart, Line } from "recharts";

export default function Graph(props) {
  const [data, setData] = useState([]);
  const [color, setColor] = useState("#999999");

  function normalize() {
    if (data.length <= 1) {
      return;
    }
    let min = 10000;
    let max = -10000;

    for (let i = 0; i < data.length; i++) {
      let val = data[i].uv;
      if (val < min) {
        min = val;
      }
      if (val > max) {
        max = val;
      }
    }

    data.map(val => {
      let normalizedVal = (val.uv - min) / (max - min);
      return (val["pv"] = normalizedVal);
    });
  }

  useEffect(() => {
    if (props.currPrice !== -1) {
      setData([
        ...data,
        {
          uv: props.currPrice,
          pv: 0.5,
          amt: data.length
        }
      ]);

      if (data.length >= 1) {
        if (props.currPrice > props.priceOpen) {
          setColor("#24e361");
        } else {
          setColor("#f55936");
        }
      }
    }
  }, [props.currPrice]);

  normalize();

  return (
    <LineChart
      width={350}
      height={150}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <Line
        type="monotone"
        dataKey="pv"
        stroke={color}
        dot={false}
        strokeWidth={1.5}
        isAnimationActive={false}
      />
    </LineChart>
  );
}
