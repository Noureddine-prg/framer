import { BasicsOfMotion } from "./components/BasicsOfMotion";
import { Gestures } from "./components/Gestures";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <BasicsOfMotion /> */}
      <Gestures />
    </div>
  );
}
