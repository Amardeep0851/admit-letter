"use client";

import React from "react";
import { PhoneCall } from "lucide-react"; // Assuming you use lucide-react
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { handleWhatsappClick } from "../whatsapp/handle-whatsapp";

export default function ContactPhone({customClassName}:{customClassName?:string}) {
  
  return (
    <div 
    onClick={handleWhatsappClick}
    className={cn("pt-0 items-center gap-2 font-semibold min-[438]:flex hidden text-lg cursor-pointer ", customClassName)}>
      
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
        <PhoneCall className="size-5" />
      </motion.div>
      
      <span>+91-8360828696</span>
    </div>
  );
}