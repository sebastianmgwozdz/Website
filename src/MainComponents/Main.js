import React from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../TypingGameComponents/App";

export default function Main() {
  function setPage(path) {
    window.location = path;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Front></Front>
            <About></About>
            <Education></Education>
            <Projects switchPage={setPage}></Projects>
          </div>
        </Route>
        <Route exact path="/typinggame">
          <App switchPage={setPage}></App>
        </Route>
      </Switch>
    </Router>
  );
}
