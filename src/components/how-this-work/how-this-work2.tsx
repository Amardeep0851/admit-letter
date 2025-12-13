
"use client";

import React from "react";
import { motion } from "framer-motion"; // npm install framer-motion
import { Phone, FileSearch, Send, GraduationCap, ArrowRight, Info } from "lucide-react";

const HowItWorks2 = () => {
  // Data for the steps
  const steps = [
    {
      id: 1,
      title: "Submit your details",
      description: "Call us directly or fill out the quick form to get started.",
      icon: <Phone className="w-5 h-5 text-red-600" />,
    },
    {
      id: 2,
      title: "Profile Review",
      description: "Our experts analyze your profile and verify required documents.",
      icon: <FileSearch className="w-5 h-5 text-red-600" />,
    },
    {
      id: 3,
      title: "Application Submission",
      description: "We handle the paperwork and submit the application for you.",
      icon: <Send className="w-5 h-5 text-red-600" />,
    },
    {
      id: 4,
      title: "Receive Admit Letter",
      description: "Get your official admit letter for just ₹1. No hidden fees.",
      icon: <GraduationCap className="w-5 h-5 text-red-600" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: The Visual (Animated) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Abstract decorative blobs behind the image */}
          <div className="absolute top-10 left-10 w-full h-full bg-red-50 rounded-3xl -z-10 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
          
          {/* Main Image Container */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative bg-white">
            {/* Replace this src with your actual image */}
            <img 
              src="/api/placeholder/600/600" 
              alt="Student with Admit Letter" 
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-red-100 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full text-green-700">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Success Rate</p>
                  <p className="text-lg font-bold text-slate-900">98% Approvals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* RIGHT SIDE: The Timeline */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase">Easy Process</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-4">How does this work?</h2>
            <p className="text-slate-600">Your journey to your dream university is just 4 steps away.</p>
          </motion.div>

          <div className="space-y-8 relative pl-4">
            {/* The Vertical Line Background */}
            <div className="absolute left-[27px] top-2 bottom-10 w-0.5 bg-slate-100"></div>

            {/* The Staggered Steps */}
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-start gap-6 group"
              >
                {/* The Icon Bubble */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-red-500 group-hover:shadow-md transition-all duration-300">
                  <div className="bg-red-50 p-2 rounded-full">
                    {step.icon}
                  </div>
                </div>

                {/* The Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 pl-4"
          >
            <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-red-700/20 transition-all hover:-translate-y-1">
              Start Now
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="mt-6 flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 max-w-md">
              <Info className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-500 leading-tight">
                This is an official document issued directly by the university. We ensure complete transparency.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks2;