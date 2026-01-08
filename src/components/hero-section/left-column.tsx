"use client"
import React from 'react';
import CountUp from 'react-countup';
import {motion} from "framer-motion";
import { CheckCircle } from "lucide-react";

import CustomButton, { CustomButtonOutlineBlack } from "@/components/ui/custom-button";
import Phone from "@/components/header/phone";
import { customScrollTo } from "@/lib/scroll-to";
import ExecutiveContactDialog from "../executive-dialog/executive-dialog";



function LeftColumn() {
  return (
    <div className="text-white space-y-8 pt-10 lg:pt-0 col-span-3 ">
            <motion.h1 
            className="text-4xl lg:text-7xl min-[359px]:text-5xl font-bold leading-tight tracking-tight text-center lg:text-left"
            initial={{x:-40, skewY:10, opacity:0}}
            animate={{x:0, skewY:0,  opacity:1}}
            transition={{duration:0.5}}
            >
              {/* Get your offer letter - start for just ₹1  */}
              {/* Start your offer-letter assessment for just ₹1 */}
              {/* From Profile Assessment to Offer Letters — Get Started for ₹1 */}
              Start your offer-letter assessment for ₹999
              {/* Start your offer letter process for just ₹1 */}
             {/*  Your Path to a University Offer Letter – Start for ₹1
              
              */}
            </motion.h1>

            <ul className="text-zinc-300 text-base lg:text-lg flex lg:justify-start flex-col items-center lg:items-start  ">
              {[
                "₹999 covers your Initial Profile Assessment & Course Shortlisting.",
                "Application processing and university-specific services are subject to additional fees.",     
                // "Offer letters are issued solely by universities after application review.",           
                "No hidden charges for starting assessment.",
              ].map((item, index) => (
                <motion.li className="flex gap-2 items-start mt-1" key={index}
                initial={{x:-40, opacity:0}}
                animate={{x:0,  opacity:1}}
                transition={{duration:0.5, delay:0.3}}
                >
                  <CheckCircle className="size-5 text-red-600 pt-1 " /> {item}
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <motion.div className="flex flex-wrap flex-col md:flex-row gap-6 items-center pt-2 justify-center lg:justify-start lg:items-start"
                initial={{x:-40, opacity:0}}
                animate={{x:0,   opacity:1}}
                transition={{duration:0.5, delay:0.6}}
            >
              <Phone customClassName="min-[438px]:hidden flex"/>
              <CustomButton title="Start for just ₹999" onClick={() =>customScrollTo("ContactForm")} />
              <div className="min-[438px]:flex hidden">
                <ExecutiveContactDialog />
              </div>
             
            </motion.div>

            {/* Stats Section */}
            <div className="pt-12 flex gap-12 justify-center items-center lg:justify-start border-t border-white/10 mt-12 min-[359]:flex-row flex-col ">
              {
                  [
                    {title:500, suffix:"+", content:"Letter issued", duration:9},
                    {title:97, suffix:"%", content:"Approval Rate", duration:5},
                    {title:132, suffix:"+", content:"Courses", duration:7},
                  ].map((item, index) => (
                    <motion.div  className="w-[85px] text-nowrap" key={index}
                    initial={{y:40,  opacity:0}}
                    animate={{y:0,   opacity:1}}
                    transition={{duration:0.5, delay:0.9}}
                    >
                      <h3 className="text-2xl min-[432px]:text-3xl font-bold text-white border-b-4 border-red-600 pb-1 ">
                        <CountUp
                          start={0}
                          end={item.title}
                          duration={item.duration}
                          decimal=","
                          delay={2}
                        /> {item.suffix}
                      </h3>
                      <p className="min-[432px]:text-base text-zinc-300 mt-1 text-xs">
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