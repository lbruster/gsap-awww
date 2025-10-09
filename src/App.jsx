/*type rafce */

import React from "react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorsSection from "./sections/FlavorsSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar></NavBar>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorsSection />
          <NutritionSection />
          <BenefitSection />
          <div className="h-dvh border border-red-500"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
