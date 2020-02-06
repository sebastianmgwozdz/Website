import React from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TypingApp from "../TypingGameComponents/App";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/typingtest">
          <TypingApp></TypingApp>
        </Route>
        <Route path="/">
          <Front></Front>
          <About></About>
          <Education></Education>
          <Projects></Projects>
        </Route>
      </Switch>
    </Router>
  );
}
