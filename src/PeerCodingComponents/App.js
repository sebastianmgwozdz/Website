import React from "react";
import Login from "./NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import history from "../utils/history";

export default function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <Login />
        </header>
        <Switch>
          <Route path="/peercoding" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
