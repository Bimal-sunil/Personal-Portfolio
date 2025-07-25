export const experienceData: {
  jobTitle: string;
  organization: string;
  joiningYear: string;
  leavingYear: string;
  description: string;
}[] = [
  {
    jobTitle: "Product Development Engineer",
    organization: "Envestnet Inc.",
    joiningYear: "2022",
    leavingYear: "2024",
    description:
      "Developed and maintained a scalable React component library, contributing to both functionality and design consistency. Helped shape design system inputs with a focus on reusability and accessibility. Worked with React.js, TypeScript, and Redux.",
  },
  {
    jobTitle: "Senior Product Development Engineer",
    organization: "Envestnet Inc.",
    joiningYear: "2024",
    leavingYear: "",
    description:
      "Contributed to React component library and led its upgrade to React 19 and the latest Material UI version. Implemented visual testing using Chromatic. Also contributed to internal AI initiatives and participated in the development of the Dart component library.",
  },
];

export const resume =
  "https://drive.google.com/file/d/1Ge1qoEPn-dWh1clGJ3VO_Y2DgcumvNBr/view?usp=sharing";

import Portfolio from "./assets/photos/Portfolio.png";
import Cinemanor from "./assets/photos/cinemanor.png";

export const projects: {
  projectName: string;
  techsUsed: string[];
  description: string;
  pathLink: string;
  bannerImage: string;
}[] = [
  {
    projectName: "Cinemanor",
    techsUsed: ["React Js", "Tmdb API", "redux"],
    description:
      "An app to explore movies and TV series across various categories.",
    pathLink: "https://bimal-sunil.github.io/Cinemanor/",
    bannerImage: Cinemanor,
  },
  {
    projectName: "Personal Portfolio",
    techsUsed: ["React Js", "Vite", "Framer Motion"],
    description:
      "A website highlighting my work, profile, and creative journey.",
    pathLink: "https://bimalsunil.com",
    bannerImage: Portfolio,
  },
];

export const socials: {
  name: string;
  link: string;
}[] = [
  {
    name: "Twitter",
    link: "https://x.com/imSolodot",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bimalsunil",
  },
  {
    name: "Github",
    link: "https://github.com/Bimal-sunil",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/solo.dot",
  },
];
