import React, { useState, useEffect } from "react";
import { Statistic } from "antd";
import { isOpen } from "../Helpers";

export default function MarketCounter() {
  const [tick, setTick] = useState(0);
  const [d, setD] = useState(-1);

  console.log("MarketCounter");

  function update() {
    if (isOpen()) {
      date.setUTCHours(20);
      date.setUTCMinutes(1);
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
    let t = setInterval(() => {
      update();
      setTick(tick + 1);
    }, 5000);
    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {}, [tick]);

  const { Countdown } = Statistic;

  let date = new Date();
  let currDay = date.getUTCDay();
  let currHour = date.getUTCHours();
  let currMin = date.getUTCMinutes();

  return (
    <Countdown
      title={
        isOpen(currDay, currHour, currMin)
          ? "Time to market close:"
          : "Time to market open:"
      }
      value={d}
      format="HH:mm"
    />
  );
}
