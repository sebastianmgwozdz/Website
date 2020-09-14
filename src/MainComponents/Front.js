import React, { useState } from "react";
import "./css/FrontPage.css";
import { withRouter } from "react-router-dom";
import { main } from "../links";
import Label from "./Label";

function Front(props) {
  if (window.location.href !== main) {
    props.history.replace("/");
  }

  return (
    <div className="Transparent-Background">
      <span>
        <img
          src="icons/portrait.jpg"
          alt="Portrait"
          style={{
            height: "65vh",
            borderRadius: "5px",
            marginTop: "15vh",
            marginLeft: "20vw",
            float: "left",
          }}
        ></img>
        <Label></Label>
      </span>
    </div>
  );
}

export default withRouter(Front);
