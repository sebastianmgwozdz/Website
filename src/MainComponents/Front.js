import React, { useState, Fragment } from "react";
import "./css/FrontPage.css";
import NavBar from "./NavBar.js";
import Loader from "../Loader";
import { withRouter } from "react-router-dom";

function Front(props) {
  if (window.location.href !== "http://localhost:3000/") {
    props.history.replace("/");
  }

  const [loading, setLoading] = useState(true);

  function displayProp() {
    return loading ? "none" : "initial";
  }

  return (
    <div
      style={{ backgroundColor: "#fff", height: "100vh", overflow: "hidden" }}
    >
      <Loader loading={loading}></Loader>
      <img
        onLoad={() => {
          setLoading(false);
        }}
        src="icons/background.jpg"
        alt="Background"
        style={{
          height: "100vh",
          zIndex: 0,
          display: displayProp()
        }}
      ></img>
      <div className="Transparent-Background">
        <header className="Bio-header">
          Sebastian Gwozdz
          <br />
          <p className="Contact">sebastianmgwozdz@gmail.com</p>
          <div className="Icon">
            <a href="https://www.linkedin.com/in/sebastian-gwozdz-05355a16a/">
              <img
                src="icons/linkedin.png"
                height="75"
                width="80"
                alt="LinkedIn Icon"
                className="Image"
              />
            </a>
            <a href="https://github.com/sebastianmgwozdz">
              <img
                src="icons/github.png"
                height="75"
                width="80"
                alt="Github Icon"
                className="Image"
              />
            </a>
          </div>
          <NavBar />
        </header>
      </div>
    </div>
  );
}

export default withRouter(Front);
