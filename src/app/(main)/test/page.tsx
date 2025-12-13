"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Globe, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden flex items-center pt-20 pb-20 lg:pt-0">
      
      {/* 1. Subtle Background Mesh (Adds expensive feel) */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: The Pitch */}
        <div className="space-y-8 relative z-10">
          
          {/* AI Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 fill-blue-500" />
            Powered by AI Engine
          </motion.div>

          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
          >
            Unlock Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Global Dream.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-lg"
          >
            Don't just apply—get accepted. We use advanced AI to match your profile with 850+ top universities, turning complex processes into a smooth journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20 transition-all hover:scale-105 active:scale-95">
              Get Personalised Plan
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-all flex items-center justify-center">
               Talk to an Expert
            </button>
          </motion.div>

          {/* Social Proof Logos (Grayscale to Color on Hover) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-slate-100"
          >
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">
              Our students work at
            </p>
            <div className="flex flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Replace these spans with your actual logo SVGs */}
               <span className="text-xl font-bold text-slate-800">Google</span>
               <span className="text-xl font-bold text-slate-800">BARCLAYS</span>
               <span className="text-xl font-bold text-slate-800">EY</span>
               <span className="text-xl font-bold text-slate-800">amazon</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The "3D Interface" (Replaces the Blue Blob) */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
          
          {/* Abstract Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-[80px] opacity-60"></div>

          {/* MAIN CARD: The "Dashboard" Look */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[380px] bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
               <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Your Match</p>
                  <h3 className="text-xl font-bold text-slate-900">Harvard University</h3>
               </div>
               <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif">H</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-blue-50 p-3 rounded-xl">
                  <p className="text-xs text-blue-600 font-bold mb-1">Scholarship</p>
                  <p className="text-lg font-bold text-slate-900">$40,000</p>
               </div>
               <div className="bg-green-50 p-3 rounded-xl">
                  <p className="text-xs text-green-600 font-bold mb-1">Success Rate</p>
                  <p className="text-lg font-bold text-slate-900">High</p>
               </div>
            </div>

            {/* Simulated List */}
            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-600">SOP Verified</span>
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-600">Documents Submitted</span>
               </div>
            </div>

            {/* Button */}
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30">
               View Offer Letter
            </button>
          </motion.div>

          {/* FLOATING CARD 1: Universities */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
          >
             <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <Globe className="w-5 h-5" />
             </div>
             <div>
                <p className="text-xs text-slate-400 font-bold">Database</p>
                <p className="text-sm font-bold text-slate-900">850+ Universities</p>
             </div>
          </motion.div>

          {/* FLOATING CARD 2: Scholarship */}
          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-32 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
          >
             <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                <TrendingUp className="w-5 h-5" />
             </div>
             <div>
                <p className="text-xs text-slate-400 font-bold">Funding</p>
                <p className="text-sm font-bold text-slate-900">$40M+ Facilitated</p>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;