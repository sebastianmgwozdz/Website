import React from "react";
import { post } from "./Helpers";
import { withFirebase } from "../Firebase";
import { server } from "../links";

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
          post(server + "balances/", data);
        }}
      >
        reset account
      </div>
    </div>
  );
}

export default withFirebase(Account);
