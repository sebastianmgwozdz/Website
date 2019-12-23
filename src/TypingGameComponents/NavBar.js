import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "./css/NavBar.css";
import Game from "./Game";

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
            label="Back To Website"
            onClick={() => {
              props.switchPage(
                window.location.href.slice(
                  0,
                  window.location.href.indexOf("/typinggame")
                )
              );
            }}
          />
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/typinggame"
          />
          <BottomNavigationAction
            label="Play Game"
            component={Link}
            to="/typinggame/play"
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
