import Link from "next/link";
import React from "react";

const Credits = props => {
  return (
    <div data-section id="credits" className="group mt-32">
      <div className="text-surface-600">
        <div className="mb-4">
          This website was built using a{" "}
          <Link
            href="https://github.com/karlgrossmann/two-column-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            template
          </Link>{" "}
          by{" "}
          <Link
            href="https://karlgrossmann.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            Karl Grossmann
          </Link>{" "}
          using{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            Next.js
          </Link>{" "}
          and
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            {" "}
            Tailwind CSS
          </Link>
          . The inspiration for the design comes from{" "}
          <Link
            href="https://www.sarahdayan.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            Sarah Dayan{" "}
          </Link>
          and{" "}
          <Link
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-background transition-all hover:text-primary-500"
          >
            Brittany Chiang
          </Link>
          .
        </div>
        <div className="flex flex-row justify-between">
          <Link
            href="/imprint"
            rel="noopener noreferrer"
            className="scroll-auto transition-all hover:text-on-background"
          >
            Imprint
          </Link>
          <Link
            href="/privacy"
            rel="noopener noreferrer"
            className="scroll-auto transition-all hover:text-on-background"
          >
            Privacy Statement
          </Link>
          <span>{props.data.name} | 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
