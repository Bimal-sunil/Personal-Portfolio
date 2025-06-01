import React from "react";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
import { formatToTwoDigits } from "../helpers";
import classNames from "classnames";

type Props = {
  /**Project name */
  projectName: string;

  /**Techs used */
  techStack: string[];

  /**Banner image */
  bannerImage: string;

  /**Hosted link */
  link?: string;

  /**Card position */
  position?: "left" | "right";

  /**index value for each card */
  index: number;
};

function ProjectCard(props: Props) {
  const { bannerImage, index, projectName, techStack, position, link } = props;
  const updatedIndex = formatToTwoDigits(index);
  return (
    <div
      className={classNames(
        "w-full min-h-[20rem] bg-secondary rounded-[1rem] p-[1rem] font-primary md:w-[20rem] flex flex-col items-center justify-between",
        {
          ["md:self-start"]: position === "left",
          ["md:self-end"]: position === "right",
        }
      )}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="w-full h-[50%] rounded-[0.5rem] overflow-hidden">
        <img
          src={bannerImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full relative border-y-[1px] border-primary mt-[1rem] py-[1rem]">
        <p className="absolute top-0 left-0 -translate-y-[50%] text-small font-semibold bg-secondary pr-1">
          {updatedIndex}
        </p>
        <div className="flex gap-[0.5rem] justify-between">
          <div>
            <h3 className="font-semibold text-content-lg leading-[calc(1.3_*_var(--text-content-lg))]">
              {projectName}
            </h3>
            <span className="text-small">{techStack.join(" . ")}</span>
          </div>
          <Button
            label={
              <FiArrowUpRight className="text-content-sm lg:text-content-lg" />
            }
            link={link}
            target="_blank"
            className="h-min"
            buttonStyle="contrast"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
