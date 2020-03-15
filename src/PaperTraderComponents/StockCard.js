import React, { useEffect, useState } from "react";
import { latestQuote } from "./Helpers";
import { Card } from "antd";
import Graph from "./Graph";
import { Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

export default function StockCard(props) {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function update() {
      latestQuote(props.position["ticker"]).then(res => {
        setQuote(res);
        setLoading(false);
      });
    }
    update();
  }, [props.tick]);

  return (
    <div style={{ margin: "5vh" }}>
      <Card
        hoverable
        style={{
          width: "25vw",
          height: "33vh",
          borderColor: "#949494",
          borderRadius: "25px"
        }}
        cover={<Graph currPrice={quote["c"]} priceOpen={quote["o"]}></Graph>}
        loading={loading}
      >
        <Meta title={props.position["ticker"]} />
        <Meta
          title={
            <Text
              style={{
                color:
                  quote["c"] > props.position["price"] ? "#24e361" : "#f55936"
              }}
            >
              ${Math.abs(quote["c"] - props.position["price"]).toFixed(2)}
            </Text>
          }
        />
      </Card>
    </div>
  );
}
