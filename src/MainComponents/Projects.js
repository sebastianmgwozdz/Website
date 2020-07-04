import React from "react";
import "./css/Projects.css";
import ProjectTable from "./ProjectTable";
import ProjectCard from "./ProjectCard";
import { withRouter } from "react-router-dom";

let projects = [
  {
    title: "Paper Trader",
    description:
      "Platform for users to track their favorite stocks and make trades with paper money",
    image: require("./images/test.jpeg"),
    video: "video",
    features: ["feature 1, feature 2"],
    function: "function",
    tools: "tools",
    demo: "demo",
  },
  {
    title: "Typing Test",
    description:
      "A lightweight application that provides user with feedback regarding typing ability",
    image: require("./images/test.jpeg"),
    video: "video",
    features: ["feature 1, feature 2"],
    function: "function",
    tools: "tools",
    demo: "demo",
  },
  {
    title: "Shortest Path Visualizer",
    description:
      "Visualization of the shortest possible path between two specified points in a 2D grid",
    image: require("./images/test.jpeg"),
    video: "video",
    features: ["feature 1, feature 2"],
    function: "function",
    tools: "tools",
    demo: "demo",
  },
  {
    title: "Evasive Maneuvers",
    description:
      "2D Game inspired by Helicopter Game and Flappy Bird where the user maneuvers through a series of obstacles",
    image: require("./images/test.jpeg"),
    video: "video",
    features: ["feature 1, feature 2"],
    function: "function",
    tools: "tools",
    demo: "demo",
  },
];

function cards() {
  console.log(
    projects.map((val) => {
      return <ProjectCard data={val}></ProjectCard>;
    })
  );
  return projects.map((val) => {
    return <ProjectCard data={val}></ProjectCard>;
  });
}

function Projects() {
  return (
    <div className="Projects-Background" id="projects">
      <header className="Projects-Header">Projects</header>
      <span className="w-50 p-3" style={{ display: "flex", marginLeft: "2%" }}>
        {cards()}
      </span>
    </div>
  );
}

export default withRouter(Projects);
