import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import LanguageButton from "./language-button";

const Header = props => {
  const { t, router } = props;
  return (
    <div className="lg:fixed lg:w-5/12 h-full basis-1.5/4 flex flex-col justify-between pb-8  self-center lg:self-auto ">
      <div className="mt-32">
        <h1 className="text-4xl text-center lg:text-left lg:text-5xl subpixel-antialiased tracking-wide">
          {t("home:general.name") || "Name"}
        </h1>
        <h2 className="text-surface-600 pt-2 text-base font-normal tracking-wider text-center lg:text-left">
          {t("home:general.headline") || "Headline"}
        </h2>
      </div>
      <Navigation t={t}></Navigation>
      <Socials content={t}></Socials>
      <LanguageButton router={router} />
    </div>
  );
};

export default Header;
