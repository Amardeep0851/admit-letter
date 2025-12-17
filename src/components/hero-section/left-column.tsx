"use client"
import React from 'react';
import { CheckCircle } from "lucide-react";
import {motion} from "framer-motion";

import CustomButton from "@/components/ui/custom-button";



function LeftColumn() {
  return (
    <div className="text-white space-y-8 pt-10 lg:pt-0 col-span-3">
            <motion.h1 
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
            initial={{x:-40, skewY:10, opacity:0}}
            animate={{x:0, skewY:0,  opacity:1}}
            transition={{duration:0.5}}
            >
              Get a verified offer letter for just ₹1
            </motion.h1>

            <ul className="text-zinc-300 text-lg  ">
              {[
                "Official, fully-formatted offer letter from top colleges.",
                "No hidden charges for starting.",
              ].map((item, index) => (
                <motion.li className="flex gap-2 items-center mt-1 " key={index}
                initial={{x:-40, opacity:0}}
                animate={{x:0,  opacity:1}}
                transition={{duration:0.5, delay:0.3}}
                >
                  <CheckCircle className="size-4 text-red-600 " /> {item}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-6 items-center pt-2"
                initial={{x:-40, opacity:0}}
                animate={{x:0,   opacity:1}}
                transition={{duration:0.5, delay:0.6}}
            >
              <CustomButton title="Start for just ₹1" />

             
            </motion.div>

            {/* Stats Section */}
            <div className="pt-12 flex gap-12 border-t border-white/10 mt-12">
              {
                  [
                    {title:"5,000+", content:"Letter issued"},
                    {title:"100%", content:"Approval Rate"},
                    {title:"280+", content:"Courses"},
                  ].map((item, index) => (
                    <motion.div  className="" key={index}
                    initial={{y:40,  opacity:0}}
                    animate={{y:0,   opacity:1}}
                    transition={{duration:0.5, delay:0.9}}
                    >
                      <h3 className="text-3xl font-bold text-white border-b-4 border-red-600 pb-1 pr-3">
                        {item.title}
                      </h3>
                      <p className="text-md text-zinc-300 mt-1">
                        {item.content}
                      </p>
                    </motion.div>
                  ))
                }
            </div>
          </div>
  )
}

export default LeftColumn