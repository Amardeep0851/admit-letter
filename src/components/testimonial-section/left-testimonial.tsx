import React from "react";
import { motion } from "framer-motion";

function LeftTestimonial() {
  return (
    <div className="lg:col-span-5 lg:pr-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Yellow Icon Badge */}
        
        <div className="rounded-md text-sm px-4 py-1 text-yellow-800 font-semibold flex gap-2 items-center w-46 shadow-md border border-zinc-100 mb-6 bg-yellow-100">
          <div className="relative flex items-center">
            <div className="size-2 bg-yellow-700 animate-ping rounded-full absolute" />
            <div className="size-2 bg-yellow-700 rounded-full absolute" />
          </div>
          <div className="pl-2">Students Feedback</div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold  leading-tight mb-5">
          Trusted by students <br />
          <span className="text-red-700">across India.</span>
        </h2>

        <p className="text-zinc-600 leading-relaxed mb-6 text-justify text-lg">
          Every month, numerous students receive their admit letters through our platform — fast, simple, and fully verified.
        </p>

        {/* Stats Block */}
        <div className="flex items-center gap-6">
          <div className="h-16 w-[4px] bg-red-700" />
          <div className="flex flex-col text-zinc-500">
          <span className="text-4xl font-bold text-zinc-900 ">97%</span>
          Application Success Rate
          </div> 
          <div className="h-16 w-[4px] bg-zinc-300" /> 
          <div className="flex flex-col text-zinc-500">
          <span className="text-4xl font-bold text-zinc-900 ">500+</span>
          Happy Students
          </div> 
        </div>
      </motion.div>
    </div>
  );
}

export default LeftTestimonial;
