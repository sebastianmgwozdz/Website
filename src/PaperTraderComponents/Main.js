import React, { useState } from "react";
import Window from "./Window";
import { withFirebase } from "../Firebase";
import Sidebar from "./Sidebar";

function Main() {
  const [menuOption, setMenuOption] = useState(0);

  console.log("Main");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setMenuOption={setMenuOption}></Sidebar>
      <Window menuOption={menuOption}></Window>
    </div>
  );
}

export default withFirebase(Main);
