import React from "react";
import { Earth, Handshake, ShieldCheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import FooterMotionDesign from "./footer-motion-design";
import CustomButton, {  CustomButtonOutlineBlack } from "@/components/ui/custom-button";

function Footer() {
  const footerOptions = [
    {
      content: "100% Verified admit letters",
      icon: ShieldCheckIcon,
      color: "text-blue-500",
    },
    { content: "Transparent process", icon: Earth, color: "text-yellow-500" },
    { content: "Student support", icon: Handshake, color: "text-green-500" },
  ];
  return (
    
    <footer className="bg-gradient-to-b from-black from-45% to-zinc-300 text-white relative overflow-hidden w-full z-50 md:pb-[240px] pb-[300px]  ">
      
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 pt-12 z-50 overflow-hidden  ">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight z-50">
              Still Confused? <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-400 to-red-700 animate-text">
                Let&apos;s Clear Your Doubts.
              </span>
            </h2>

          {/* Sub-text */}
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let <span className="text-white font-bold">questions</span> hold you back. Talk to our <span className="text-white font-bold">senior executives</span> directly and get a personalized roadmap in minutes.
              
            </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <CustomButton title="Talk to executive " />
            <CustomButtonOutlineBlack title="Start for just ₹1 " />
          </div>

          {/* Trust badges */}
          <div className="flex justify-center flex-col md:flex-row space-y-4 space-x-6 text-gray-200 text-sm pt-6 font-medium">
            {footerOptions.map((item) => (
              <div
                className="bg-white/10 rounded-2xl px-4 py-2 flex flex-row justify-center items-center gap-2 w-full"
                key={item.content}
              >
                <item.icon className={cn("size-4", item.color)} /> {item.content}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm pt-4 px-4 absolute bottom-0 left-0 w-full border-0 text-zinc-300 ">
              <p>© 2025 AdmitLetter. All rights reserved.</p>
              <div className="flex gap-6">Designed by Amardeep Singh</div>
          </div>
        </div>
      
            
        <FooterMotionDesign />
     
    </footer>
      
      
    
  );
}

export default Footer;
