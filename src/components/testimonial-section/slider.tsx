import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

type SliderProps = {
  TESTIMONIALS:{
    id:number;
name:string;
role:string;
image:string;
rating:number;
text:string
  }[],
  currentIndex:number;
}

function Slider({ TESTIMONIALS, currentIndex }:SliderProps ) {
  return (
    <div className="overflow-hidden justify-between w-full bg-white rounded-md  shadow-lg min-h-[400px] flex flex-col md:flex-row border border-zinc-200 h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.2, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.2, x: -50 }}
          transition={{ duration: 0.3, ease:easeInOut }}
          className="flex flex-col w-full h-full"
        >
          {/* Image Side */}
          <div className=" relative min-w-[300px] min-h-[300px] md:h-auto bg-gray-100 rounded-md">
            <Image
              src={TESTIMONIALS[currentIndex].image}
              alt={TESTIMONIALS[currentIndex].name}
              fill
              className="object-cover object-top rounded-md z-10 absolute "
            />
            <div className=" z-50 absolute top-2 left-4 p-0.5 px-3 rounded-full opacity-70 backdrop-blur-3xl flex gap-2 bg-white text-sm items-center justify-center">
              <CheckCircle className="size-3 text-green-700" /> Verified Admit
            </div>
            <div className="absolute w-full h-full bg-linear-to-b from-60% from-transparent to-black  opacity-90 z-10" />
            
            <div className="flex  flex-col z-50 absolute bottom-2 right-4 p-1 px-3 ">
              <h4 className="text-lg font-bold text-white  ">
                {TESTIMONIALS[currentIndex].name}
              </h4>
              <p className="text-gray-300 text-sm text-right">
                {TESTIMONIALS[currentIndex].role}
              </p>
            </div>
          </div>
          {/* Content Side */}
          <div className="w-full  p-4 lg:px-8 py-4 flex flex-col justify-center ">
            <blockquote className="text-gray-600 leading-relaxed mb-8 text-lg text-justify font-medium">
              &quot;{TESTIMONIALS[currentIndex].text}&quot;
            </blockquote>

            {/* Author Info */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
