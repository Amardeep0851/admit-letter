import React from "react";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";
import BackgroundAffects from "./background-affects";

const HeroSection2 = () => {
  return (
    <div className=" bg-zinc-950">
      <section className="w-full overflow-hidden pb-10 py-12 max-w-7xl mx-auto relative px-4 xl:px-0 ">
      <BackgroundAffects />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection2;
