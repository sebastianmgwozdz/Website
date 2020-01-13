import React from "react";
import { withRouter } from "react-router-dom";

function Home(props) {
  const { user } = props;

  if (user == undefined) {
    props.history.push("/messenger");
  }

  return <div>success</div>;
}

export default withRouter(Home);
