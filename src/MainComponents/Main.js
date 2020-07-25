import React, { useState, useEffect } from "react";
import Front from "./Front";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import NavBar from "./NavBar";
import FadeIn from "react-fade-in";

export default function Main() {
  const [page, setPage] = useState(0);

  const pages = [
    <FadeIn key={0}>
      <Front></Front>
    </FadeIn>,
    <FadeIn key={1}>
      <About></About>
    </FadeIn>,
    <FadeIn key={2}>
      <Projects page={page}></Projects>
    </FadeIn>,
    <FadeIn key={3}>
      <Education></Education>
    </FadeIn>,
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <NavBar setPage={setPage} page={page}></NavBar>
      {
        <div style={{ height: "100%", backgroundColor: "rgb(36, 35, 35)" }}>
          {pages[page]}
        </div>
      }
    </div>
  );
}
