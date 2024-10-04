"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="grid place-items-center h-full w-full">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="w-72 rounded-lg h-8 text-xl bg-purple-300"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              backgroundColor: "white",
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            id="target"
            className="w-72 h-72 bg-green-200"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
