import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
firebaseAppAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

const LANDING = "http://sebastiangwo.com/messenger";
const LOGIN = "http://sebastiangwo.com/messenger/login";
const SIGNUP = "http://sebastiangwo.com/messenger/signup";

const UNPROTECTED_PATHS = [LANDING, LOGIN, SIGNUP];

function accessingRestrictedRoute() {
  const currPath = window.location.href;
  return !UNPROTECTED_PATHS.includes(currPath) && !firebaseAppAuth.currentUser;
}

function App(props) {
  if (accessingRestrictedRoute()) {
    props.history.replace("/messenger");
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/messenger">
          <Link to="/messenger/login">Login</Link>
        </Route>
        <Route exact path="/messenger/login">
          <Login firebaseAppAuth={firebaseAppAuth}></Login>
        </Route>
        <Route exact path="/messenger/signup">
          <Signup firebaseAppAuth={firebaseAppAuth}></Signup>
        </Route>
        <Route exact path="/messenger/home">
          <Home firebaseAppAuth={firebaseAppAuth}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default withRouter(
  withFirebaseAuth({
    firebaseAppAuth
  })(App)
);
