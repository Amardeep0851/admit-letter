import React from "react";
import LeftColumn from "./left-column";
import BackgroundAffects from "./background-affects";
import CoinFlipLetter from "../test/flip-coin2";


const HeroSection2 = () => {
  return (
    <div className=" bg-zinc-950">
      <section className="w-full overflow-hidden md:pt-12 pt-4 pb-10  max-w-7xl mx-auto relative px-4 xl:px-0 ">
      <BackgroundAffects />
        <div className=" w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12 gap-y-12 items-center border-red-900">
            <LeftColumn />
             <CoinFlipLetter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection2;
