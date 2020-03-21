import React, { useEffect, useState } from "react";
import { get } from "./Helpers";
import { Card } from "antd";
import Graph from "./Graph";
import { Typography } from "antd";
import { withFirebase } from "../Firebase";
import CoverCard from "./CoverCard";

const { Meta } = Card;
const { Text } = Typography;

function StockCard(props) {
  const [quote, setQuote] = useState({});
  const [activePositions, setActivePositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firebase, ticker, positions, clickFunc } = props;

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
      get(
        "http://localhost:8080/positions/id=" +
          firebase.auth.currentUser.uid +
          "/ticker=" +
          ticker
      ).then(res => {
        setActivePositions(res);
        if (loading) {
          setLoading(false);
        }
      });
    });
  }, [positions]);

  function calcDiff(type) {
    let diff = 0;
    if (!quote || !activePositions) {
      return diff;
    }

    for (let pos of activePositions) {
      let d =
        pos["remaining"] *
        (quote["c"] - (type === "net" ? pos["price"] : quote["pc"]));

      if (pos["long"]) {
        diff += d;
      } else {
        diff -= d;
      }
    }

    return diff;
  }

  function metaList() {
    return [
      <Meta title={ticker} />,

      <p>
        <Text>Day Change: </Text>
        <Text
          style={{
            color: calcDiff("day") > 0 ? "#24e361" : "#f55936"
          }}
        >
          ${calcDiff("day").toFixed(2)}
        </Text>
        <br />
        <Text>Net Change: </Text>
        <Text
          style={{
            color: calcDiff("net") > 0 ? "#24e361" : "#f55936"
          }}
        >
          ${calcDiff("net").toFixed(2)}
        </Text>
      </p>
    ];
  }

  return (
    <div style={{ margin: "3vh" }}>
      <CoverCard
        cover={
          <Graph
            dataPoint={quote["c"]}
            color={quote["c"] > quote["pc"] ? "#24e361" : "#f55936"}
          ></Graph>
        }
        loading={loading}
        onClick={() => {
          clickFunc(ticker);
        }}
        metaList={metaList()}
      ></CoverCard>
    </div>
  );
}

export default withFirebase(StockCard);
