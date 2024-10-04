"use client";

import { useAnimate } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Basic />
    </div>
  );
}

const Basic = () => {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate("#target", {
      width: "96px",
      height: "96px",
    });

    await animate("#target", { x: 100 });
    await animate("#target", { y: 160, rotate: "360deg" }, { duration: 0.5 });

    await animate("#target", { borderRadius: "100%" }, { duration: 0.5 });
    await animate("#target", {
      x: -150,
      borderRadius: "25px",
      rotate: "720deg",
      backgroundColor: "red",
    });

    await animate(
      "#target",
      {
        y: 0,
        borderRadius: "0",
        rotate: "0deg",
        backgroundColor: "green",
      },
      { duration: 0.5 }
    );

    await animate("#target", {
      x: 0,
      backgroundColor: "blue",
    });

    await animate("#target", {
      width: "100vw", // Full viewport width
      height: "25vh", // Quarter of the viewport height
    });
  };

  return (
    <div ref={scope} className="w-full h-full">
      <div id="target" className="w-24 h-24 bg-green-200"></div>
      <button
        id="button"
        onClick={handleAnimate}
        className="mt-4 rounded-md bg-slate-900 px-4 py-2 text-white font-bold"
      >
        Trigger Animation
      </button>
    </div>
  );
};
