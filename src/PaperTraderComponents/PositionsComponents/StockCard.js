import React, { useEffect, useState } from "react";
import { get } from "../Helpers";
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
  const { ticker, positions, clickFunc } = props;

  console.log("StockCard");

  useEffect(() => {
    get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        ticker +
        "&token=bpleiinrh5r8m26im1dg"
    ).then(res => {
      if (res) {
        setQuote(res);
      }
    });
  }, [positions]);

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
        (quote["c"] - (sinceClose ? quote["pc"] : pos["price"]));

      if (pos["long"]) {
        diff += d;
      } else {
        diff -= d;
      }
    }

    return diff;
  }

  function text(dayChange, netChange) {
    if (!quote) {
      return null;
    }

    return (
      <div>
        <Text style={{ color: BLACK, fontSize: "20px" }}>{ticker}</Text>
        <br />

        <Text style={{ color: BLACK }}>Day Change: </Text>
        <Text
          style={{
            color: dayChange > 0 ? GREEN : RED
          }}
        >
          ${dayChange.toFixed(2)}
        </Text>
        <br />
        <Text style={{ color: BLACK }}>Net Change: </Text>
        <Text
          style={{
            color: netChange > 0 ? GREEN : RED
          }}
        >
          ${netChange.toFixed(2)}
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
            <Graph
              dataPoint={dayChange.toFixed(2)}
              quote={quote}
              color={dayChange > 0 ? GREEN : RED}
              ticker={ticker}
            ></Graph>
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
