import React, { useState, useEffect } from "react";
import { List } from "antd";
import { get } from "../Helpers";
import { server } from "../../links";
import { withFirebase } from "../../Firebase";

function TradeText(props) {
  const [text, setText] = useState(null);

  const { quantity, symbol, type, balance, price } = props;

  useEffect(() => {
    update();
  }, [quantity, symbol, type, price]);

  async function sharesOwned(long) {
    let shares = 0;

    await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        symbol +
        "/active"
    ).then((res) => {
      for (let pos of res) {
        if (pos["long"] === long) {
          shares += pos["remaining"];
        }
      }
    });

    return shares;
  }

  function close(numShares) {
    get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        symbol +
        "/active"
    ).then((res) => {
      let closed = 0;
      let am = 0;
      for (let p of res) {
        let shares = p["remaining"];
        let remSell = quantity - closed;
        let sellAll = shares <= remSell;

        am +=
          (sellAll ? remSell : quantity) *
          (type === 1 ? price : p["price"] - price);
        closed += sellAll ? remSell : quantity;
      }
      setText([
        "Current Shares: " + numShares,
        "Remaining Shares: " + (numShares - quantity),
        "Current Balance: $" + balance,
        "New Balance: $" + (balance + am),
      ]);
    });
  }

  async function update() {
    if (!symbol || quantity === 0) {
      setText(null);
      return;
    }

    switch (type) {
      case 0:
        setText([
          "Current Balance: $" + balance.toFixed(2),
          "New Balance: $" + (balance - price * quantity).toFixed(2),
        ]);
        break;

      case 2:
        setText(["Total Value: $" + quantity * price]);
        break;
      default:
        sharesOwned(true).then((res) => {
          close(res);
        });
        break;
    }
  }

  if (!text) {
    return null;
  }

  return (
    <List
      size="small"
      bordered
      dataSource={text}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      style={props.style}
    />
  );
}

export default withFirebase(TradeText);
