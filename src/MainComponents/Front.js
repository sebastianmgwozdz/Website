import React, { useState } from "react";
import "./css/FrontPage.css";
import NavBar from "./NavBar.js";
import Loader from "../Loader";
const axios = require("axios");

export default function Front() {
  const [loading, setLoading] = useState(true);

  function displayProp() {
    return loading ? "none" : "initial";
  }

  axios
    .post("https://sgwomessenger.azurewebsites.net/api/contacts", {
      id1: 69,
      id2: 420
    })
    .then(function(response) {})
    .catch(function(error) {
      console.log(error);
    });

  axios
    .get("https://sgwomessenger.azurewebsites.net/api/contacts")
    .then(resp => {
      console.log(resp.data);
    });

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Loader loading={loading}></Loader>
      <div style={{ height: "100vh", overflow: "hidden" }}>
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
    </div>
  );
}
