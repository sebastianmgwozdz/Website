import React from "react";
import { Input } from "antd";

export default function AntInput(props) {
  console.log("AntInput");

  return (
    <Input
      onChange={data => {
        if (props.balance - props.price * Number(data.target.value) >= 0) {
          props.setVal(Number(data.target.value));
        }
      }}
      value={props.quantity}
    />
  );
}
