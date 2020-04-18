import React, { useState } from "react";
import Window from "./Window";
import { withFirebase } from "../Firebase";
import Sidebar from "./SidebarComponents/Sidebar";

function Main() {
  const [menuOption, setMenuOption] = useState(0);
  const [error, setError] = useState(false);

  console.log("Main");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setMenuOption={setMenuOption}></Sidebar>
      <Window menuOption={menuOption} setError={setError}></Window>
    </div>
  );
}

export default withFirebase(Main);
