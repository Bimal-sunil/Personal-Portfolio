import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FiArrowRight } from "react-icons/fi";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import ExpandingButton from "../components/ExpandingButton";

type Props = {
  onFinish: () => void;
};

const Circle = () => {
  return (
    <div className="w-[5rem] h-[0.5rem] bg-accent rounded-[1rem] lg:w-[2rem] lg:h-[2rem] lg:rounded-[50%]"></div>
  );
};

function Loading(props: Props) {
  const { onFinish } = props;
  const [progress, setProgress] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 40);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div className="relative w-screen h-[100dvh] flex flex-col items-center justify-between bg-secondary text-primary p-[2rem]">
      <div>Lorem ipsum dolor sit amet.</div>
      <div className="font-primary text-header-sm font-semibold flex flex-col items-center gap-[1.5rem] lg:flex-row l">
        Code <Circle /> Create <Circle /> Explore
      </div>
      <ExpandingButton
        onClick={() => {
          setAnimate(true);
          setTimeout(() => {
            onFinish();
          }, 1000);
        }}
        disabled={progress < 100}
        label={
          progress === 100 ? (
            <span className="flex items-center justify-evenly gap-[0.5rem]">
              Get Started <FiArrowRight />
            </span>
          ) : (
            progress
          )
        }
      />
    </div>
  );
}

export default Loading;
