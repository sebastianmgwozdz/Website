import React from "react";
import { post } from "./Helpers";
import { withFirebase } from "../Firebase";

function Account(props) {
  console.log("Account");

  return (
    <div>
      <div
        onClick={() => {
          let data = {
            userId: props.firebase.auth.currentUser.uid,
            amount: 100000
          };
          post("http://localhost:8080/balances/", data);
        }}
      >
        reset account
      </div>
      <div>total balance: $-1</div>
    </div>
  );
}

export default withFirebase(Account);
