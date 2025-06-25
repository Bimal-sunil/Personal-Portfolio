import { socials } from "../data";
import SocialLink from "../components/SocialLink";
import { PiCopyright } from "react-icons/pi";
import classNames from "classnames";
import TranslateY from "../animations/TranslateY";
import Extend from "../animations/Extend";
import Fade from "../animations/Fade";

function Contact() {
  return (
    <section
      id="contact"
      className="w-screen min-h-screen relative z-9 bg-primary px-[2rem] py-[2rem] lg:px-[5rem] lg:py-[3rem] flex flex-col items-center"
    >
      <div className="flex flex-col items-center">
        <TranslateY>
          <h1 className="text-title-sm text-secondary font-primary font-semibold leading-20 sm:text-title-md sm:leading-30 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.1_*_min(25vh,_var(--text-title-lg)))] cursor-grow-target">
            Contact
          </h1>
        </TranslateY>
        <div className="w-full flex items-center gap-[0.5rem]">
          <Extend direction="left">
            <span className="block w-full h-[1px] bg-secondary"></span>
          </Extend>
          <Fade>
            <span className="font-secondary text-secondary italic text-content-sm sm:text-content-md lg:text-content-lg">
              Get In Touch
            </span>
          </Fade>
          <Extend direction="right">
            <span className="block w-full h-[1px] bg-secondary"></span>
          </Extend>
        </div>
      </div>
      <div className="w-full font-primary flex flex-col items-center lg:justify-between py-[3rem] gap-[2rem]">
        <TranslateY>
          <h1 className="font-semibold text-accent text-header-sm flex-2 text-center">
            Looking for a developer with a creative edge?{" "}
            <span className="text-secondary">Let’s talk.</span>
          </h1>
        </TranslateY>
        <div className="flex-1 text-center">
          <div className="flex flex-col mb-[1rem]">
            <span className="text-accent text-small">Email</span>
            <a
              href="mailto:bimalsunilofficial@gmail.com"
              className="text-secondary hover:text-accent transition-all duration-[300ms] ease-in-out cursor-shrink-target"
            >
              bimalsunilofficial@gmail.com
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-accent text-small">Location</span>
            <span className="text-secondary">Kerala, India</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center pb-[2rem] gap-[1rem] lg:flex-row">
          {socials.map((social, index) => {
            return (
              <>
                <SocialLink
                  key={index}
                  socialName={social.name}
                  link={social.link}
                />
                <div
                  className={classNames(
                    "hidden w-[1rem] h-[1rem] bg-accent rounded-[50%] lg:block",
                    {
                      ["lg:hidden"]: index + 1 === socials.length,
                    }
                  )}
                ></div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col items-center font-primary text-secondary gap-[0.5rem]">
          <span className="text-center">
            Designed and Developed by <br />
            <span className="font-semibold">Bimal S Kumar</span>
          </span>
          <span className="text-body flex items-center">
            <PiCopyright />
            2025
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
