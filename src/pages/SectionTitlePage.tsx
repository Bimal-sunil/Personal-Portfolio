import classNames from "classnames";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

type Props = {
  /**Id of each section*/
  id: string;

  /**Classname for the section */
  className?: string;

  /**Section title */
  title: string;

  /**secondary text */
  subTitle: string;
};
function SectionTitlePage(props: Props) {
  const { id, className, title, subTitle } = props;
  const triggerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end start"],
  });

  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  return (
    <>
      {/* Invisible div that triggers scrollYProgress */}
      <div ref={triggerRef} className="h-[20vh]" />
      <motion.section
        id={id}
        className={classNames(
          "sticky top-0 w-full h-[max(50vh,20rem)] bg-secondary lg:h-screen flex items-center justify-center p-[2rem]",
          className
        )}
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
      >
        <div className="relative flex flex-col items-center justify-center w-full h-full lg:rounded-[20px] lg:border lg:border-primary">
          <h1 className="text-title-sm font-primary font-semibold leading-20 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.1_*_min(25vh,_var(--text-title-lg)))] cursor-grow-target">
            {title}
          </h1>
          <div className="w-[50%] flex items-center gap-[0.5rem]">
            <span className="flex-1 h-[1px] bg-primary"></span>
            <span className="font-secondary text-primary italic text-content-sm sm:text-content-md lg:text-content-lg">
              {subTitle}
            </span>
            <span className="flex-1 h-[1px] bg-primary"></span>
          </div>
          <div className="hidden absolute bottom-0 translate-y-[50%] bg-secondary p-[0.25rem] lg:block">
            <FiArrowDown className="w-full h-full p-[0.5rem] rounded-[50%] border border-primary" />
          </div>
        </div>
      </motion.section>
      {/* Invisible div that visually gives some delay to show full section */}
      <div className="h-[20vh]" />
    </>
  );
}

export default SectionTitlePage;
