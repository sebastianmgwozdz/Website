import React from "react";
import { Input } from "antd";
import { get } from "../Helpers";
import { server } from "../../links";
import { withFirebase } from "../../Firebase";

function AntInput(props) {
  console.log("AntInput");

  async function sharesOwned(long) {
    let shares = 0;

    await get(
      server +
        "positions/id=" +
        props.firebase.auth.currentUser.uid +
        "/ticker=" +
        props.ticker +
        "/active"
    ).then(res => {
      for (let pos of res) {
        if (pos["long"] === long) {
          shares += pos["remaining"];
        }
      }
    });

    return shares;
  }

  function onChange(data) {
    let input = Number(data.target.value);
    if (isNaN(input)) {
      return;
    }
    switch (props.type) {
      case 0:
        if (props.balance - props.price * input >= 0) {
          props.setVal(input);
        }
        break;
      case 1:
        sharesOwned(true).then(res => {
          if (res >= input) {
            props.setVal(input);
          }
        });

        break;
      case 2:
        props.setVal(input);
        break;
      default:
        sharesOwned(false).then(res => {
          if (res >= input) {
            props.setVal(input);
          }
        });
        break;
    }
  }

  return (
    <Input
      onChange={data => {
        onChange(data);
      }}
      value={props.quantity}
    />
  );
}

export default withFirebase(AntInput);
