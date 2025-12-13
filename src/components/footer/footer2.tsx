"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Zap, Globe } from "lucide-react";

const Footer2 = () => {
  return (
    <div className="bg-slate-50 pt-20 pb-10 px-4 md:px-8 relative">
      
      {/* 1. THE FLOATING CTA CARD */}
      <div className="max-w-6xl mx-auto relative">
        {/* Glow Effect behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden px-6 py-16 md:py-20 text-center shadow-2xl">
          
          {/* Background decoration (Abstract Beams) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px]"></div>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to start your <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Global Journey?
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Join 5,000+ students who secured their admits. <br/>
                Start today for just <span className="text-white font-bold">₹1</span>. No hidden fees.
              </p>
            </motion.div>

            {/* The "Mega" Button */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-red-900/50 flex items-center gap-3 transition-all group">
                Get My Admit Letter
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Indicators (Re-styled) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4">
              <TrustItem text="100% Verified Admits" icon={<ShieldCheck className="w-4 h-4 text-green-400" />} />
              <TrustItem text="Instant Process" icon={<Zap className="w-4 h-4 text-yellow-400" />} />
              <TrustItem text="Global Acceptance" icon={<Globe className="w-4 h-4 text-blue-400" />} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE ACTUAL FOOTER (Separate & Clean) */}
      <footer className="mt-16 border-t border-slate-200 pt-8">
        
      </footer>

    </div>
  );
};

// Small helper component
const TrustItem = ({ text, icon }) => (
  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
    {icon}
    <span className="text-slate-300 text-sm font-medium">{text}</span>
  </div>
);

export default Footer2;