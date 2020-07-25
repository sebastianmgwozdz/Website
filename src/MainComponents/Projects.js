import React from "react";
import "./css/Projects.css";
import ProjectCard from "./ProjectCard";
import { withRouter } from "react-router-dom";
import { main } from "../links";
import { Carousel } from "antd";

let projects = [
  {
    title: "Paper Trader",
    description:
      "A platform for users to track and trade stocks according to real market value",
    image: require("./images/PaperTrader.png"),
    video: "video",
    features: [
      "Simulates brokerage account with initial $100,000 balance, displays stock movements graphically in real time, and records profits for long and short positions",
      "Allows user to search individual stocks, providing information ranging from related news to company financials",
      "Compiles all company earnings for the upcoming week",
      "Retrieves real time stock data from Finnhub Stock API and user's positions from MySQL database through RESTful Spring Boot API",
    ],

    tools:
      "JavaScript, Java, Spring Boot, React, MySQL, Firebase Authentication",

    link: "https://github.com/sebastianmgwozdz/PaperTrader",
  },
  {
    title: "Typing Test",
    description:
      "A lightweight application that provides user with feedback regarding typing ability",
    image: require("./images/TypingTestCover.png"),
    video: "icons/TypingGame.gif",
    features: [
      "Highlights texts dynamically to display user's current progress",
      "Displays typing accuracy and speed in real time",
      "Allows user to modify word length and game duration",
    ],
    tools: "JavaScript, React",
    demo: main + "typingtest",
    link:
      "https://github.com/sebastianmgwozdz/Website/tree/master/src/TypingGameComponents",
  },
  {
    title: "Shortest Path Visualizer",
    description:
      "Visualization of the shortest possible path between two specified points in a 2D grid",
    image: require("./images/ShortestPathCover.png"),
    video: "icons/ShortestPath.gif",
    features: [
      "Calculates shortest path using Dijkstra/A* algorithms",
      "Color-codes and displays all traversed squares",
      "Gives user ability to place obstacles affecting algorithm's behavior",
    ],
    tools: "Java, JavaFX",
    link: "https://github.com/sebastianmgwozdz/Shortest-Path",
  },
  {
    title: "Evasive Maneuvers",
    description:
      "2D Game inspired by Helicopter Game and Flappy Bird where the user maneuvers through a series of obstacles",
    image: require("./images/EvasiveCover.png"),
    video: "icons/EvasiveManeuvers.gif",
    features: [
      "Offers sidescroller perspective",
      "Tracks the user's progress using a point system",
    ],
    tools: "Python, Pygame",
    link: "https://github.com/sebastianmgwozdz/Evasive-Maneuvers",
  },
];

function cards() {
  return projects.map((val, index) => {
    return <ProjectCard data={val} key={index}></ProjectCard>;
  });
}

function Projects(props) {
  return (
    <div className="Projects-Background" id="projects">
      <Carousel autoplay style={{ paddingTop: "15vh", height: "90vh" }}>
        {cards()}
      </Carousel>
    </div>
  );
}

export default withRouter(Projects);
