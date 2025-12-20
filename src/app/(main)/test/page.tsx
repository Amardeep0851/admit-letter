"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Plane, MapPin, BookOpen } from "lucide-react";

const JourneyStackReveal = () => {
  // Controls for the container shake animation
  const containerControls = useAnimation();

  // The Shake Sequence: A rapid back-and-forth movement
  const triggerShake = async () => {
    await containerControls.start({
      x: [-5, 5, -7, 7, -3, 3, 0], // Violent left-right shake
      y: [2, -2, 0], // Subtle vertical bump
      transition: { duration: 0.4, ease: "easeInOut" }
    });
  };

  return (
    // THE MAIN CONTAINER (This will shake)
    <motion.div 
      animate={containerControls}
      className="relative w-full max-w-[500px] h-[600px] flex items-center justify-center pl-10"
    >
      
      {/* --- LAYER 1 (Bottom): University Brochure Edge --- */}
      <div className="absolute bottom-10 left-0 w-[90%] h-[70%] bg-blue-900/90 rotate-[-6deg] rounded-xl shadow-lg border border-white/10 z-0 overflow-hidden flex items-end p-4">
        <div className="text-blue-200 opacity-50 font-serif text-2xl font-bold flex items-center gap-2">
          <BookOpen size={28} /> Global Prospectus
        </div>
      </div>

      {/* --- LAYER 2: Passport Edge --- */}
      <div className="absolute bottom-14 left-4 w-[88%] h-[68%] bg-[#1a1a1a] rotate-[3deg] rounded-r-xl shadow-xl border-l-4 border-l-amber-600 z-10 flex items-end justify-end p-4">
        <div className="text-amber-500 opacity-70 text-sm font-mono uppercase tracking-widest flex items-center gap-2">
          Passport / Visa Document <MapPin size={16} />
        </div>
      </div>

      {/* --- LAYER 3: Boarding Pass Edge --- */}
      <div className="absolute bottom-20 left-2 w-[92%] h-[30%] bg-white rotate-[-2deg] rounded-xl shadow-md border-dashed border-2 border-zinc-300 z-20 flex items-center justify-between px-6">
        <div>
          <p className="text-[10px] text-zinc-400 uppercase">Flight</p>
          <p className="text-xl font-black text-zinc-800">BA249</p>
        </div>
        <Plane className="text-zinc-300 size-8" transform="rotate(90)" />
        <div className="text-right">
          <p className="text-[10px] text-zinc-400 uppercase">Destination</p>
          <p className="text-xl font-black text-red-700">TORONTO</p>
        </div>
      </div>


      {/* --- LAYER 4 (The Hero): THE ADMIT LETTER --- */}
      <motion.div
        initial={{ y: -400, opacity: 0, rotate: 5 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          damping: 15, 
          stiffness: 100, 
          delay: 0.2 // Small initial delay before sliding starts
        }}
        className="relative z-30 w-full"
      >
        {/* REPLACE THIS WITH YOUR REAL LETTER IMAGE */}
        <div className="relative bg-white rounded-[1rem] overflow-hidden shadow-2xl border border-white/20">
            {/* Using a placeholder div to simulate your letter image for demo */}
            <div className="w-full h-[450px] bg-zinc-50 p-6 flex flex-col relative">
               {/* Simulating image content */}
               <img src="/images/admit-letter1.jpg" className="w-full h-full object-cover" alt="Admit Letter Header" />
            </div>
        </div>
      </motion.div>


      {/* --- LAYER 5 (Top): THE "APPROVED" STAMP SLAM --- */}
      <motion.div
        initial={{ scale: 4, opacity: 0, rotate: 20 }}
        animate={{ scale: 1, opacity: 1, rotate: 12 }}
        transition={{ 
          delay: 1.2, // Wait for letter to settle
          type: "spring", 
          stiffness: 400, // High stiffness for hard impact
          damping: 15 
        }}
        onAnimationComplete={triggerShake} // <--- Triggers shake when slam finishes
        className="absolute top-8 right-8 z-40"
      >
         {/* The Physical Stamp Design */}
         <div className="border-4 border-emerald-600 text-emerald-700 font-black text-2xl px-6 py-2 rounded-lg uppercase tracking-widest mix-blend-multiply shadow-lg bg-emerald-100/50 backdrop-blur-sm">
           Approved
         </div>
      </motion.div>

    </motion.div>
  );
};

export default JourneyStackReveal;