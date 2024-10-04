"use client";

import { motion, MotionConfig } from "framer-motion";

export function Gestures() {
  return (
    <div className="grid place-items-center h-full w-full">
      <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "1.5deg" }}
          className="w-48 rounded-lg h-8 text-xl bg-purple-300"
        >
          click me!
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "1.5deg" }}
          className="w-48 rounded-lg h-8 text-xl bg-purple-600"
        >
          click me!
        </motion.button>
      </MotionConfig>

      <div id="target" className="w-72 h-72 bg-orange-200"></div>
    </div>
  );
}
