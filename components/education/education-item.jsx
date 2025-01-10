import React from "react";
import Image from "next/image";

function EducationItem(props) {
  return (
    <div className="group flex flex-row mb-10 lg:p-5 transition-all bg-background hover:bg-surface-200">
      <div className="mr-2 text-surface-600 text-xs basis-1/5 flex flex-col items-center text-center ">
        <Image
          src={props.logo}
          alt={props.alt || "logo"}
          width={props.logo.width}
          height={props.logo.height}
          className="object-contain object-top pt-2 h-auto"
        />
        {props.startDate} {props.endDate ? "- " + props.endDate : ""}
      </div>
      <div className="basis-4/5">
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-all"
        >
          {props.subject}
        </a>
        <div className="text-surface-600 italic">{props.degree}</div>
        <div className="text-surface-600 mb-4">{props.university}</div>
        <div className="text-surface-600 text-sm">{props.description}</div>
      </div>
    </div>
  );
}

export default EducationItem;
