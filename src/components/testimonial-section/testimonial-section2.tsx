"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // npm install framer-motion
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sukhjit Singh",
    uni: "Algoma University",
    country: "Canada",
    quote: "Got my admit letter in less than a week. Honestly didn't expect it to be this simple. ₹1 for this service is a steal.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    name: "Priya Sharma",
    uni: "University of Leeds",
    country: "UK",
    quote: "The counselors helped me fix my SOP, and I got accepted into my dream course. The process was completely transparent.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    name: "Rahul Verma",
    uni: "Arizona State Univ",
    country: "USA",
    quote: "I was worried about my visa interview, but their mock sessions gave me so much confidence. Highly recommend!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const TestimonialSection2 = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: The Pitch */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Students Feedback
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Trusted by students <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                across India.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Every month, hundreds of students receive their official admit letters through our platform — fast, simple, and fully verified.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-4">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-4xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 font-medium mt-1">Delivery Rate</p>
              </div>
              <div className="border-l-4 border-slate-200 pl-4">
                <p className="text-4xl font-bold text-slate-900">5k+</p>
                <p className="text-sm text-slate-500 font-medium mt-1">Happy Students</p>
              </div>
            </div>
            
            {/* Custom Navigation Buttons (Moved here for better UX) */}
            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={handlePrev}
                className="p-4 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                className="p-4 rounded-full bg-red-600 text-white shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: The Interactive Card Stack */}
          <div className="relative h-[450px] w-full flex items-center justify-center lg:justify-end">
            
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-100 to-white rounded-full blur-3xl -z-10"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
              >
                {/* Card Header (Image + Name) */}
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                   {/* Background Image Overlay */}
                   <img 
                      src={TESTIMONIALS[current].image} 
                      alt="Student" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                   
                   {/* Content on top of image */}
                   <div className="absolute bottom-4 left-6 text-white">
                      <h3 className="text-xl font-bold">{TESTIMONIALS[current].name}</h3>
                      <p className="text-sm text-slate-300 flex items-center gap-1">
                        {TESTIMONIALS[current].uni} • {TESTIMONIALS[current].country}
                      </p>
                   </div>

                   {/* Verification Badge */}
                   <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs font-semibold text-white">Verified Admit</span>
                   </div>
                </div>

                {/* Card Body (Quote) */}
                <div className="p-8 relative">
                   <Quote className="absolute top-6 left-6 w-10 h-10 text-slate-100 -z-0 rotate-180" />
                   <p className="text-slate-600 text-lg leading-relaxed relative z-10 font-medium">
                      "{TESTIMONIALS[current].quote}"
                   </p>
                   
                   <div className="mt-6 flex items-center gap-2">
                      <div className="flex">
                        {[1,2,3,4,5].map(star => (
                          <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-slate-400 font-medium">5.0 Rating</span>
                   </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* The "Stack" Effect (Decorative card behind) */}
            <div className="absolute top-4 -right-4 w-full max-w-md h-full bg-slate-50 rounded-3xl border border-slate-100 -z-10 scale-[0.9] origin-right"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection2;