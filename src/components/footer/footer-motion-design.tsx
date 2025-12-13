"use client"
import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion"

function FooterMotionDesign() {
  return (
    <>
      <motion.div 
      className="size-150 rounded-full  bg-red-700 absolute -bottom-50 -left-50 -z-10   opacity-10  "
      // animate={{x:[200, 100, -100, 0], y:[200, 100, -100, 0]}}
      // transition={{duration:15, repeat:Infinity}}
       />
        {/* <motion.div 
      //   animate={{x:[0, 100, -100, 0], y:[0, 100, -100, 0]}}
      // transition={{duration:8, repeat:Infinity}}
        className="w-1/2 h-full bg-zinc-100 absolute top-0 right-0 rounded-full -z-10  opacity-15 blur-2xl" /> */}
        <Image src="/images/footer-students.png" fill alt="" className="absolute -z-30 opacity-5" />
    </>
  )
}

export default FooterMotionDesign