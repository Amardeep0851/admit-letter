"use client"
import React, { memo, useState } from 'react';
import {AnimatePresence, easeInOut, motion} from "framer-motion"
import Image from "next/image";
import { LucideIcon } from "lucide-react";

type LeftColumnProps = {
  currentImage:number;
  steps:{
    step:number;
    title:string;
    content:string;
    icon:LucideIcon;
    image:string;
  }[]
}

function LeftColumn({currentImage, steps}:LeftColumnProps) {
  const [isloading, setIsLoading] = useState(false);
  console.log(currentImage);
  return (
    <motion.div
          className="relative w-full justify-center md:justify-start items-start col-span-2 md:pr-6 order-2 md:order-1 lg:flex hidden "

          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Yellow Circle Background */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[450px] lg:h-[550px] bg-red-700 rounded-full z-0"></div> */}

          {/* Green Abstract Shape */}
          {/* <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[200px] h-[300px] bg-red-700 rounded-r-full opacity-90 z-10 mix-blend-multiply"></div> */}

          {/* Woman Image */} 
          <div className="md:h-[550px] aspect-square z-20 w-full overflow-hidden rounded-md lg:sticky top-24 ">
            <AnimatePresence mode="wait">
              <motion.div className="relative w-full h-full "
              key={currentImage}
              whileHover={{scale:1.1}}
              transition={{duration:0.1, ease:easeInOut}}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
                >
                    <Image
                      src={steps[currentImage].image} // Replace with actual image path
                      alt="Smiling woman holding a notebook"
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/blur.jpg"
                      className="object-cover drop-shadow-xl rounded-xl"
                      onLoadingComplete={() => setIsLoading(true)}
                    />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
  )
}

export default memo(LeftColumn)