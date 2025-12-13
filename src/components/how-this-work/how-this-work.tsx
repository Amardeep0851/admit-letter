import React from 'react';
import RightColumn from "./right-column";
import LeftColumn from "./left-column";

const HowThisWork = () => {
  

  return (
    <section className="py-18 overflow-hidden max-w-7xl mx-auto relative px-4 xl:px-0 bg-zinc ">
      <div className="px-8 xl:px-0  md:grid md:grid-cols-5  flex flex-col space-y-6 ">
        <LeftColumn />
        <RightColumn />
      </div>
    </section>
  );
};

export default HowThisWork;

