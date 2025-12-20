"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stars from "./stars";

function FooterMotionDesign() {
  return (
    <>
      <div className="absolute md:top-60 lg:left-20 -left-10 top-[400px] -z-10 ">
        <motion.div
          className="size-40 md:size-96 rounded-full bg-blue-900 absolute opacity-30 blur-2xl"
          animate={{ scale: [1, 1.8, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="md:size-32 size-20 rounded-full bg-blue-200 absolute top-0 left-0 -z-10 opacity-20 "
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        animate={{
          x: ["-20vw", "100vw", "100vw", "-20vw", "-20vw"],
          scaleX: [1, 1, -1, -1, 1],
        }}
        // animate={ {scaleX:-1}}
        transition={{
          duration: 60,
          repeat: Infinity,
          times: [0, 0.4, 0.5, 0.9, 1],
        }}
        className="absolute bottom-[160px]  left-0  w-[150px] h-[55] mx-auto -z-50"
      >
        <Image
          src="/images/aeroplane1.png"
          className="opacity-100"
          alt="Buildings"
          fill
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 h-[260px] w-full max-w-[1616px] mx-auto -z-50">
        <Image
          src="/images/image-of-buildings.png"
          className="opacity-100"
          alt="Buildings"
          fill
          objectFit="cover"
        />
      </div>

      <motion.div
        animate={{
          x: ["-35vw", "120vw", "120vw", "-35vw", "-35vw"],
          scaleX: [1, 1, -1, -1, 1],
        }}
        // animate={ {scaleX:-1}}
        transition={{
          duration: 60,
          repeat: Infinity,
          times: [0, 0.4, 0.5, 0.9, 1],
          delay: 20,
        }}
        className="absolute bottom-[210px] left-0 w-[110px] h-[40px] mx-auto -z-50"
      >
        <Image
          src="/images/aeroplane3.png"
          className="opacity-100"
          alt="Buildings"
          fill
        />
      </motion.div>
      <Stars />

      <div className="absolute inset-0  w-full max-w-[1616px] -z-50 bg-linear-to-b from-black to-transparent" />
      {/* <div className="absolute inset-0  w-full max-w-[1616px] -z-50 bg-linear-to-b from-transparent 50% to-red-500/15" /> */}

      <div className="absolute bottom-0 right-0  h-[260px] w-full max-w-[1616px] -z-50">
        <Image
          src="/images/image-of-buildings2.png"
          className="opacity-100 "
          alt="Buildings"
          fill
          objectFit="cover"
        />
      </div>
    </>
  );
}

export default FooterMotionDesign;
