"use client"
import React from 'react';
import {motion} from "framer-motion"
import Image from "next/image";

function LeftCoumn() {
  return (
    <motion.div
          className="relative w-full flex justify-center md:justify-start items-center col-span-2 md:pr-6 order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Yellow Circle Background */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[450px] lg:h-[550px] bg-red-700 rounded-full z-0"></div> */}

          {/* Green Abstract Shape */}
          {/* <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[200px] h-[300px] bg-red-700 rounded-r-full opacity-90 z-10 mix-blend-multiply"></div> */}

          {/* Woman Image */}
          <div className="md:w-[400px] aspect-square z-20 w-full overflow-hidden rounded-md">
            <motion.div className="relative w-full h-full "
          whileHover={{scale:1.1}}
          transition={{duration:10}}
          >
            <Image
              src="/images/how-this-work3.jpg" // Replace with actual image path
              alt="Smiling woman holding a notebook"
              fill
              className="object-cover drop-shadow-xl rounded-xl"
            />
          </motion.div>
          </div>
        </motion.div>
  )
}

export default LeftCoumn