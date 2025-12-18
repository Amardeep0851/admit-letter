"use client";

import React from "react";
import { PhoneCall } from "lucide-react"; // Assuming you use lucide-react
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPhone({customClassName}:{customClassName?:string}) {
  
  return (
    <div className={cn("pt-2 items-center gap-2 font-semibold min-[432]:flex hidden", customClassName)}>
      
      <motion.div
        animate={{
          rotate: [0, -10, 10, -10, 10, 0],
        }}
        transition={{
          duration: 0.6,      
          ease: "easeInOut",  
          repeat: Infinity,   
          repeatDelay: 2      
        }}
      >
        <PhoneCall className="size-4" />
      </motion.div>
      
      <span>+91-9232322929</span>
    </div>
  );
}