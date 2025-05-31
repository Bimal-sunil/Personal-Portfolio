import classNames from "classnames";
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
  return (
    <section
      id={id}
      className={classNames(
        "sticky top-0 w-full h-[max(50vh,20rem)] bg-secondary lg:h-screen flex items-center justify-center py-[2rem] border-t-[5px] border-accent lg:p-[2rem]",
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full lg:rounded-[20px] border-y border-primary lg:border">
        <h1 className="text-title-sm text-primary font-primary font-semibold leading-20 sm:text-title-md sm:leading-30 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.1_*_min(25vh,_var(--text-title-lg)))] cursor-grow-target">
          {title}
        </h1>
        <div className="w-[50%] flex items-center gap-[0.5rem]">
          <span className="flex-1 h-[1px] bg-primary"></span>
          <span className="font-secondary text-primary italic text-content-sm sm:text-content-md lg:text-content-lg">
            {subTitle}
          </span>
          <span className="flex-1 h-[1px] bg-primary"></span>
        </div>
        <div className="absolute bottom-0 translate-y-[50%] bg-secondary p-[0.25rem]">
          <FiArrowDown className="w-full h-full p-[0.5rem] rounded-[50%] border border-primary" />
        </div>
      </div>
    </section>
  );
}

export default SectionTitlePage;
