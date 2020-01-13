import React from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TypingApp from "../TypingGameComponents/App";
import MessengerApp from "../MessengerComponents/App";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Front></Front>
          <About></About>
          <Education></Education>
          <Projects></Projects>
        </Route>
        <Route exact path="/typingtest">
          <TypingApp></TypingApp>
        </Route>
        <Route exact path="/messenger">
          <MessengerApp></MessengerApp>
        </Route>
      </Switch>
    </Router>
  );
}
