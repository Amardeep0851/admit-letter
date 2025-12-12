"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

function RightColumn() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<HTMLDivElement[]>([]);

  const steps = [
    "Submit your details — call us or fill out the form.",
    "We check your profile and required documents.",
    "Our team submits your application.",
    "You receive the official admit letter for ₹1 only.",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((item, i) => {
      const heading = item.querySelector("h3");
      const line = linesRef.current[i];

      // STEP TEXT FADE-IN
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 5,
          duration: 0.1,
          // yoyo:true,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
              // scrub: true,
          },
        });
      }

      // VERTICAL LINE SCROLL GROWTH
      if (line) {
        gsap.fromTo(
          line,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 68%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full space-y-2 col-span-3 order-1 md:order-2 mb-6 md:mb-0"
    >

      {/* Header */}
      <motion.div 
      className="flex items-center space-x-2 text-gray-700 font-medium"
      initial={{y:90, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.3}}
      viewport={{amount:0.9, once:true}}
      >
        <GraduationCap className="w-6 h-6 text-yellow-600" />
        <span>We help you get into your dream college.</span>
      </motion.div>

      {/* Title */}
      <motion.h1 
      className="text-4xl lg:text-5xl font-bold text-red-700 leading-tight pb-4"
      initial={{y:90, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.3}}
      viewport={{amount:0.9, once:true}}
      >
        How does this work?
      </motion.h1>

      {/* TIMELINE STEPS */}
      {steps.map((content, index) => (
        <div
          ref={(el) => {
            if (el) itemsRef.current[index] = el;
          }}
          key={index}
          className="relative pl-8 pb-10"
        >
          {/* DOT */}
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-red-600" />

          {/* ANIMATED LINE */}
          {index !== steps.length - 1 && (
            <div
              ref={(el) => {
                if (el) linesRef.current[index] = el;
              }}
              className="absolute left-1.5 top-5 w-[2px] bg-red-200"
              style={{ height: "0%" }} // GSAP will animate this
            ></div>
          )}

          {/* TEXT */}
          <h3 className="text-xl font-semibold text-gray-900">
            {content}
          </h3>
        </div>
      ))}

      {/* CTA Button */}
      <motion.div
      initial={{y:10, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.3}}
      viewport={{amount:0.9, once:true}}
      >
        <Button variant="red">
          <motion.div whileHover={{ x: 3 }} className="flex items-center">
            Start Now
            <ArrowRight className="w-5 h-5 ml-2 transition-transform" />
          </motion.div>
        </Button>
      </motion.div>

      {/* Feature Block */}
      <motion.div 
      className="bg-zinc-200 py-2 px-3 mt-4 rounded-md flex items-center space-x-3"
      initial={{y:10, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.3}}
      viewport={{amount:0.9, once:true}}
      >
        <BookOpen className="w-5 h-5 text-red-700" />
        <p className="text-zinc-600 leading-relaxed">
          It’s an official document issued by the university or college.
        </p>
      </motion.div>
    </div>
  );
}

export default RightColumn;
