import React from "react";
import { Button } from "@/components/ui/button";
import FooterMotionDesign from "./footer-motion-design";
import { BookAlert, Earth, Handshake, ShieldCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    
    <footer className="bg-zinc-950 text-white text-yellow absolute overflow-hidden  w-full  -z-50 ">
      
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6 py-16  z-50">
          {/* Heading */}
          <h2 className="text-4xl/normal font-bold">
            Ready to start <br />
            <span className="">your admission journey?</span>
          </h2>

          {/* Sub-text */}
          <p className="text-gray-300  mx-auto">
            Start today for just ₹1 and get your official admit letter without
            stress, delays, or confusion.
          </p>

          {/* CTA */}
          <div className="relative">
            <Button variant="red" className="px-5 cursor-pointer">
              Start for just ₹1 →
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center space-x-6 text-gray-200 text-sm pt-6 font-medium">
            {footerOptions.map((item) => (
              <span
                className="bg-white/10 rounded-2xl px-4 py-2 flex  gap-2 items-center"
                key={item.content}
              >
                <item.icon className={cn("size-4", item.color)} /> {item.content}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400 py-4 ">
              <p>© 2025 AdmitLetter. All rights reserved.</p>
              <div className="flex gap-6">Desiged By Amardeep Singh</div>
          </div>
        </div>
      

        <FooterMotionDesign />
     
    </footer>
      
      
    
  );
}

export default Footer;
