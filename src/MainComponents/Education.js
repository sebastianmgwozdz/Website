import React from "react";
import "./css/Education.css";
import FadeButton from "./FadeButton";

export default function Education() {
  return (
    <div className="Education-Background" id="education">
      <header className="Education-Header">Education</header>
      <div className="Education-Buttons">
        <FadeButton
          label="Institution"
          text="San José State University"
        ></FadeButton>
        <FadeButton
          label="Degree"
          text="BS in Computer Science (2018-2022)"
        ></FadeButton>
        <FadeButton label="Performance" text="3.9 cumulative GPA"></FadeButton>
      </div>
      <FadeButton
        label="Relevant Classes"
        text={
          "Intro to Programming, Intro to Data Structures, Intro to Computer Systems"
        }
      ></FadeButton>
      <img
        src="https://cdn.swimswam.com/wp-content/uploads/2019/02/San-Jose-State-University-logo.png"
        height="200"
        width="200"
        alt="SJSU Logo"
      />
    </div>
  );
}
