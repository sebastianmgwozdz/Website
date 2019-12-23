import React from "react";
import "./css/Projects.css";
import ProjectTable from "./ProjectTable";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  return (
    <div className="Projects-Background" id="projects">
      <div className="Projects-Header">Projects</div>
      <div className="w-50 p-3">
        <ProjectTable />
        <ProjectCard
          title="Typing Game"
          text="Application where the user is given a set of words and types as many as possible within the time limit while receiving real-time feedback regarding typing speed and accuracy."
          image={require("./images/test.jpeg")}
          switchFunc={props.switchPage}
        ></ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
