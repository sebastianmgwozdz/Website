import React, { useState, useEffect } from "react";
import { Statistic } from "antd";
import { isOpen } from "../Helpers";

export default function MarketCounter() {
  const [tick, setTick] = useState(0);
  const [d, setD] = useState(-1);

  console.log("MarketCounter");

  function update() {
    let date = new Date();

    if (isOpen()) {
      date.setUTCHours(20);
      date.setUTCMinutes(0);
    } else {
      if (date.getUTCHours() > 19) {
        date.setUTCDate(date.getUTCDate() + 1);
      }
      if (date.getUTCDay() === 6) {
        date.setUTCDate(date.getUTCDate() + 1);
      }
      if (date.getUTCDay() === 0) {
        date.setUTCDate(date.getUTCDate() + 1);
      }
      date.setUTCHours(13);
      date.setUTCMinutes(31);
    }
    date.setUTCSeconds(0);
    setD(date);
  }

  useEffect(() => {
    update();
  }, []);

  const { Countdown } = Statistic;

  return (
    <div style={{ textAlign: "center", marginBottom: "2vh", marginTop: "2vh" }}>
      <Countdown
        title={isOpen() ? "Time to market close:" : "Time to market open:"}
        value={d}
        format="HH:mm"
        onFinish={update}
      />
    </div>
  );
}
