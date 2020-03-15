import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import TradeInput from "./TradeInput";

export default function PurchaseDialog(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(props.visible);

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
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
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
