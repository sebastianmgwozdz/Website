import React, { Fragment } from "react";
import "./css/Projects.css";
import ProjectTable from "./ProjectTable";
import ProjectCard from "./ProjectCard";
import { withRouter } from "react-router-dom";

function Projects(props) {
  return (
    <div className="Projects-Background" id="projects">
      <header className="Projects-Header">Projects</header>
      <div className="w-50 p-3" style={{ display: "flex", marginLeft: "2%" }}>
        <ProjectTable />
        <ProjectCard
          title="Typing Test"
          text="Application where the user can test their typing speed and accuracy in real-time."
          image={require("./images/test.jpeg")}
          switchFunc={() => {
            props.history.push("/typingtest");
          }}
        ></ProjectCard>

        <ProjectCard
          title="Messenger (WIP)"
          text="Messaging app built with React frontend and Asp.net Core backend"
          image={require("./images/test.jpeg")}
          switchFunc={() => {
            props.history.push("/messenger");
          }}
        ></ProjectCard>
      </div>
    </div>
  );
}

export default withRouter(Projects);
