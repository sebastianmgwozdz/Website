import React from "react";
import "./css/About.css";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="About-Background" id="about">
      <header className="About-Header">
        <span className="About-Subtext">
          From an early age, I have always had a place in my heart for
          technology. I appreciate tech in all forms, from cars to smartphones,
          though computers have interested me the most. When I am not studying,
          playing guitar, or listening to music, I will be channeling my
          creativity to build something that leaves me feeling fulfilled.
          Programming is one of the many tools I use to achieve that.
        </span>
        <span style={{ marginBottom: "2%", marginTop: "2%" }}>Skills</span>
        <Skills></Skills>
      </header>
    </div>
  );
}
