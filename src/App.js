import React from "react";
import Front from "./MainComponents/Front";
import About from "./MainComponents/About";
import Education from "./MainComponents/Education";
import Projects from "./MainComponents/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TypingApp from "./TypingGameComponents/App";
import "./App.css";
import { BackTop } from "antd";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/typingtest">
          <TypingApp></TypingApp>
        </Route>
        <Route path="/">
          <BackTop />
          <Front></Front>
          <About></About>
          <Education></Education>
          <Projects></Projects>
        </Route>
      </Switch>
    </Router>
  );
}
