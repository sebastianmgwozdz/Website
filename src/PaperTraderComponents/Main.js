import React, { useState } from "react";
import Window from "./Window";
import { withFirebase } from "../Firebase";
import Sidebar from "./Sidebar";

function Main(props) {
  const [menuOption, setMenuOption] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setMenuOption={setMenuOption}></Sidebar>
      <Window menuOption={menuOption}></Window>
    </div>
  );
}

export default withFirebase(Main);
