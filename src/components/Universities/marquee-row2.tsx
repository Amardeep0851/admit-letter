"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { TypeOf } from "zod/v3";

type MarqueeRowProps = {
  items: {
    name: string;
    alt: string;
    image: string;
    tier: string;
    country: string;
    rounded: boolean;
    color:string;
    firstLetter:string;
    icon: LucideIcon;
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

  const colorMapText = {
  amber: "text-amber-700",
  green:"text-green-700",
  blue:"text-blue-700",
  red:"text-red-700",
  purple:"text-purple-700",
  emerald:"text-emerald-700",
  ember:"text-ember-700",
  fuchsia:"text-fuchsia-700",
  lime:"text-lime-700",
  orange:"text-orange-700",
  teal:"text-teal-700",
  yellow:"text-yellow-700",
  violet:"text-violet-700",
};
const colorMapBg = {
  amber: "bg-amber-700",
  green:"bg-green-700",
  blue:"bg-blue-700",
  red:"bg-red-700",
  purple:"bg-purple-700",
  emerald:"bg-emerald-700",
  ember:"bg-ember-700",
  fuchsia:"bg-fuchsia-700",
  lime:"bg-lime-700",
  orange:"bg-orange-700",
  teal:"bg-teal-700",
  yellow:"bg-yellow-700",
  violet:"bg-violet-700",
};
const colorMapLight = {
  amber: "bg-amber-50",
  green:"bg-green-50",
  blue:"bg-blue-50",
  red:"bg-red-50",
  purple:"bg-purple-50",
  emerald:"bg-emerald-50",
  ember:"bg-ember-50",
  fuchsia:"bg-fuchsia-50",
  lime:"bg-lime-50",
  orange:"bg-orange-50",
  teal:"bg-teal-50",
  yellow:"bg-yellow-50",
  violet:"bg-violet-50",
};
const colorMapLessLight = {
  amber: "bg-amber-100",
  green:"bg-green-100",
  blue:"bg-blue-100",
  red:"bg-red-100",
  purple:"bg-purple-100",
  emerald:"bg-emerald-100",
  ember:"bg-ember-100",
  fuchsia:"bg-fuchsia-100",
  lime:"bg-lime-100",
  orange:"bg-orange-100",
  teal:"bg-teal-100",
  yellow:"bg-yellow-100",
  violet:"bg-violet-100",
};
  return (
    <div className={cn("relative w-full overflow-hidden py-6", className)}>
      {/* 1. GRADIENT MASKS (Prevents logos from popping in/out) */}
      <div className="absolute inset-y-0 left-0 w-10 md:w-40 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none " />
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
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            whileTap={{ scale: 0.95 }}
            className={cn(
              " group relative flex items-center justify-center flex-shrink-0 mx-0  rounded-xl px-6 py-4 transition-all duration-300 transform hover:-translate-y-0.5 group grayscale-25 hover:grayscale-0 " ,
              `${colorMapLight[item.color as keyof typeof colorMapLight]}`  || "bg-zinc-100"
              
            )}
          >
            <div
              key={index}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className={cn("text-white text-sm size-5 flex items-center justify-center px-1 rounded-sm", colorMapBg[item.color as keyof typeof colorMapBg] || "bg-zinc-700")}>
                  {item.firstLetter}
                </span>
                <span className={cn("text-lg font-bold transition-colors", colorMapText[item.color as keyof typeof colorMapText] || "bg-zinc-700")}>
                  {item.name}
                </span>
              </div>
              <div className="flex items-end justify-end">
                <h4 className={cn("  inline-block px-3 py-0.5 font-medium rounded-sm text-sm", colorMapLessLight[item.color as keyof typeof colorMapLessLight] || "bg-zinc-100")}>
                {item.country}
              </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRow;
