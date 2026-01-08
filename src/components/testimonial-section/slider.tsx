import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Star } from "lucide-react";

type SliderProps = {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
  }[];
  currentIndex: number;
};

function Slider({ testimonial, currentIndex }: SliderProps) {
  return (
    <div className="overflow-hidden w-full bg-white rounded-md  p-6 px-8 shadow-lg min-h-[370px] border border-zinc-100 h-full ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.2, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.2, x: -50 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="w-full h-full"
        >
          <figure className="group relative h-full w-full transition-all duration-300 hover:-translate-y-1 flex flex-col">
            {/* 1. HEADER: Profile Info */}
            <div className="flex items-center  gap-4 mb-6">
              <div className="relative size-14 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <Image
                  src={testimonial[currentIndex].image}
                  alt={testimonial[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <figcaption className="text-lg font-bold text-slate-900 leading-tight">
                  {testimonial[currentIndex].name}
                </figcaption>
                <p className="text-sm font-medium text-slate-500">
                  {/* Matching the reference style: Origin → Destination */}
                  India <span className="mx-1 text-slate-300">→</span>{" "}
                  {testimonial[currentIndex].role}
                </p>
              </div>
            </div>

            {/* <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial[currentIndex].rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
          />
        ))}
      </div> */}

            {/* 3. BODY: testimonial Text */}
            <div className="grow pb-8">
              <blockquote className="text-[15px] leading-relaxed text-slate-700 font-medium mb-8 text-justify">
              &quot;{testimonial[currentIndex].text}&quot;
            </blockquote>

            </div>
            {/* 4. FOOTER: Tags & University Branding */}
            <div className="flex items-center justify-between mt-auto pt-4 absolute bottom-0 right-0 left-0">

              {/* University Logo Branding (Right Aligned per reference) */}
              <div className="flex items-center gap-2 opacity-80  transition-all">
                <div className="size-8 bg-red-600 rounded-sm flex items-center justify-center font-serif font-bold text-white">
                  {testimonial[currentIndex].role.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-zinc-900 leading-none">
                    Accepted at
                  </p>
                  <p className="text-sm font-bold text-zinc-600 tracking-tighter">
                    {testimonial[currentIndex].role}
                  </p>
                </div>
                {/* Placeholder for University Crest/Icon */}
              </div>
              <span className="px-1.5 py-1.5 bg-emerald-100 rounded-full text-xs font-bold uppercase tracking-wide">
                <CheckCircle className="size-4 text-emerald-600" />
              </span>
            </div>
          </figure>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
