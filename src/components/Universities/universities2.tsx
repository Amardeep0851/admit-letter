"use client";

import React from "react";
import MarqueeRow from "./marquee-row";

export const universities = [
  {
    name: "Harvard University",
    alt: "Harvard University",
    image: "/images/universities/harvard-university.jpg",
    tier: "top",
    country: "USA",
    rounded:false,
  },
  {
    name: "University of California, Berkeley",
    alt: "University of California, Berkeley",
    image: "/images/universities/university-of-california-berkeley.jpg",
    tier: "top",
    country: "USA",
    rounded:false,
  },
  
  {
    name: "Northeastern University",
    alt: "Northeastern University",
    image: "/images/universities/northeastern-university.jpg",
    tier: "mid",
    country: "USA",
    rounded:false,
  },
  {
    name: "Arizona State University",
    alt: "Arizona State University",
    image: "/images/universities/arizona-state-university.jpg",
    tier: "mid",
    country: "USA",
    rounded:false,
  },
  {
    name: "University of Oxford",
    alt: "University of Oxford",
    image: "/images/universities/university-of-oxford.jpg",
    tier: "top",
    country: "UK",
    rounded:false,
  },
  {
    name: "University of Manchester",
    alt: "University of Manchester",
    image: "/images/universities/university-of-manchester.jpg",
    tier: "mid",
    country: "UK",
    rounded:false,
  },
  {
    name: "University of Leicester",
    alt: "University of Leicester",
    image: "/images/universities/university-of-leicester.png",
    tier: "regular",
    country: "UK",
    rounded:false,
  },

  {
    name: "Technical University of Munich (TUM)",
    alt: "Technical University of Munich",
    image: "/images/universities/technical-university-of-munich.jpg",
    tier: "top",
    country: "Germany",
    rounded:false,
  },
  {
    name: "RWTH Aachen University",
    alt: "RWTH Aachen University",
    image: "/images/universities/rwth-aachen-university.jpg",
    tier: "mid",
    country: "Germany",
    rounded:false,
  },
  {
    name: "University of Duisburg-Essen",
    alt: "University of Duisburg-Essen",
    image: "/images/universities/university-of-duisburg-essen.jpg",
    tier: "regular",
    country: "Germany",
    rounded:true,
  },

  {
    name: "University of Melbourne",
    alt: "University of Melbourne",
    image: "/images/universities/university-of-melbourne.jpg",
    tier: "top",
    country: "Australia",
    rounded:false,
  },
  {
    name: "University of Wollongong",
    alt: "University of Wollongong",
    image: "/images/universities/university-of-wollongong.jpg",
    tier: "mid",
    country: "Australia",
    rounded:false,
  },
  {
    name: "Deakin University",
    alt: "Deakin University",
    image: "/images/universities/deakin-university.jpg",
    tier: "regular",
    country: "Australia",
    rounded:false,
  },

  {
    name: "University of Toronto",
    alt: "University of Toronto",
    image: "/images/universities/university-of-toronto.jpg",
    tier: "top",
    country: "Canada",
    rounded:false,
  },
  {
    name: "McMaster University",
    alt: "McMaster University",
    image: "/images/universities/mcmaster-university.jpg",
    tier: "mid",
    country: "Canada",
    rounded:false,
  },
  {
    name: "Memorial University of Newfoundland",
    alt: "Memorial University of Newfoundland",
    image: "/images/universities/memorial-university-of-newfoundland.jpg",
    tier: "regular",
    country: "Canada",
    rounded:false,
  },

  {
    name: "University of Auckland",
    alt: "University of Auckland",
    image: "/images/universities/university-of-auckland.jpg",
    tier: "top",
    country: "New Zealand",
    rounded:true,
  },
  {
    name: "Victoria University of Wellington",
    alt: "Victoria University of Wellington",
    image: "/images/universities/victoria-university-of-wellington.jpg",
    tier: "mid",
    country: "New Zealand",
    rounded:false,
  },

  {
    name: "University of Dubai",
    alt: "University of Dubai",
    image: "/images/universities/university-of-dubai.jpg",
    tier: "mid",
    country: "UAE",
    rounded:false,
  },
  {
    name: "American University in Dubai (AUD)",
    alt: "American University in Dubai",
    image: "/images/universities/american-university-in-dubai.jpg",
    tier: "regular",
    country: "UAE",
    rounded:false,
  },
];

const UniversitySection2 = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Trusted by Top Universities
        </h2>
        <p className="text-slate-500 mt-2">
          Our students have received admits from the world&apos;s most prestigious institutions.
        </p>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"/>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-0">
        <MarqueeRow items={universities} direction="left" speed={40} />
        
        <MarqueeRow items={[...universities].reverse()} direction="right" speed={50} />
      </div>

    </section>
  );
};



export default UniversitySection2;