import React, { useState, useEffect } from "react";
import { Button } from "antd";
import BuyModal from "./BuyModal";
import { get, post } from "../Helpers";
import { withFirebase } from "../../Firebase";
import { server } from "../../links";

function BalanceButton(props) {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(-1);

  console.log("BalanceButton");

  useEffect(() => {
    currBalance();

    let interval = setInterval(currBalance, 5000);

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
        style={{
          position: "fixed",
          top: "82vh",
          left: "82vw",
          width: "12vw",
          height: "8vh",
          fontSize: "22px",
          backgroundColor: "#24e361",
          borderColor: "#24e361",
        }}
        onClick={showModal}
      >
        ${balance.toFixed(2)}
      </Button>
      <BuyModal
        visible={visible}
        setVisible={setVisible}
        balance={balance}
      ></BuyModal>
    </div>
  );
}

export default withFirebase(BalanceButton);
