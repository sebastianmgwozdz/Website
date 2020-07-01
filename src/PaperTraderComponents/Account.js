import React from "react";
import { post, del } from "./Helpers";
import { withFirebase } from "../Firebase";
import { server } from "../links";

import { withRouter } from "react-router-dom";

function Account(props) {
  console.log("Account");

  function signout() {
    props.firebase.auth.signOut().then(function () {
      props.history.replace("/papertrader/home");
    });
  }

  function reset() {
    del(server + "positions/id=" + props.firebase.auth.currentUser.uid);

    let data = {
      userId: props.firebase.auth.currentUser.uid,
      amount: 10000000,
    };
    post(server + "balances/", data);
  }

  return (
    <div>
      <div onClick={reset}>reset account</div>
      <div onClick={signout}>sign out</div>
    </div>
  );
}

export default withRouter(withFirebase(Account));
