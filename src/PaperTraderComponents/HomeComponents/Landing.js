import React from "react";
import { RiseOutlined } from "@ant-design/icons";

import { Button } from "antd";
import HomeGraph from "./HomeGraph";

const buttonStyle = {
  width: "12vw",
  height: "8vh",
  fontSize: "18px",
  backgroundColor: "#f55936",
  borderColor: "#f55936",
  marginTop: "6vh",
};

export default function Landing(props) {
  return (
    <div
      style={{
        position: "absolute",
        margin: 0,
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <RiseOutlined
        style={{ fontSize: "17vh", marginBottom: "2vh" }}
      ></RiseOutlined>
      <HomeGraph></HomeGraph>
      <span>
        <Button
          style={buttonStyle}
          type="primary"
          shape="round"
          onClick={() => {
            props.setView(1);
          }}
        >
          Login
        </Button>
        <Button
          style={buttonStyle}
          type="primary"
          shape="round"
          onClick={() => {
            props.setView(2);
          }}
        >
          Register
        </Button>
      </span>
    </div>
  );
}
