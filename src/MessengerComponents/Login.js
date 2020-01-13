import React from "react";
import { withRouter } from "react-router-dom";

function Login(props) {
  const { user, firebaseAppAuth } = props;
  return (
    <div>
      <header>
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button
            onClick={() => {
              firebaseAppAuth.signOut();
            }}
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => {
              firebaseAppAuth
                .signInWithEmailAndPassword(
                  "sg5424@pleasantonusd.net",
                  "admin123"
                )
                .then(() => {
                  console.log(user);
                  props.history.push("/messenger/home");
                })
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
        )}
      </header>
    </div>
  );
}

export default withRouter(Login);
