import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <section
      id="home"
      className="sticky top-0 w-full flex flex-col items-center justify-between h-[100dvh] p-[1rem]"
    >
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="font-primary text-title-sm font-semibold text-center text-secondary leading-20 sm:text-title-md sm:leading-30 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.1_*_min(25vh,_var(--text-title-lg)))] cursor-show-image">
          Hey, <br /> I'm Bimal
        </h1>
        <div className="w-full flex gap-[0.5rem] items-center lg:w-[75%] ">
          <span className="flex-1 h-[1px] bg-secondary"></span>
          <span className="font-secondary text-secondary italic text-content-sm sm:text-content-md lg:text-content-lg">
            Web Developer
          </span>
          <span className="flex-1 h-[1px] bg-secondary"></span>
        </div>
      </div>
      <span className="text-body font-primary text-secondary lg:text-small">
        Devfolio of <span className="font-medium">Bimal S Kumar</span>
      </span>
    </section>
  );
}

export default Home;
