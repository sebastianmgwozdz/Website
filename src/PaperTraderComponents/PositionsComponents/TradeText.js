import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { get } from "../Helpers";
import { server } from "../../links";
import { withFirebase } from "../../Firebase";

const { Text } = Typography;

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
    ).then(res => {
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
    ).then(res => {
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
      setText(
        <Text>
          {"Current Shares: " + numShares}
          <br />
          {"Remaining Shares: " + (numShares - quantity)}
          <br />
          {"Current Balance: $" + balance}
          <br />
          {"New Balance: $" + (balance + am)}
        </Text>
      );
    });
  }

  async function update() {
    if (!symbol || quantity === 0) {
      setText(null);
      return;
    }

    switch (type) {
      case 0:
        setText(
          <Text>
            {"Current Balance: $" + balance}
            <br />
            {"New Balance: " + (balance - price * quantity)}
          </Text>
        );
        break;

      case 1:
        sharesOwned(true).then(res => {
          close(res);
        });
        break;
      case 2:
        setText(<Text>{"Total Value: $" + quantity * price}</Text>);
        break;
      default:
        sharesOwned(true).then(res => {
          close(res);
        });
        break;
    }
  }
  return text;
}

export default withFirebase(TradeText);
