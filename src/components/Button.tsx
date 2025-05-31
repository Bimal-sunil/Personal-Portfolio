import React from "react";

type Props = {
  /**Button label */
  label: React.ReactNode;
};
function Button(props: Props) {
  const { label } = props;
  return (
    <button className="cursor-shrink-target px-[2rem] py-[0.75rem] rounded-[50px] bg-accent text-primary text-body font-primary cursor-pointer font-medium hover:bg-transparent border-[2px] border-transparent hover:border-accent hover:text-accent transition-all duration-[300ms] ease-in-out lg:text-small">
      {label}
    </button>
  );
}

export default Button;
