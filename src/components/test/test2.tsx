"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, UserCheck, Send, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Submit your details",
    description: "Fill out our secure form or call us directly. We just need your basic profile to get started.",
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" // Placeholder: Typing on laptop
  },
  {
    id: 2,
    title: "Profile Verification",
    description: "Our experts review your documents and academic history to ensure 100% eligibility.",
    icon: <UserCheck className="w-6 h-6 text-white" />,
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" // Placeholder: Analysis/Review
  },
  {
    id: 3,
    title: "Application Submission",
    description: "We handle the complex paperwork and submit the official application on your behalf.",
    icon: <Send className="w-6 h-6 text-white" />,
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" // Placeholder: Sending mail
  },
  {
    id: 4,
    title: "Receive Admit Letter",
    description: "Get your official, fully-formatted admit letter delivered to your inbox for just ₹1.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    color: "bg-red-600",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" // Placeholder: Graduation/Success
  }
];

const Test2 = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: The Dynamic Visual (Replaces the Cartoon) */}
          <div className="relative h-[500px] w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {/* The Image */}
                <img 
                  src={STEPS[activeStep - 1].image} 
                  alt={STEPS[activeStep - 1].title}
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                {/* Floating "Card" content on top of image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-3">
                    Step 0{activeStep}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {STEPS[activeStep - 1].title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed max-w-sm">
                    {STEPS[activeStep - 1].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* RIGHT SIDE: The Interactive Timeline */}
          <div className="relative">
            
            <div className="mb-10">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">Simple Process</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900">
                How does it work?
              </h2>
            </div>

            <div className="relative space-y-8">
              {/* The Vertical "Beam" Line */}
              <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-slate-100">
                {/* The "Filling" Animation */}
                <motion.div 
                  className="w-full bg-red-600 rounded-full"
                  animate={{ height: `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              {STEPS.map((step) => (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-start gap-6 group cursor-pointer p-4 rounded-xl transition-all duration-300 ${activeStep === step.id ? 'bg-slate-50 border border-slate-100' : 'hover:bg-slate-50/50 border border-transparent'}`}
                >
                  {/* The Circle Indicator */}
                  <div className={`
                    relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border-4 
                    ${activeStep === step.id ? 'border-red-100 bg-red-600 scale-110 shadow-lg shadow-red-200' : 
                      activeStep > step.id ? 'border-red-100 bg-red-600' : 
                      'border-slate-50 bg-white text-slate-300'}
                  `}>
                    {activeStep >= step.id ? (
                      step.icon 
                    ) : (
                      <span className="font-bold text-lg">{step.id}</span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className={`text-lg font-bold transition-colors ${activeStep === step.id ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors leading-relaxed ${activeStep === step.id ? 'text-slate-600' : 'text-slate-400'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA and Trust Box */}
            <div className="mt-10 ml-20">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-red-700/20 transition-all hover:scale-105 active:scale-95">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="mt-6 flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 w-fit">
                 <ShieldCheck className="w-4 h-4 text-slate-400" />
                 <span className="text-xs text-slate-500 font-medium">Official document issued directly by the university.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Test2;