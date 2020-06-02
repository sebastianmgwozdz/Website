import React, { useState } from "react";
import { withFirebase } from "../../Firebase";
import ValidationField from "./ValidationField";
import { Button } from "antd";
import HomeGraph from "./HomeGraph";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

function Home(props) {
  const [view, setView] = useState(0);

  const views = [
    <Landing setView={setView}></Landing>,
    <Login></Login>,
    <Register></Register>,
  ];

  {
    /** 
    <div>
      <HomeGraph></HomeGraph>
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
      </div>*/
  }

  return views[view];
}

export default withFirebase(Home);
