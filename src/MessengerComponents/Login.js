import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

function Login(props) {
  const { firebaseAppAuth } = props;

  firebaseAppAuth.onAuthStateChanged(function(user) {
    if (user) {
      props.history.push("/messenger/home");
    }
  });

  return (
    <Fragment>
      <button
        onClick={() => {
          firebaseAppAuth
            .signInWithEmailAndPassword("sg5424@pleasantonusd.net", "admin123")

            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode + " " + errorMessage);
            });
        }}
      >
        Sign in with Email
      </button>
      <Link to="/messenger/signup">Signup</Link>
    </Fragment>
  );
}

export default withRouter(Login);
