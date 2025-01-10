import React from "react";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LanguageButton = props => {
  const { router } = props;
  const path = router.asPath;
  const { locale } = router;
  const switchLanguage = locale === "en" ? "es" : "en";
  return (
    <div className="fixed top-1 left-1 z-20 p-2 backdrop-blur rounded-lg flex items-center space-x-1 transsition-all transform hover:scale-105 hover:text-primary-500 ">
      <GlobeAmericasIcon className="w-8 h-8" />
      <Link className="uppercase" href={path} locale={switchLanguage}>
        {switchLanguage}
      </Link>
    </div>
  );
};

export default LanguageButton;
