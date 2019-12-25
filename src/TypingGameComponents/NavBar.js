import React from "react";
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
                  window.location.href.indexOf("/typinggame")
                )
              );
            }}
            icon={<ExitToAppIcon />}
          />
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/typinggame"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Play Game"
            component={Link}
            to="/typinggame/play"
            icon={<GamepadIcon />}
          />
        </BottomNavigation>
      </nav>
      <div>
        <Switch>
          <Route path="/typinggame/play">
            <Game></Game>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
