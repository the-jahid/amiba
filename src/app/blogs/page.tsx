import { FlipWords } from "@/components/ui/flip-words";
import BentoGridDemo from "../components/blog/bentoGrid"
import { WobbleCardDemo } from "./wooblecard"


const page = () => {
    const words = ["insightful", "informative", "latest", "innovative"];
    return (
      <div className="space-y-10 py-10">
        <div className="text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-center">
          Explore
          <FlipWords words={words} /> <br />
          AI Blogs with Amiba
        </div>
        <WobbleCardDemo />
        <BentoGridDemo />
      </div>
    );
  };

export default page