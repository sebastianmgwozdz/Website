import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import { positions as getPositions } from "./Helpers";
import { withFirebase } from "../Firebase";
import BalanceButton from "./BalanceButton";

function Dashboard(props) {
  const [tick, setTick] = useState(0);
  const [positions, setPositions] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);

  function update() {
    setTick(tick + 1);
    getPositions(props.firebase.auth.currentUser.uid).then(res => {
      setPositions(res);
    });
  }

  useEffect(() => {
    update();
  }, []);

  useEffect(() => {
    let t = setTimeout(() => {
      update();
    }, 5000);

    return () => {
      clearTimeout(t);
    };
  }, [tick]);

  function getCards() {
    let cards = [];

    for (let i = 0; i < positions.length; i++) {
      cards.push(
        <StockCard
          position={positions[i]}
          ticker={positions[i]["ticker"]}
          tick={tick}
          key={i}
          priceBought={positions[i]["price"]}
        ></StockCard>
      );
    }
    return cards;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.5fr 0.5fr 0.5fr"
      }}
    >
      {getCards()}
      <BalanceButton></BalanceButton>
    </div>
  );
}

export default withFirebase(Dashboard);
