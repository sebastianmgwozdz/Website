import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./css/App.css";
import Loader from "../Loader";

export default function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="background">
      <Loader loading={loading}></Loader>
      <NavBar switchPage={props.switchPage}></NavBar>
    </div>
  );
}
