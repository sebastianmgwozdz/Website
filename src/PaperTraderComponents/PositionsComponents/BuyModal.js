import React, { useEffect, useState } from "react";
import { Modal, Typography, Button, message } from "antd";
import Autocomplete from "./Autocomplete";
import AntRadio from "./AntRadio";
import AntInput from "./AntInput";
import { post } from "../Helpers";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";

const { Text } = Typography;

function BuyModal(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [type, setType] = useState(0);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");

  console.log("BuyModal");

  function onOk() {
    setConfirmLoading(true);
    makeTrade(type, symbol, quantity, props.firebase.auth.currentUser.uid).then(
      () => {
        props.setVisible(false);
        setConfirmLoading(false);
        setType(0);
        setSymbol("");
        setQuantity(0);
        setPrice("");
      }
    );
  }

  async function makeTrade() {
    switch (type) {
      case 1:
        break;
      case 2:
        break;
      default:
        if (props.balance - quantity * price >= 0) {
          let position = {
            ticker: symbol,
            count: quantity,
            price: price,
            userId: props.firebase.auth.currentUser.uid,
            long: true
          };
          let balance = {
            userId: props.firebase.auth.currentUser.uid,
            amount: props.balance - quantity * price
          };

          post(server + "positions/", position).then(() => {
            post(server + "balances/", balance).then(() => {
              props.setBalance(props.balance - quantity * price);
            });
          });
        }

        break;
    }
  }

  function onCancel() {
    props.setVisible(false);
  }

  return (
    <Modal
      title="Make a Trade"
      visible={props.visible}
      destroyOnClose
      footer={[
        <Button key="back" onClick={onCancel}>
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
      ></Autocomplete>
      <AntRadio labels={["Buy", "Sell", "Short"]} setVal={setType}></AntRadio>
      <AntInput
        setVal={setQuantity}
        balance={props.balance}
        price={price}
        quantity={quantity}
      ></AntInput>
      <Text>{price}</Text>
    </Modal>
  );
}

export default withFirebase(BuyModal);
