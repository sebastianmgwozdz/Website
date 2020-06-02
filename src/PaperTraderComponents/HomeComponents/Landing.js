import React from "react";

import { Button } from "antd";
import HomeGraph from "./HomeGraph";

const buttonStyle = {
  width: "12vw",
  height: "8vh",
  fontSize: "22px",
  backgroundColor: "#f55936",
  borderColor: "#f55936",
};

export default function Landing(props) {
  return (
    <div>
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
