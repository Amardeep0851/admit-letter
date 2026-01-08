"use client";

import React from "react";
import MarqueeRow from "./marquee-row";
import MarqueeRow2 from "./marquee-row2";
import { GraduationCap } from "lucide-react";

export const universities = [
  // {
  //   name: "Harvard University",
  //   alt: "Harvard University",
  //   image: "/images/universities/harvard-university.jpg",
  //   tier: "top",
  //   country: "USA",
  //   rounded:false,
  // },
  // {
  //   name: "University of California, Berkeley",
  //   alt: "University of California, Berkeley",
  //   image: "/images/universities/university-of-california-berkeley.jpg",
  //   tier: "top",
  //   country: "USA",
  //   rounded:false,
  // },
  // {
  //   name: "University of Oxford",
  //   alt: "University of Oxford",
  //   image: "/images/universities/university-of-oxford.jpg",
  //   tier: "top",
  //   country: "UK",
  //   rounded:false,
  // },
   // {
  //   name: "Technical University of Munich (TUM)",
  //   alt: "Technical University of Munich",
  //   image: "/images/universities/technical-university-of-munich.jpg",
  //   tier: "top",
  //   country: "Germany",
  //   rounded:false,
  // },
  
  // {
  //   name: "University of Melbourne",
  //   alt: "University of Melbourne",
  //   image: "/images/universities/university-of-melbourne.jpg",
  //   tier: "top",
  //   country: "Australia",
  //   rounded:false,
  // },
  // {
  //   name: "University of Toronto",
  //   alt: "University of Toronto",
  //   image: "/images/universities/university-of-toronto.jpg",
  //   tier: "top",
  //   country: "Canada",
  //   rounded:false,
  // },  
  {
    name: "Northeastern University",
    alt: "Northeastern University",
    image: "/images/universities/northeastern-university.jpg",
    tier: "mid",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"green",
    firstLetter:"N"
  },
  {
    name: "Arizona State University",
    alt: "Arizona State University",
    image: "/images/universities/arizona-state-university.jpg",
    tier: "mid",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"blue",
    firstLetter:"A"
  },
  
  {
    name: "University of Manchester",
    alt: "University of Manchester",
    image: "/images/universities/university-of-manchester.jpg",
    tier: "mid",
    country: "UK",
    rounded:false,
    icon:GraduationCap,
    color:"red",
    firstLetter:"M"
  },
  {
    name: "University of Leicester",
    alt: "University of Leicester",
    image: "/images/universities/university-of-leicester.png",
    tier: "regular",
    country: "UK",
    rounded:false,
    icon:GraduationCap,
    color:"purple",
    firstLetter:"L"
  },

  {
    name: "Webster University",
    alt: "Webster university",
    image: "/images/universities/webster-university.jpg",
    tier: "regular",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"emerald",
    firstLetter:"W"
  },
  {
    name: "New York Institute of Technology ",
    alt: "New York Institute of Technology ",
    image: "/images/universities/new-york.jpg",
    tier: "regular",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"amber",
    firstLetter:"N"
  },
  
  {
    name: "University of Regina ",
    alt: "University of Regina ",
    image: "/images/universities/regina.jpg",
    tier: "regular",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"fuchsia",
    firstLetter:"R"
  },
  {
    name: "University of Sunderland ",
    alt: "University of Sunderland ",
    image: "/images/universities/sunderland.jpg",
    tier: "regular",
    country: "USA",
    rounded:false,
    icon:GraduationCap,
    color:"lime",
    firstLetter:"S"
  },
 
  {
    name: "RWTH Aachen University",
    alt: "RWTH Aachen University",
    image: "/images/universities/rwth-aachen-university.jpg",
    tier: "mid",
    country: "Germany",
    rounded:false,
    icon:GraduationCap,
    color:"orange",
    firstLetter:"R"
  },
  {
    name: "University of Duisburg-Essen",
    alt: "University of Duisburg-Essen",
    image: "/images/universities/university-of-duisburg-essen.jpg",
    tier: "regular",
    country: "Germany",
    rounded:true,
    icon:GraduationCap,
    color:"yellow",
    firstLetter:"D"
  },

  {
    name: "University of Wollongong",
    alt: "University of Wollongong",
    image: "/images/universities/university-of-wollongong.jpg",
    tier: "mid",
    country: "Australia",
    rounded:false,
    icon:GraduationCap,
    color:"teal",
    firstLetter:"W"
  },
  {
    name: "Deakin University",
    alt: "Deakin University",
    image: "/images/universities/deakin-university.jpg",
    tier: "regular",
    country: "Australia",
    rounded:false,
    icon:GraduationCap,
    color:"violet",
    firstLetter:"D"
  },

  
  {
    name: "McMaster University",
    alt: "McMaster University",
    image: "/images/universities/mcmaster-university.jpg",
    tier: "mid",
    country: "Canada",
    rounded:false,
    icon:GraduationCap,
    color:"green",
    firstLetter:"M"
  },
  {
    name: "Memorial University of Newfoundland",
    alt: "Memorial University of Newfoundland",
    image: "/images/universities/memorial-university-of-newfoundland.jpg",
    tier: "regular",
    country: "Canada",
    rounded:false,
    icon:GraduationCap,
    color:"fuchsia",
    firstLetter:"M"
  },

  {
    name: "University of Auckland",
    alt: "University of Auckland",
    image: "/images/universities/university-of-auckland.jpg",
    tier: "top",
    country: "New Zealand",
    rounded:true,
    icon:GraduationCap,
    color:"purple",
    firstLetter:"A"
  },
  {
    name: "Victoria University of Wellington",
    alt: "Victoria University of Wellington",
    image: "/images/universities/victoria-university-of-wellington.jpg",
    tier: "mid",
    country: "New Zealand",
    rounded:false,
    icon:GraduationCap,
    color:"emerald",
    firstLetter:"V"
  },

  {
    name: "University of Dubai",
    alt: "University of Dubai",
    image: "/images/universities/university-of-dubai.jpg",
    tier: "mid",
    country: "UAE",
    rounded:false,
    icon:GraduationCap,
    color:"blue",
    firstLetter:"D"
  },
  {
    name: "American University in Dubai (AUD)",
    alt: "American University in Dubai",
    image: "/images/universities/american-university-in-dubai.jpg",
    tier: "regular",
    country: "UAE",
    rounded:false,
    icon:GraduationCap,
    color:"amber",
    firstLetter:"A"
  },
  {
    name: "Algoma University",
    alt: "Algoma university",
    image: "/images/universities/algoma-university.jpg",
    tier: "regular",
    country: "Canada",
    rounded:false,
    icon:GraduationCap,
    color:"lime",
    firstLetter:"A"
  },
];

const UniversitySection2 = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900">
          Admissions Across leading <span className="text-red-700">Universities</span>
        </h2>
        <p className="text-slate-500 mt-2 text-lg">
          Our students have received admission offers from universities worldwide through application support and guidance.
        </p>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"/>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-0">
        <MarqueeRow2 items={universities.slice(0,9)} direction="left" speed={40} />
        
        <MarqueeRow2 items={[...universities.slice(9)].reverse()} direction="right" speed={50} />
      </div>

    </section>
  );
};



export default UniversitySection2;