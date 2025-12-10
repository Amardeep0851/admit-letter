// components/HeroSectionDark.tsx
import React from "react";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";
import BackgroundAffects from "./background-affects";

const HeroSection2 = () => {
  return (
    <section className="relative w-full overflow-hidden pb-10">
      <BackgroundAffects />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
