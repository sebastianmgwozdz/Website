import React from "react";
import "./css/Projects.css";
import ProjectCard from "./ProjectCard";
import { withRouter } from "react-router-dom";
import { main } from "../links";

let projects = [
  {
    title: "Paper Trader",
    description:
      "Platform for users to track their favorite stocks and make trades with paper money",
    image: require("./images/test.jpeg"),
    video: "video",
    features: [
      "Simulates brokerage account with initial $100,000 balance",
      "Displays stock movements graphically in real time",
      "Displays profits for each long and short position",
    ],
    function:
      "Retrieves real time stock data from Finnhub Stock API and user's positions from MySQL database through RESTful Spring Boot API",
    tools: [
      "JavaScript, Java, Spring Boot, React, MySQL, Firebase Authentication",
    ],
    link:
      "https://github.com/sebastianmgwozdz/Website/tree/master/src/PaperTraderComponents",
  },
  {
    title: "Typing Test",
    description:
      "A lightweight application that provides user with feedback regarding typing ability",
    image: require("./images/test.jpeg"),
    video: "video",
    features: [
      "Highlights texts dynamically to display user's current progress",
      "Displays typing accuracy and speed in real time",
      "Allows user to modify word length and game duration",
    ],
    function: null,
    tools: ["JavaScript, React"],
    demo: main + "typingtest",
    link:
      "https://github.com/sebastianmgwozdz/Website/tree/master/src/TypingGameComponents",
  },
  {
    title: "Shortest Path Visualizer",
    description:
      "Visualization of the shortest possible path between two specified points in a 2D grid",
    image: require("./images/test.jpeg"),
    video: "icons/ShortestPath.gif",
    features: [
      "Color-codes and displays all traversed squares",
      "Gives user ability to place obstacles affecting algorithm's behavior",
    ],
    function: "Calculates shortest path using Dijkstra/A* algorithms",
    tools: ["Java", "JavaFX"],
    link: "https://github.com/sebastianmgwozdz/Shortest-Path",
  },
  {
    title: "Evasive Maneuvers",
    description:
      "2D Game inspired by Helicopter Game and Flappy Bird where the user maneuvers through a series of obstacles",
    image: require("./images/test.jpeg"),
    video: "icons/EvasiveManeuvers.gif",
    features: ["Sidescroller perspective", "Point system to track score"],
    function: null,
    tools: ["Python", "Pygame"],
    link: "https://github.com/sebastianmgwozdz/Evasive-Maneuvers",
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
