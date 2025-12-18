"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming your import path
import { ArrowRight } from "lucide-react";

export default function CustomButton({ title, onClick }:{title:string, onClick?:() => void}) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Button
      variant="red"
      size="xlg"
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 1. Content Wrapper: Added relative z-10 to ensure text stays ON TOP of the ripple */}
      <span className="relative z-10 flex items-center gap-2">
        {title}
        <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>

      {/* 2. The Ripple Effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 bg-red-600 rounded-full z-50"
        initial={{ width: 0, height: 0, opacity: 0.5, x: "-50%", y: "-50%" }}
        animate={
          isHovered
            ? {
                width: "500px", // Huge size to ensure it covers the rectangular corners
                height: "500px",
                opacity: 0, // Fades out at the end to create the "Pulse" look
              }
            : {
                width: 0,
                height: 0,
                opacity: 0.5,
              }
        }
        transition={{
          duration: 0.6, // Adjust speed here
          ease: "easeOut",
        }}
        style={{ pointerEvents: "none" }} // Ensures the div doesn't block clicks
      />
    </Button>
  );
}

export function CustomButtonOutlineBlack({ title, onClick }:{title:string, onClick?:() => void}) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Button
      variant="outline"
      size="xlg"
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group bg-transparent hover:bg-transparent text-white hover:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 1. Content Wrapper: Added relative z-10 to ensure text stays ON TOP of the ripple */}
      <span className="relative z-10 flex items-center gap-2">
        {title}
        <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>

      {/* 2. The Ripple Effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 bg-white rounded-full"
        initial={{ width: 0, height: 0, opacity: 0.5, x: "-50%", y: "-50%" }}
        animate={
          isHovered
            ? {
                width: "500px", // Huge size to ensure it covers the rectangular corners
                height: "500px",
                opacity: 0, // Fades out at the end to create the "Pulse" look
              }
            : {
                width: 0,
                height: 0,
                opacity: 0.5,
              }
        }
        transition={{
          duration: 0.6, // Adjust speed here
          ease: "easeOut",
        }}
        style={{ pointerEvents: "none" }} // Ensures the div doesn't block clicks
      />
    </Button>
  );
}