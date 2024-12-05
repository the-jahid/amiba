
import { HeroSection } from "./components/home/HeroSection";
import { Countdown } from "./components/home/Countdown";
import { Overview } from "./components/home/Overview";
import { HeroParallaxDemo } from "./components/home/Newhero";



export default function Home() {

  const targetDate = new Date("2024-12-31T23:59:59")
  return (
    <main>
      {/* <HeroSection /> */}
     <HeroParallaxDemo />
     <Overview />
      <Countdown  targetDate={targetDate} />
    </main>
  )
}

