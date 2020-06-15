import React from "react";
import ValidationField from "./ValidationField";
import { Button } from "antd";
import { withFirebase } from "../../Firebase";

function Login(props) {
  return (
    <div>
      <ValidationField
        submit={props.firebase.doSignInWithEmailAndPassword}
        errorMessage={"Username and/or password are incorrect. Try again."}
        login={true}
      ></ValidationField>
      <Button
        type="link"
        onClick={() => {
          props.setView(2);
        }}
      >
        Create an account
      </Button>
    </div>
  );
}

export default withFirebase(Login);
