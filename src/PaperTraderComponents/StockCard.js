import React, { useEffect, useState } from "react";
import latestQuote from "./Helpers";

export default function StockCard(props) {
  const [price, setPrice] = useState(-1);

  useEffect(() => {
    latestQuote(props.ticker).then(res => {
      setPrice(res);
    });
  }, [props.tick, props.ticker]);

  return (
    <div>
      {props.ticker} <br></br>
      {price}
    </div>
  );
}
