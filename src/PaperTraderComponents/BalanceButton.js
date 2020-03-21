import React, { useState, useEffect } from "react";
import { Button } from "antd";
import BuyModal from "./BuyModal";
import { get } from "./Helpers";
import { withFirebase } from "../Firebase";

function BalanceButton(props) {
  const [visible, setVisible] = useState(false);
  const [balance, setBalance] = useState(-1);

  console.log("BalanceButton");

  useEffect(() => {
    get(
      "http://localhost:8080/balances/" + props.firebase.auth.currentUser.uid
    ).then(res => {
      if (res) {
        setBalance(res["amount"]);
      }
    });
  }, []);

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
          borderColor: "#24e361"
        }}
        onClick={showModal}
      >
        ${balance}
      </Button>
      <BuyModal
        visible={visible}
        setVisible={setVisible}
        balance={balance}
        setBalance={setBalance}
      ></BuyModal>
    </div>
  );
}

export default withFirebase(BalanceButton);
