import React, { useEffect, useState } from "react";
import { get, isOpen } from "../Helpers";
import Graph from "./Graph";
import { Typography } from "antd";
import { withFirebase } from "../../Firebase";
import CoverCard from "./CoverCard";
import Loading from "./Loading";

const { Text } = Typography;
const BLACK = "#000000";
const GREEN = "#24e361";
const RED = "#f55936";

function StockCard(props) {
  const [quote, setQuote] = useState(null);
  const [tick, setTick] = useState(0);
  const { ticker, positions, clickFunc, data } = props;

  function updateQuote() {
    get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then((res) => {
      if (res) {
        setQuote(res);
      }
    });
  }

  useEffect(() => {
    updateQuote();
  }, []);

  useEffect(() => {
    let curr = new Date();
    curr.setMinutes(curr.getMinutes - 1);

    if (isOpen(curr)) {
      updateQuote();
    }
    setTick(tick + 1);
  }, [data]);

  function isToday(date) {
    const today = new Date();
    const d = new Date(date);

    return (
      d.getDate() === today.getUTCDate() &&
      d.getMonth() === today.getUTCMonth() &&
      d.getFullYear() === today.getUTCFullYear()
    );
  }

  function calcDiff(type) {
    let diff = 0;

    if (!quote) {
      return diff;
    }

    for (let pos of positions) {
      let d;
      let sinceClose = !isToday(pos["openDate"]) && type === "day";

      d =
        pos["remaining"] *
        ((!data ? quote["c"] : data["p"]) -
          (sinceClose ? quote["pc"] : pos["price"]));

      if (pos["isLong"]) {
        diff += d;
      } else {
        diff -= d;
      }
    }

    return diff;
  }

  function correctSign(first, second) {
    if ((first < 0 && second > 0) || (first > 0 && second < 0)) {
      return second * -1;
    }
    return second;
  }

  function percentDiff(old, updated) {
    if (isNaN(updated) || isNaN(old)) {
      return 0;
    }
    return ((updated - old) / old) * 100;
  }

  function totalValue() {
    let val = 0;

    for (let pos of positions) {
      val += pos["remaining"] * pos["price"];
    }

    return val;
  }

  function text(dayChange, netChange) {
    if (!quote) {
      return null;
    }

    let dayPercent = correctSign(
      dayChange,
      percentDiff(quote["pc"], quote["c"])
    );
    let total = totalValue();
    let netPercent = percentDiff(total, netChange + total);

    return (
      <div>
        <Text style={{ color: BLACK, fontSize: "20px" }}>{ticker}</Text>
        <br />

        <Text style={{ color: BLACK }}>Day Change: </Text>
        <Text
          style={{
            color: dayChange > 0 ? GREEN : RED,
          }}
        >
          ${dayChange.toFixed(2)} ({dayPercent.toFixed(2)}%)
        </Text>
        <br />
        <Text style={{ color: BLACK }}>Net Change: </Text>
        <Text
          style={{
            color: netChange > 0 ? GREEN : RED,
          }}
        >
          ${netChange.toFixed(2)} ({netPercent.toFixed(2)}%)
        </Text>
      </div>
    );
  }

  let dayChange = calcDiff("day");
  let netChange = calcDiff("net");

  return (
    <div style={{ margin: "3vh" }}>
      <CoverCard
        cover={
          quote ? (
            <Graph dataPoint={dayChange} quote={quote} ticker={ticker}></Graph>
          ) : (
            <Loading></Loading>
          )
        }
        onClick={() => {
          clickFunc(ticker);
        }}
        metaList={text(dayChange, netChange)}
      ></CoverCard>
    </div>
  );
}

export default withFirebase(StockCard);
