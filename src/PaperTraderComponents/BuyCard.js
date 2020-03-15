import React, { useState, useEffect } from "react";
import { Card, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TradeInput from "./TradeInput";

export default function BuyCard(props) {
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
    <div style={{ margin: "5vh" }}>
      <Card
        style={{
          width: "25vw",
          height: "33vh",
          borderColor: "#949494",
          borderRadius: "25px"
        }}
        hoverable
        onClick={showModal}
      >
        <PlusOutlined
          style={{
            fontSize: "15vh",
            display: "block",
            margin: "auto"
          }}
        />
      </Card>
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
