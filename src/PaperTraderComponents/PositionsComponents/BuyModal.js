import React, { useState } from "react";
import { Modal, Button } from "antd";
import Autocomplete from "./Autocomplete";
import AntRadio from "./AntRadio";
import AntInput from "./AntInput";
import { get, post } from "../Helpers";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";
import TradeText from "./TradeText";

function BuyModal(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [type, setType] = useState(0);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");

  console.log("BuyModal");

  function onOk() {
    setConfirmLoading(true);
    makeTrade().then(reset);
  }

  function reset() {
    props.setVisible(false);
    setConfirmLoading(false);
    setType(0);
    setSymbol("");
    setQuantity(0);
    setPrice("");
  }

  async function activePositions(compareFunc, callback) {
    await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        symbol +
        "/active"
    ).then(res => {
      let rel = res.sort(compareFunc);
      res = rel;
      callback(res);
    });
  }

  function close() {
    let mult = type === 1 ? 1 : -1;
    activePositions(
      (a, b) => {
        return mult * (a["price"] - b["price"]);
      },
      res => {
        let closed = 0;
        let am = 0;
        for (let p of res) {
          if ((type === 1 && p["long"]) || (type === 3 && !p["long"])) {
            let shares = p["remaining"];
            let remSell = quantity - closed;
            let sellAll = shares <= remSell;

            am +=
              (sellAll ? remSell : quantity) *
              (type === 1 ? price : p["price"] - price);
            closed += sellAll ? remSell : quantity;
            p["remaining"] = sellAll ? 0 : shares - quantity;
            let date = new Date();

            p["closeDate"] = sellAll ? date : null;

            post(server + "positions/", p);
          }
        }

        props.updateBalance(props.balance + am);
      }
    );
  }

  async function makeTrade() {
    switch (type) {
      case 1:
        close();

        break;

      case 3:
        close();
        break;
      default:
        let long = true;

        if (type === 2) {
          long = false;
        }

        let position = {
          ticker: symbol,
          price: price,
          initial: quantity,
          remaining: quantity,
          userId: props.firebase.auth.currentUser.uid,
          isLong: long
        };

        post(server + "positions/", position);
        if (type === 0) {
          props.updateBalance(props.balance - quantity * price);
        }

        break;
    }
  }

  return (
    <Modal
      title="Make a Trade"
      visible={props.visible}
      destroyOnClose
      footer={[
        <Button key="back" onClick={reset}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={confirmLoading}
          onClick={onOk}
          disabled={!symbol || !quantity}
        >
          Confirm
        </Button>
      ]}
      closable={false}
    >
      <Autocomplete
        setSelectedVal={setSymbol}
        setPrice={setPrice}
        price={price}
      ></Autocomplete>

      <AntRadio
        labels={["Buy", "Sell", "Short", "Cover Short"]}
        setVal={setType}
      ></AntRadio>
      <AntInput
        setVal={setQuantity}
        balance={props.balance}
        price={price}
        quantity={quantity}
        type={type}
        ticker={symbol}
      ></AntInput>
      <TradeText
        symbol={symbol}
        quantity={quantity}
        price={price}
        balance={props.balance}
        type={type}
      ></TradeText>
    </Modal>
  );
}

export default withFirebase(BuyModal);
