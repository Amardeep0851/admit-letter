"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; 

type MarqueeRowProps = {
  items: {
    name: string;
    alt: string;
    image: string;
    tier:string;
    country:string;
    rounded:boolean;
  }[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
  className,
}: MarqueeRowProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden py-8", className)}>
      
      {/* 1. GRADIENT MASKS (Prevents logos from popping in/out) */}
      <div className="absolute inset-y-0 left-0 w-10 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none "  />
      <div className="absolute inset-y-0 right-0 w-10 md:w-40 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none " />

      <motion.div
        className="flex gap-8 md:gap-12 w-max"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            whileTap={{ scale: 0.95 }}
            className={cn(
                " group relative flex items-center justify-center w-[140px] h-[70px] md:w-[160px] md:h-[80px] rounded-2xl transition-all duration-300 lg:hover:-translate-y-1"
            )}
          >
            {/* 3. TOOLTIP: Only visible on Desktop hover */}
            <span className="absolute -top-8 opacity-0 lg:group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center pointer-events-none">
              {item.name}
            </span>

            <div className="relative w-full h-full p-4">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className={cn(
                    "object-contain transition-all duration-500 ",
                    // Mobile: Full color and visible
                    "grayscale-0 opacity-100 scale-90", 
                    // Desktop: Starts muted, wakes up on hover
                    "lg:grayscale-25 lg:opacity-90 lg:scale-85 lg:group-hover:grayscale-0 lg:group-hover:opacity-100 lg:group-hover:scale-100",
                    item.rounded && "rounded-full"
                )}
                priority={false}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRow;