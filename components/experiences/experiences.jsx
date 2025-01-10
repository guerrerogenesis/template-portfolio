import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = props => {
  const { content } = props;
  const jobs = content("home:experiences", { returnObjects: true });
  return (
    <div data-section id="experiences" className="my-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Experiences
      </h2>
      {jobs.map(function (object, index) {
        return (
          <ExperienceItem
            key={index + object.title + object.startDate}
            id={index}
            title={object.title}
            company={object.company}
            href={object.href}
            startDate={object.startDate}
            endDate={object.endDate}
            description={object.description}
            logo={object.logo}
            skills={object.skills}
          />
        );
      })}
    </div>
  );
};

export default Experiences;
