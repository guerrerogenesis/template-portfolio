"use client";

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = props => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const { t } = props;

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        const visibleSection = entries.find(
          entry => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach(section => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      id="navigation"
      className="flex flex-col py-10 font-medium tracking-widest uppercase text-lg lg:text-sm"
    >
      <NavItem
        active={activeSection === "about" ? true : false}
        href="#about"
        num="01"
        name={t("global:navigation.about")}
      ></NavItem>
      <NavItem
        active={activeSection === "experiences" ? true : false}
        href="#experiences"
        num="02"
        name={t("global:navigation.experiencies")}
      ></NavItem>
      <NavItem
        active={activeSection === "education" ? true : false}
        href="#education"
        num="03"
        name={t("global:navigation.education")}
      ></NavItem>
      <NavItem
        active={
          activeSection === "projects" || activeSection === "credits"
            ? true
            : false
        }
        href="#projects"
        num="05"
        name={t("global:navigation.projects")}
      ></NavItem>
    </div>
  );
};

export default Navigation;
