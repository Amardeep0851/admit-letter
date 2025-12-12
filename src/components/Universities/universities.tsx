"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const universities = [
  "Harvard University",
  "MIT",
  "Stanford University",
  "University of Toronto",
  "Oxford University",
  "University of Melbourne",
  "Arizona State University",
  "McGill University",
  "Cambridge University",
  "Monash University",
];

export default function UniversitiesSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!row1 || !row2) return;

    // Duplicate content for seamless looping
    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;

    gsap.to(row1, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.to(row2, {
      xPercent: 50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient mask for premium fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 " />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 " />

      {/* Row 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <div ref={row1Ref} className="flex gap-6">
          {universities.map((u, i) => (
            <div
              key={i}
              className="px-6 py-2 bg-white border rounded-full shadow text-gray-800 font-medium whitespace-nowrap"
            >
              {u}
            </div>
          ))}
          
        </div>
      </div>
      

      {/* Row 2 */}
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={row2Ref} className="flex gap-6">
          {universities.map((u, i) => (
            <div
              key={i}
              className="px-6 py-2 bg-white border rounded-full shadow text-gray-800 font-medium whitespace-nowrap"
            >
              {u}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

