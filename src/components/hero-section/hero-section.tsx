"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Menu, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] bg-[#0A0A0A] overflow-hidden flex flex-col font-sans text-white">
      
      {/* 1. ANIMATED BACKGROUND BEAMS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Warm glow from the bottom (Sunrise effect) */}
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-red-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500 rounded-full blur-[120px] opacity-10"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* 2. NAVBAR (Integrated) */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-red-600/50">
             A
           </div>
           <span className="text-xl font-bold tracking-tight">AdmitLetter</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Universities</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Success Stories</a>
        </div>

        {/* CTA Button in Nav */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Phone className="w-4 h-4" />
            <span>+91-98765 43210</span>
          </div>
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-sm font-semibold transition-all">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 text-slate-300">
          <Menu className="w-6 h-6" />
        </button>
      </nav>


      {/* 3. HERO CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 lg:gap-20 pt-10 pb-20">
        
        {/* LEFT SIDE: Copy & CTA */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide mx-auto md:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            #1 Trusted Platform
          </motion.div>

          {/* Headline */}
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Get your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Verified Admit
            </span> <br />
            for just ₹1.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Stop waiting in the dark. We secure official, fully-formatted admit letters from top global universities. <span className="text-white font-semibold">No hidden fees.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] transition-all hover:scale-105">
              Start for ₹1
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 backdrop-blur-sm transition-all">
              <Play className="w-4 h-4 fill-current" />
              How it works
            </button>
          </motion.div>

          {/* Trust Footnote */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 justify-center md:justify-start pt-4 text-sm font-medium text-slate-500"
          >
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Verified
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Instant Delivery
             </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE: The Interactive "Admit Card" (Replaces Stock Photo) */}
        <div className="flex-1 w-full flex justify-center perspective-1000">
          <FloatingCard />
        </div>

      </div>
    </div>
  );
};

// --- The Interactive 3D Card Component ---
const FloatingCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-[320px] h-[440px] md:w-[380px] md:h-[500px] cursor-pointer group"
    >
      {/* Decorative Elements behind card */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-orange-600 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
      
      {/* THE LETTER CARD (Pure CSS, no fake stock text) */}
      <div className="absolute inset-0 bg-white rounded-[1.5rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Card Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
             {/* University Logo Placeholder */}
             <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl">H</div>
             <div>
               <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">University</p>
               <p className="text-slate-900 font-bold leading-tight">Harvard Univ.</p>
             </div>
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
            Verified
          </div>
        </div>

        {/* Card Body - The Letter Content */}
        <div className="space-y-4 mt-6">
          <div className="h-0.5 w-12 bg-slate-100 mb-6"></div>
          <p className="text-slate-800 font-serif text-lg leading-relaxed">
            Dear <span className="bg-yellow-100 px-1 font-bold">Student</span>,
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Congratulations! We are pleased to inform you that you have been admitted to the <span className="font-semibold text-slate-900">Masters in Computer Science</span> program for the Fall 2025 semester.
          </p>
          
          <div className="space-y-2 mt-4">
            <div className="h-2 w-full bg-slate-100 rounded"></div>
            <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
            <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="border-t border-slate-100 pt-6 flex items-end justify-between">
           <div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-8 opacity-60" alt="Signature" />
             <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Dean of Admissions</p>
           </div>
           <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center">
             <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-inner">
               OFFICIAL
             </div>
           </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform"></div>
      </div>
    </motion.div>
  );
};

export default HeroSection;