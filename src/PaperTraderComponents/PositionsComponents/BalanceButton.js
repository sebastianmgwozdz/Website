import React, { useState, useEffect } from "react";
import { Button } from "antd";
import BuyModal from "./BuyModal";
import { get } from "../Helpers";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";

function BalanceButton(props) {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(-1);
  console.log("balance button");

  useEffect(() => {
    currBalance();

    let interval = setInterval(currBalance, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function currBalance() {
    get(server + "balances/" + props.firebase.auth.currentUser.uid).then(
      (res) => {
        if (res) {
          setBalance(res["amount"]);
        }
      }
    );
  }

  function showModal() {
    setVisible(true);
  }

  if (balance === -1) {
    return null;
  }

  return (
    <div>
      <Button
        type="primary"
        shape="round"
        style={props.style}
        onClick={showModal}
      >
        {props.text ? props.text : "$" + (balance / 100).toFixed(2)}
      </Button>
      <BuyModal
        visible={visible}
        setVisible={setVisible}
        balance={balance}
        setBalance={setBalance}
        symbol={props.symbol}
      ></BuyModal>
    </div>
  );
}

export default withFirebase(BalanceButton);
