import SectionTitlePage from "./SectionTitlePage";
import Button from "../components/Button";
import AboutImage from "../assets/photos/About.png";
import { resume } from "../data";
import TranslateY from "../animations/TranslateY";
import Fade from "../animations/Fade";

function About() {
  return (
    <>
      <SectionTitlePage
        id="about"
        className="relative z-1"
        title="About"
        subTitle="The Journey"
      />
      <section className="relative z-2 bg-primary px-[2rem] py-[2rem] flex flex-col items-center lg:px-[5rem] gap-[2rem] justify-between lg:py-[3rem] lg:items-start ">
        <TranslateY>
          <h1 className="font-primary text-accent text-header-sm leading-[calc(1.2_*_var(--text-header-sm))] font-semibold text-center">
            Bridging <span className="text-secondary">design</span> and{" "}
            <span className="text-secondary">development</span> to deliver
            seamless user experiences on the{" "}
            <span className="text-secondary">web.</span>
          </h1>
        </TranslateY>
        <div className="flex flex-col items-center gap-[1.5rem]">
          <TranslateY>
            <div className="rounded-[20px] overflow-hidden lg:w-full">
              <img
                src={AboutImage}
                alt="Image of myself in a white background"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </TranslateY>
          <div className="flex flex-col items-center">
            <div className="font-primary text-secondary text-center leading-[calc(1.5_*_var(--text-body))] lg:w-[60%]">
              <TranslateY>
                <p>
                  <span className="font-medium">
                    I'm Bimal S Kumar — a Web Developer with 3 years of
                    experience in UI development and design.
                  </span>{" "}
                  I build responsive, user-focused interfaces that balance
                  function and clarity. With a background in Computer Science
                  and a role as a Product Development Engineer, I deliver
                  scalable solutions that meet both user and business needs.
                </p>
                <br />
                <p>
                  <span className="font-medium">
                    Beyond coding, I'm passionate about photography and design,
                  </span>{" "}
                  which sharpen my eye for detail and enhance my creative
                  thinking. I'm driven by curiosity, collaboration, and the
                  desire to grow — always eager to take on meaningful,
                  challenging work.
                </p>
              </TranslateY>
            </div>
            <br />
            <Fade>
              <Button label="Download CV" link={resume} target="_blank" />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
