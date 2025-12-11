"use client";

import React from "react";
import { PhoneCall } from "lucide-react"; // Assuming you use lucide-react
import { motion } from "framer-motion";

export default function ContactPhone() {
  return (
    <div className="pt-5 flex items-center gap-2 font-semibold">
      {/* We wrap the icon in a motion.div to apply the animation.
        This isolates the render logic so the text doesn't jitter.
      */}
      <motion.div
        animate={{
          // Keyframes: Start at 0, wiggle left/right, return to 0
          rotate: [0, -10, 10, -10, 10, 0],
        }}
        transition={{
          duration: 0.6,      // The shake lasts 0.6 seconds
          ease: "easeInOut",  // Smooth movement
          repeat: Infinity,   // Loop forever
          repeatDelay: 2      // The crucial 5-second pause between loops
        }}
      >
        <PhoneCall className="size-4" />
      </motion.div>
      
      <span>+91-9232322929</span>
    </div>
  );
}