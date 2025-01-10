import React from "react";
import Link from "next/link";
import Image from "next/image";

function ExperienceItem(props) {
  return (
    <div className="group flex flex-row mb-10 lg:p-5 transition-all hover:bg-surface-200">
      <div className="basis-1/5">
        <Image
          src={props.logo}
          alt="Company Logo"
          width={props.logo.width}
          height={props.logo.height}
          className="object-contain object-top pr-2 lg:pr-0 pt-2 m-auto h-auto"
        />
      </div>
      <div className="basis-4/5">
        <Link
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-all"
        >
          {props.title} | {props.company}{" "}
        </Link>
        <div className="mb-2 text-surface-600">
          {props.startDate} - {props.endDate}
        </div>
        <div className="text-surface-600 mb-4">{props.description}</div>
        <div className="flex flex-row flex-wrap">
          {props.skills
            ? props.skills.map(function (object, index) {
                return (
                  <div
                    key={object}
                    id={index}
                    className="bg-surface-400 py-1 px-3 rounded-full text-xs m-1"
                  >
                    {object}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
