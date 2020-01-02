import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "./css/NavBar.css";
import Game from "./Game";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import GamepadIcon from "@material-ui/icons/Gamepad";

function NavBar(props) {
  const [value, setValue] = React.useState(1);
  const [duration, setDuration] = useState(30);
  const [wordLength, setWordlength] = useState([5, 8]);

  return (
    <Router>
      <nav className="centeredBar">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            label="Return To Website"
            onClick={() => {
              props.switchPage(
                window.location.href.slice(
                  0,
                  window.location.href.indexOf("/typingtest")
                )
              );
            }}
            icon={<ExitToAppIcon />}
          />
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/typingtest"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Play Game"
            component={Link}
            to="/typingtest/start"
            icon={<GamepadIcon />}
          />
        </BottomNavigation>
      </nav>
      <div>
        <Switch>
          <Route path="/typingtest/start">
            <Game
              navFunc={setValue}
              durationFunc={setDuration}
              duration={duration}
              lengthFunc={setWordlength}
              length={wordLength}
            ></Game>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
