import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Socials = props => {
  const { content } = props;
  const socials = content("home:general.socials", { returnObjects: true });
  return (
    <div className="flex flex-wrap justify-center lg:justify-start text-lg lg:text-sm">
      {socials.map(function (value, index) {
        return (
          <Link
            key={index}
            href={value.url}
            className={classNames(
              "flex flex-row justify-center items-center mb-8 mx-4 lg:mx-0 lg:mr-10 lg:mb-8 transition-all transform hover:scale-110",
              value.isButton &&
                " bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-8 rounded"
            )}
          >
            <Image
              src={value.icon.src}
              alt={value.icon.alt}
              width={20}
              height={20}
              className="object-contain object-top"
            />
            <span className="pl-2">{value.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
