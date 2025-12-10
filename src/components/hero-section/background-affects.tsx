"use client"
import React from 'react';
import {motion} from "framer-motion"


function BackgroundAffects() {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] aspect-square bg-zinc-900 rounded-full opacity-60 pointer-events-none" />
      {/* Lime accent circle segment on the far right */}
      <motion.div 
      animate={{x:[0, 100, 100, 200, 100,  0], y:[0, 100, 200, 200, 100,  0]}}
      transition={{duration:8, repeat:Infinity}}
      className="absolute top-0 border-8 left-0 w-[500px] h-[500px] bg-red-700 rounded-full opacity-20 blur-2xl pointer-events-none" />
      {/* <HeroSection /> */}
    </div>
  )
}

export default BackgroundAffects