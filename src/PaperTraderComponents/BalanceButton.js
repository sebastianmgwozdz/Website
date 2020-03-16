import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import TradeInput from "./TradeInput";

export default function BalanceButton(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button
        type="primary"
        shape="round"
        size={"large"}
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
        $2935
      </Button>
      <Modal
        title="Make a Trade"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <TradeInput></TradeInput>
      </Modal>
    </div>
  );
}
