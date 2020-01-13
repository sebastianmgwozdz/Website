import React from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TypingApp from "../TypingGameComponents/App";
import MessengerApp from "../MessengerComponents/App";
import { Auth0Provider } from "../react-auth0-spa";
import config from "../auth_config.json";
import history from "../utils/history";

export default function Main() {
  function setPage(path) {
    window.location = path;
  }

  function onRedirectCallback(appState) {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Front></Front>
          <About></About>
          <Education></Education>
          <Projects switchPage={setPage}></Projects>
        </Route>
        <Route exact path="/typingtest">
          <TypingApp switchPage={setPage}></TypingApp>
        </Route>
        <Route exact path="/messenger/home">
          <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
          >
            <MessengerApp></MessengerApp>
          </Auth0Provider>
        </Route>
      </Switch>
    </Router>
  );
}
