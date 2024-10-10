import { AnimationControls } from "./components/AnimationControls";
import { BasicsOfMotion } from "./components/BasicsOfMotion";
import { Gestures } from "./components/Gestures";
import { ScrollBasedAnimations } from "./components/ScrollBasedAnimations";
import { ViewBasedAnimations } from "./components/ViewBasedAnimations";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-2 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollBasedAnimations />
    </div>
  );
}
