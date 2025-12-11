"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define your images here. 
// In a real app, you might pass these in as props.
const SLIDES = [
  { id: 1, src: "/images/offer-letter-with-person.png", alt: "Student holding offer letter" },
  { id: 2, src: "/images/offer-letter-with-person2.png", alt: "Student working on laptop" }, // Example
  { id: 3, src: "/images/offer-letter-with-person.png", alt: "Happy graduate student" },     // Example
];

function RightColumn() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Set up the interval loop
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 3000); // 5 seconds

    // CLEANUP: Essential to prevent memory leaks when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full col-span-2">
      
      {/* Container for the slider and background effects */}
      <div className="relative w-full max-w-lg h-[400px] lg:h-[500px] flex justify-center items-center mx-auto group">
        
        {/* The Slider Window */}
        <div className="relative w-full h-full overflow-hidden z-40">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                
                priority={index === 0} 
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 opacity-40 blur-3xl w-[330px] aspect-square border-red-700 -z-40 pointer-events-none" />
      </div>

      {/* Floating decorative element (Lime curve) */}
      <div className="absolute right-0 top-1/4 w-24 h-48 border-[#cbe346] rounded-l-full opacity-90 hidden lg:block pointer-events-none" />
    </div>
  );
}

export default RightColumn;