import { Button } from "antd";
import React from "react";
import { withRouter } from "react-router-dom";

function AntButton(props) {
  return <Button onClick={props.click}>{props.text}</Button>;
}

export default withRouter(AntButton);
