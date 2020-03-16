import React, { useState, useEffect } from "react";
import { Statistic } from "antd";

export default function MarketCounter() {
  const [tick, setTick] = useState(0);
  const [d, setD] = useState(-1);

  function update() {
    let date = new Date();
    let currDay = date.getUTCDay();
    let currHour = date.getUTCHours();
    let currMin = date.getUTCMinutes();

    let target;

    if (isOpen(currDay, currHour, currMin)) {
      target = 20 * 60;
    } else {
      let dayDiff = 0;
      if (currDay === 6) {
        dayDiff = 1;
      }
      target = 13 * 60 + 30 + dayDiff * 24 * 60;
    }
    let deadline = target - currMin - currHour * 60 + 1;

    setD(Date.now() + deadline * 60 * 1000);
  }

  function isOpen(currDay, currHour, currMin) {
    return !(
      currDay === 0 ||
      currDay === 6 ||
      currHour < 13 ||
      currHour >= 20 ||
      (currHour === 13 && currMin < 30)
    );
  }

  useEffect(update, []);

  useEffect(() => {
    let t = setTimeout(() => {
      update();
      setTick(tick + 1);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, [tick]);

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
