import React from "react";
import ProjectItem from "./project-item";

const Projects = props => {
  const { content, repositories } = props;

  const projects =
    repositories.length > 0
      ? repositories
      : content("home:projects", { returnObjects: true });

  return (
    <div data-section id="projects" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Projects
      </h2>
      <div className="grid grid-cols-1 grid-rows-auto md:grid-cols-2 md:grid-rows-2 gap-2 ">
        {projects.map(function (repo, index) {
          return (
            <ProjectItem
              key={repo.name}
              id={index}
              name={repo.name}
              stars={repo.stars}
              language={repo.language}
              description={repo.description}
              url={repo.url}
              web_link={repo.web_link}
              topics={repo.projects}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
