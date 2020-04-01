import React, { useState, useEffect } from "react";
import { get } from "../Helpers";
import { Statistic, Typography } from "antd";

export default function PriceCounter(props) {
  const [currPrice, setCurrPrice] = useState(-1);

  function update() {
    get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        props.ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then(res => {
      if (res) {
        setCurrPrice(res);
      }
    });
  }

  useEffect(() => {
    update();
    let t = setInterval(() => {
      update();
    }, 3000);
    return () => {
      clearInterval(t);
    };
  }, []);

  let percentDiff = Math.abs(
    (currPrice["c"] - currPrice["pc"]) / currPrice["pc"]
  );

  if (isNaN(percentDiff)) {
    return null;
  }

  return (
    <span style={{ textAlign: "center" }}>
      <Statistic
        value={
          currPrice["c"] +
          " (" +
          (percentDiff > 0 ? "+" : "-") +
          (percentDiff * 100).toFixed(2) +
          "%)"
        }
        precision={2}
        valueStyle={{ color: "#3f8600", fontSize: "40px" }}
      />
    </span>
  );
}
