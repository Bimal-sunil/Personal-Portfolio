import classNames from "classnames";
import React from "react";

type Props = {
  /**Id of each section*/
  id: string;

  /**Classname for the section */
  className?: string;
};
function SectionTitlePage(props: Props) {
  const { id, className } = props;
  return (
    <section
      id={id}
      className={classNames(
        "w-full h-[max(50vh,20rem)] lg:h-screen",
        className
      )}
    >
      SectionTitlePage
    </section>
  );
}

export default SectionTitlePage;
