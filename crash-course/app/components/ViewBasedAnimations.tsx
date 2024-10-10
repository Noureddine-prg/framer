"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <>
      <div style={{ height: "150vh", width: "100%" }} />
      <motion.div
        className="h-screen w-full bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div
        ref={ref}
        style={{ transition: "1s background" }}
        className="h-screen w-full bg-red-500"
      />
    </>
  );
}
