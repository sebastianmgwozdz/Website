import React from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TypingGame from "../TypingGameComponents/App";
import PeerCoding from "../PeerCodingComponents/App";
import { Auth0Provider } from "../PeerCodingComponents/react-auth0-spa";
import config from "../auth_config.json";
import history from "../utils/history";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export default function Main() {
  function setPage(path) {
    window.location = path;
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
          <TypingGame switchPage={setPage}></TypingGame>
        </Route>
        <Route exact path="/peercoding/login">
          <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={"https://sebastiangwo.com/peercoding/"}
            onRedirectCallback={onRedirectCallback}
          >
            <PeerCoding></PeerCoding>
          </Auth0Provider>
        </Route>
      </Switch>
    </Router>
  );
}
