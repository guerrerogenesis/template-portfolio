import {
  StarIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function ProjectItem(props) {
  const { name, description, language, stars, url, web_link, topics } = props;
  const topicsArray =
    topics.length > 0 ? topics.map(topic => topic.topic.name) : [];
  return (
    <div className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10 ">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col"
      >
        <div className="text-surface-600 mb-4 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <StarIcon className="w-4 h-4 t text-white" />
            <span className="ml-1 text-xs">{stars}</span>
          </div>
          <div className="text-xs font-medium tracking-widest uppercase">
            {language}
          </div>
        </div>
        <h1 className="mb-4 text-xl subpixel-antialiased">{name}</h1>
        <div className="text-surface-600 text-xs">{description}</div>

        <div className="flex flex-row flex-wrap mb-3">
          {topicsArray
            ? topicsArray.map(function (topic, index) {
                return (
                  <div
                    key={topic}
                    id={index}
                    className="bg-surface-400 uppercase py-1 px-3 rounded-full text-xs m-1"
                  >
                    {topic}
                  </div>
                );
              })
            : ""}
        </div>
      </Link>
      {web_link && (
        <Link
          className="flex justify-end items-center text-xs"
          target="_blank"
          rel="noreferrer"
          href={web_link}
        >
          <ArrowTopRightOnSquareIcon className="w-4 mx-2" />
          Ir al sitio
        </Link>
      )}
    </div>
  );
}

export default ProjectItem;
