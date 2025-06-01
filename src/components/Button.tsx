import classNames from "classnames";
import React from "react";

type Props = {
  /**Button label */
  label: React.ReactNode;

  /**Link to redirect */
  link?: string;

  /**target for anchor tag */
  target?: "_self" | "_blank";

  /**Classname for button */
  className?: string;

  /**Inverted color scheme with button style*/
  buttonStyle?: "default" | "contrast";
};
function Button(props: Props) {
  const { label, link, target, buttonStyle, className } = props;
  return (
    <button
      className={classNames(
        "cursor-shrink-target px-[2rem] py-[0.75rem] rounded-[50px] bg-accent text-primary text-body font-primary cursor-pointer font-medium hover:bg-transparent border-[2px] border-transparent hover:border-accent hover:text-accent transition-all duration-[300ms] ease-in-out lg:text-small",
        className,
        {
          ["bg-primary text-secondary hover:border-primary hover:text-primary"]:
            buttonStyle === "contrast",
        }
      )}
    >
      <a href={link} target={target}>
        {label}
      </a>
    </button>
  );
}

export default Button;
