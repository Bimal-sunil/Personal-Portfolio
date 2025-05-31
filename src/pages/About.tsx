import React from "react";
import SectionTitlePage from "./SectionTitlePage";
import Button from "../components/Button";
import AboutImage from "../assets/photos/About.jpg";

function About() {
  return (
    <>
      <SectionTitlePage
        id="about"
        className="relative z-1"
        title="About"
        subTitle="The Journey"
      />
      <section className="relative z-2 bg-primary px-[2rem] py-[2rem] flex flex-col gap-[2rem] items-center lg:px-[5rem] lg:py-[3rem] lg:items-start ">
        <h1 className="font-primary text-secondary text-header-sm leading-[calc(1.2_*_var(--text-header-sm))] font-semibold text-center lg:text-left">
          Bridging design and development to deliver seamless user experiences
          on the web.
        </h1>
        <Button label="Download CV" />
        <div className="flex flex-col items-center gap-[1.5rem] lg:flex-row lg:items-start">
          <div className="rounded-[20px] overflow-hidden lg:flex-1 lg:w-[20rem] lg:h-[20rem] max-h-[70vh]">
            <img
              src={AboutImage}
              alt="Image of myself in a white background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="font-primary text-secondary text-center leading-[calc(1.5_*_var(--text-body))] lg:text-left lg:flex-2">
            <p>
              <span className="font-medium">
                I'm Bimal S Kumar — a Web Developer with 3 years of hands-on
                experience in UI development and design.
              </span>{" "}
              I specialize in creating responsive, user-focused web interfaces
              that balance functionality with visual clarity. My background in
              Computer Science, combined with my role as a Product Development
              Engineer, has equipped me to deliver clean, scalable solutions
              that align with both user needs and business goals.
            </p>
            <br />
            <p>
              <span className="font-medium">
                Beyond the code, I’m deeply passionate about photography and
                design — creative outlets that sharpen my eye for detail and
                influence my problem-solving approach.
              </span>{" "}
              I’m driven by curiosity, collaboration, and a desire to
              continuously evolve. Working with like-minded professionals on
              impactful products is what excites me most, and I’m always open to
              new challenges that push the boundaries of my skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
