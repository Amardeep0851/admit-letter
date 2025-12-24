"use client"
import React from 'react';
import {motion} from "framer-motion"

function Logo() {
  return (
    <div className="relative w-[241px]  text-nowrap">
      <div className="absolute top-4 text-3xl font-bold text-red-600">
        ADMIT <span className="text-white">LETTER</span>
      </div>
      
      <motion.img 
      src="/images/degree-cap.png" className="w-7 h-7 absolute left-[191px] z-50"
      animate={{rotate:[0, 30, 0,  0, -30,0, 0], y:[2, 8, 3, 3, 8,3, 3], x:[2,2, 0, -94,-94,-94, 0]}}
      transition={{duration:10, repeat:Infinity, times:[0, 0.3, 0.5, 0.6, 0.9]}}
       />

    </div>
  )
}

export default Logo