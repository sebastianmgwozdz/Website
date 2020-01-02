import React, { useState } from "react";
import "./css/FrontPage.css";
import NavBar from "./NavBar.js";
import Loader from "../Loader";

export default function Front() {
  const [loading, setLoading] = useState(true);

  function displayProp() {
    return loading ? "none" : "initial";
  }

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Loader loading={loading}></Loader>
      <div style={{ height: "100vh" }}>
        <img
          onLoad={() => {
            setLoading(false);
          }}
          src="icons/background.jpg"
          alt="Background"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "relative",
            top: 0,
            bottom: 0,
            height: "100vh",
            maxWidth: "100%",
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
    </div>
  );
}
