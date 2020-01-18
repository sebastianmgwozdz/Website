import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "./css/App.css";
import Game from "./Game";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GamepadIcon from "@material-ui/icons/Gamepad";

import { withRouter } from "react-router-dom";

function App(props) {
  const [duration, setDuration] = useState(30);
  const [wordLength, setWordlength] = useState([5, 8]);
  const [restart, setRestart] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/typingtest/">
            <Game
              durationFunc={setDuration}
              duration={duration}
              lengthFunc={setWordlength}
              length={wordLength}
              restart={restart}
              setRestart={setRestart}
            ></Game>
          </Route>
        </Switch>
      </div>
      <nav className="centeredBar">
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Return To Website"
            onClick={() => {
              props.history.push("/");
            }}
            icon={<ExitToAppIcon />}
          />

          <BottomNavigationAction
            label="Exit Game"
            onClick={() => {
              setRestart(true);
            }}
            icon={<GamepadIcon />}
          />
        </BottomNavigation>
      </nav>
    </Router>
  );
}

export default withRouter(App);
