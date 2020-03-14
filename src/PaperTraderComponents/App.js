import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "./Home";
import DashBoard from "./DashBoard";
import "./App.css";
import { withFirebase } from "../Firebase";

function App(props) {
  if (
    window.location.href !== "http://localhost:3000/papertrader/home" &&
    !props.firebase.auth.currentUser
  ) {
    props.history.replace("/papertrader/home");
  }

  return (
    <Router>
      <div>
        <Route exact path="/papertrader/home" component={Home} />
        <Route exact path="/papertrader/dashboard" component={DashBoard} />
      </div>
    </Router>
  );
}

export default withRouter(withFirebase(App));
