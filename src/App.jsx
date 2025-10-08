/*type rafce */
/* min 1:40:20*/

import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorsSection from "./sections/FlavorsSection";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <HeroSection />
      <MessageSection />
      <FlavorsSection />
      {/*       <div className="h-dvh border border-red-500"></div> */}
    </main>
  );
};

export default App;
