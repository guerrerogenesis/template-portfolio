import React from "react";

const About = props => {
  const { content } = props;
  const paragraphs = content("home:general.about", { returnObjects: true });
  return (
    <div
      data-section
      id="about"
      className="group"
    >
      <div className="text-surface-600 ">
        {paragraphs.map(function (paragraph, index) {
          return (
            <div key={index} className="mb-6">
              {paragraph}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
