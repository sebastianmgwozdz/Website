import React, { useState, useEffect } from "react";
import { get } from "../Helpers";
import StockCard from "./StockCard";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";

function CardGrid(props) {
  const [positions, setPositions] = useState(new Map());

  function update() {
    let p = new Map();

    get(
      server + "positions/id=" + props.firebase.auth.currentUser.uid + "/active"
    ).then(res => {
      if (res) {
        for (let pos of res) {
          let ticker = pos["ticker"];
          if (p.has(ticker)) {
            p.get(ticker).push(pos);
          } else {
            p.set(ticker, [pos]);
          }
        }
      }
      setPositions(p);
    });
  }

  useEffect(() => {
    update();
    let t = setInterval(() => {
      //update();
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, []);

  function getCards() {
    let cards = [];

    if (positions.size === 0) {
      return cards;
    }

    positions.forEach((val, key, map) => {
      cards.push(
        <StockCard
          ticker={key}
          positions={val}
          key={key}
          clickFunc={props.clickFunc}
        ></StockCard>
      );
    });

    return cards;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.35fr 0.35fr 0.35fr"
      }}
    >
      {getCards()}
    </div>
  );
}

export default withFirebase(CardGrid);
