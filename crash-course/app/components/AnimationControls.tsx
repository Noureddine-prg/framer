"use client";

import { motion, useAnimationControls } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

export function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div className="grid place-items-center h-full w-full">
      <button
        onClick={handleClick}
        id="button"
        className="bg-white w-1/4 h-8 text-black font-bold rounded-md"
      >
        Click me!
      </button>

      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "180deg",
          },
        }}
        initial="initial"
        animate={controls}
        className="w-72 h-72 bg-green-200"
      ></motion.div>
    </div>
  );
}
