import React from "react";
import EducationItem from "./education-item";

const Education = props => {
  const { content } = props;
  const certificates = content("home:education", { returnObjects: true });
  return (
    <div data-section id="education" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Education
      </h2>
      {certificates.map(function (object, index) {
        return (
          <EducationItem
            key={`${object.subject}+${object.startDate}`}
            id={index}
            subject={object.subject}
            degree={object.degree}
            university={object.university}
            href={object.href}
            startDate={object.startDate}
            endDate={object.endDate ? object.endDate : ""}
            description={object.description}
            logo={object.logo}
          />
        );
      })}
    </div>
  );
};

export default Education;
