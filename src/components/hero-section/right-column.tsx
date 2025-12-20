"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import FloatingCard from "./floating-card";

const slides = [
  { 
    src: "/images/admit-letter1.jpg", 
    alt: "Students office letter", 
    universityOrCollege:"u",
    institute:"Toronto Univ.",
    FirstLetter:"H",    
  }, 
  { 
    src: "/images/admit-letter1.jpg", 
    alt: "Students office letter", 
    universityOrCollege:"u",
    institute:"McMaster Univ.",
    FirstLetter:"M",    
  }, 
];

function RightColumn() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Set up the interval loop
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 5 seconds

    // CLEANUP: Essential to prevent memory leaks when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative col-span-2 h-[500px] w-full ">
        <div className="z-40 flex justify-center items-center group  ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <FloatingCard slide={slide} index={index} />
            </div>
          ))}
        

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 opacity-40 blur-3xl w-[330px] aspect-square border-red-700 -z-40 pointer-events-none" />
      </div>

    </div>
  );
}

export default RightColumn;