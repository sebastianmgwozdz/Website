import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "./HomeComponents/Home";
import "./App.css";
import { withFirebase } from "../Firebase";
import Main from "./Main";
import { papertrader } from "../links";

function App(props) {
  if (
    window.location.href !== papertrader &&
    !props.firebase.auth.currentUser
  ) {
    props.history.replace("/papertrader/home");
  }

  console.log("App");

  return (
    <Router>
      <div>
        <Route exact path="/papertrader/home" component={Home} />
        <Route exact path="/papertrader/dashboard" component={Main} />
      </div>
    </Router>
  );
}

export default withRouter(withFirebase(App));
