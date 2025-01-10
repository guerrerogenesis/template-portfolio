import React from "react";
import VolunteeringItem from "./volunteering-item";

const Volunteering = props => {
  const { content } = props;
  const volunteering = content("home:volunteering", { returnObjects: true });
  return (
    <div data-section id="volunteering" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Volunteering
      </h2>
      {volunteering.map(function (object, index) {
        return (
          <VolunteeringItem
            key={object.position + object.startDate}
            id={index}
            position={object.position}
            event={object.event}
            organisation={object.organisation}
            href={object.href}
            startDate={object.startDate}
            endDate={object.endDate ? object.endDate : ""}
            description={object.description}
          />
        );
      })}
    </div>
  );
};

export default Volunteering;
