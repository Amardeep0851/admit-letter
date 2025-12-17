"use client";

import React from "react";
import MarqueeRow from "./marquee-row";

const UNIVERSITY_LOGOS = [
  "Harvard University",
  "Oxford University",
  "Stanford University",
  "MIT",
  "University of Cambridge",
  "ETH Zurich",
  "University of Toronto",
  "National Univ. of Singapore",
  "Princeton",
  "Yale University"
];

const UniversitySection2 = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Trusted by Top Universities
        </h2>
        <p className="text-slate-500 mt-2">
          Our students have received admits from the world&apos;s most prestigious institutions.
        </p>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"/>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-6">
        <MarqueeRow items={UNIVERSITY_LOGOS} direction="left" speed={40} />
        
        <MarqueeRow items={[...UNIVERSITY_LOGOS].reverse()} direction="right" speed={50} />
      </div>

    </section>
  );
};



export default UniversitySection2;