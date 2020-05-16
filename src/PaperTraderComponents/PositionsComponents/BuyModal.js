import React, { useState } from "react";
import { Modal, Button } from "antd";
import Autocomplete from "./Autocomplete";
import AntRadio from "./AntRadio";
import AntInput from "./AntInput";
import { get, close, post } from "../Helpers";
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

  async function activePositions() {
    let pos;
    await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        symbol +
        "/active"
    ).then((res) => {
      pos = res;
    });

    return pos;
  }

  async function makeTrade() {
    if (type === 1 || type === 3) {
      let mult = type === 1 ? 1 : -1;
      activePositions().then((res) => {
        res.sort((a, b) => {
          return mult * (a["price"] - b["price"]);
        });
        let trade = {
          user: props.firebase.auth.currentUser.uid,
          type: type,
          price: price,
          shareCount: quantity,
          positions: res,
        };
        close(trade, props.incrementBalance);
      });
    } else {
      let long = type !== 2;

      let position = {
        ticker: symbol,
        price: price,
        initial: quantity,
        remaining: quantity,
        userId: props.firebase.auth.currentUser.uid,
        isLong: long,
      };

      post(server + "positions/", position);
      if (long) {
        props.incrementBalance(-1 * quantity * price);
      }
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
        </Button>,
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
