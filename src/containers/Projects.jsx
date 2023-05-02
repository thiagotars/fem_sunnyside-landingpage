import React from "react";
import { projects } from "../constants/data.js";

const Projects = () => {
  const projectElements = projects.map((project, index) => {
    return (
      <img
        key={index}
        className={`w-[50%] md:w-[25%]`}
        src={project.img}
        alt="project image"
      />
    );
  });
  return (
    <section id="projects" className="flex flex-wrap w-full">
      {projectElements}
    </section>
  );
};

export default Projects;
