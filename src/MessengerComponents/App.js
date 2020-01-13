import React from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

firebaseAppAuth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("meme");
  }
});

function App(props) {
  const { user } = props;

  function hashAndStore(em, pass, user) {
    bcrypt.hash(pass, 10, (err, hash) => {
      if (err) {
        console.error(err);
        return;
      }
      insertUser(em, hash, user);
    });
  }

  function insertUser(em, pass, user) {
    axios
      .post("https://sgwomessenger.azurewebsites.net/api/users", {
        Nickname: user,
        Email: em,
        Password: pass
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/messenger">
          <Link to="/messenger/login">Login</Link>
        </Route>
        <Route exact path="/messenger/login">
          <Login user={user} firebaseAppAuth={firebaseAppAuth}></Login>
        </Route>
        <Route exact path="/messenger/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default withFirebaseAuth({
  firebaseAppAuth
})(App);
