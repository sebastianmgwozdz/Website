import React from "react";
import "./css/Projects.css";
import ProjectTable from "./ProjectTable";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  return (
    <div className="Projects-Background" id="projects">
      <div className="Projects-Header">Projects</div>
      <div className="w-50 p-3" style={{ display: "flex", marginLeft: "2%" }}>
        <ProjectTable />
        <ProjectCard
          title="Typing Game"
          text="Application where the user can test their typing speed and accuracy in real-time."
          image={require("./images/test.jpeg")}
          switchFunc={props.switchPage}
        ></ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
