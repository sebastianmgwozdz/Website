import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { useTrail, animated, useSpring } from "react-spring";
import "./css/FrontPage.css";
import NameCard from "./NameCard";

export default function Label() {
  return (
    <div className="trails-main">
      <div
        style={{
          marginTop: "18vh",
          overflow: "auto",
          width: "40vw",
          paddingLeft: "8vw",
        }}
      >
        <NameCard></NameCard>
        <div className="Icon">
          <a href="https://www.linkedin.com/in/sebastian-gwozdz/">
            <img
              src="icons/linkedin.png"
              height="80"
              width="80"
              alt="LinkedIn Icon"
              className="Image"
            />
          </a>
          <a href="https://github.com/sebastianmgwozdz">
            <img
              src="icons/github.png"
              height="80"
              width="80"
              alt="Github Icon"
              className="Image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
