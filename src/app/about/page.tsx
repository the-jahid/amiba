import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Mission from "../components/about/mission";
import OrganizerInformation from "../components/about/organizerInformation";
import ThemeExplanation from "../components/about/themeExplanation";

const About = () => {
  const data = [
    {
      title: "Mission",
      content: (
        <Mission />
      ),
    },
    {
      title: "Organizer",
      content: (
        <OrganizerInformation />
      ),
    },
    {
      title: "Theme",
      content: (
        <ThemeExplanation />
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}


export default About