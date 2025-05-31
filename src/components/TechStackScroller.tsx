import React from "react";
import {
  SiJest,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGitlab,
  SiChromatic,
  SiPostman,
  SiMui,
  SiFigma,
  SiRedux,
  SiAxios,
  SiFramer,
  SiGithub,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

function TechStackScroller() {
  const icons = [
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiAxios,
    SiFramer,
    SiVite,
    SiJest,
    FaJava,
    SiGitlab,
    SiGithub,
    SiPostman,
    SiMui,
    SiFigma,
    SiChromatic,
  ];

   const repeatedIcons = Array(2).fill(icons).flat();
  return (
    <div className="w-screen py-[2rem] relative overflow-hidden">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
        to right,
        rgba(12, 31, 26, 1) 0%,
        rgba(12, 31, 26, 0.7) 20%,
        rgba(12, 31, 26, 0) 25%,
        rgba(12, 31, 26, 0) 75%,
        rgba(12, 31, 26, 0.7) 80%,
        rgba(12, 31, 26, 1) 100%
      )`,
        }}
      />
      <div className="flex items-center w-max gap-[2rem] overflow-visible lg:gap-[3rem] animate-scroll">
        {repeatedIcons.map((Icon, index) => {
          return (
            <span key={index}>
              <Icon className="text-sub-header-sm text-accent lg:text-sub-header-lg" />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TechStackScroller;
