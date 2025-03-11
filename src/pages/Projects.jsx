import React from "react";
import { projects } from "../data/projects";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="min-h-screen p-8 pt-32">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
