import React from "react";
import { withRouter } from "react-router-dom";
import Validation from "./Validation";

function Signup(props) {
  const { firebaseAppAuth } = props;

  return <Validation firebaseAppAuth={firebaseAppAuth}></Validation>;
}

export default withRouter(Signup);
