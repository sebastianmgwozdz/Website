import React, { useState } from "react";
import { withFirebase } from "../../Firebase";
import ValidationField from "./ValidationField";
import { Button } from "antd";
import HomeGraph from "./HomeGraph";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";

function Home(props) {
  const [view, setView] = useState(0);

  const views = [
    <Landing setView={setView}></Landing>,
    <Login setView={setView}></Login>,
    <Register></Register>,
  ];

  return views[view];
}

export default withFirebase(Home);
