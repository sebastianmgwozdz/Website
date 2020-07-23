import React from "react";
import Main from "./MainComponents/Main";
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
          <BackTop></BackTop>
          <Main></Main>
        </Route>
      </Switch>
    </Router>
  );
}
