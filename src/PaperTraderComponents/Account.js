import React from "react";
import { post, del } from "./Helpers";
import { withFirebase } from "../Firebase";
import { server } from "../links";

function Account(props) {
  console.log("Account");

  async function reset() {
    del(server + "positions/userId=" + props.firebase.auth.currentUser.uid);

    let data = {
      userId: props.firebase.auth.currentUser.uid,
      amount: 100000
    };
    post(server + "balances/", data);
  }

  return (
    <div>
      <div onClick={reset}>reset account</div>
    </div>
  );
}

export default withFirebase(Account);
