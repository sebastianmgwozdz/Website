import React, { useState } from "react";
import { withFirebase } from "../../Firebase";
import ValidationField from "./ValidationField";
import { Button } from "antd";

function Home(props) {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <ValidationField
        submit={
          login
            ? props.firebase.doSignInWithEmailAndPassword
            : props.firebase.doCreateUserWithEmailAndPassword
        }
        errorMessage={
          login
            ? "Username and/or password are incorrect. Try again."
            : "Make sure email is formatted correctly and password contains at least 6 characters"
        }
        login={login}
      ></ValidationField>
      <Button
        type="link"
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "Create an account" : "Sign in to existing account"}
      </Button>
    </div>
  );
}

export default withFirebase(Home);
