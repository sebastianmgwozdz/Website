import React, { useState, useEffect } from "react";
import Header from "./Header";
import { get } from "../Helpers";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";
import PriceCounter from "./PriceCounter";

function PositionSummary(props) {
  const [entries, setEntries] = useState([]);
  const [currPrice, setCurrPrice] = useState(-1);

  console.log("PositionSummary");

  useEffect(() => {
    getLines().then(res => {
      setEntries(res);
    });
  }, []);

  async function getLines() {
    let lines = [];
    let arr = await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        props.ticker
    );

    for (let i = 0; i < arr.length; i++) {
      let entry = arr[i];
      lines.push(
        <div key={i}>
          Price: ${entry["price"]} Quantity: {entry["initial"]} shares Date:{" "}
          {entry["openDate"]}
          {entry["date"]}
        </div>
      );
    }

    return lines;
  }

  return (
    <div>
      <Header returnFunc={props.returnFunc} ticker={props.ticker}></Header>
      <PriceCounter ticker={props.ticker}></PriceCounter>
      <span> Company Information:</span>
      {entries}
    </div>
  );
}

export default withFirebase(PositionSummary);
