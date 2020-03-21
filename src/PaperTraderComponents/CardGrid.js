import React, { useState, useEffect } from "react";
import { get } from "./Helpers";
import { message } from "antd";
import StockCard from "./StockCard";
import { withFirebase } from "../Firebase";

function CardGrid(props) {
  const [positions, setPositions] = useState(new Set());

  function update() {
    let p = new Set();

    get(
      "http://localhost:8080/positions/" + props.firebase.auth.currentUser.uid
    )
      .then(res => {
        if (!res) {
          message.error(
            "There was an issue connecting to the server. Attempting to reconnect.",
            5
          );
        } else {
          for (let pos of res) {
            let t = pos["ticker"];
            p.add(t);
          }
        }
      })
      .finally(() => {
        setPositions(p);
      });
  }

  useEffect(() => {
    update();
    let t = setInterval(() => {
      update();
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, []);

  function getCards() {
    let cards = [];

    if (!positions) {
      return cards;
    }

    let key = 0;

    positions.forEach(val => {
      cards.push(
        <StockCard
          ticker={val}
          positions={positions}
          key={key}
          clickFunc={props.clickFunc}
        ></StockCard>
      );
      key++;
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
