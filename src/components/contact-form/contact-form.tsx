"use client";
import React from 'react'
import {motion} from "framer-motion";
import { CheckCircle } from "lucide-react";

import Image from "next/image";
import FormPage from "./form-page";


function ContactForm() {
  const serviceProvided = [
    "Direct access to admission experts",
    "Response within 2 hours",
    "Secure & Confidential",
  ]
  return (
    <section className="relative">
      <Image 
          src="/images/contact-us-agent3.jpg" 
          fill alt="Agent" 
          objectFit="cover" 
          objectPosition="center" 
          className="opacity-15"
          priority={false}
          placeholder="blur"
          blurDataURL="/images/blur.jpg"
          />
        
        {/* LEFT — Text Section */}
        <div className="grid grid-cols-1 max-w-7xl mx-auto relative px-4 xl:px-0 lg:grid-cols-6 gap-8 py-20 pr-4 overflow-hidden font-sans">
          <div className="flex flex-col  justify-center px-4 relative col-span-3 ">
          <div className="rounded-md bg-white text-sm px-4 py-1 text-green-700 font-semibold flex gap-2 items-center w-52 shadow-md border-zinc-200 mb-4">
            <div className="relative flex items-center" >
              <div className="size-2 bg-green-700 animate-ping rounded-full absolute" />
              <div className="size-2 bg-green-700 rounded-full absolute" />
            </div>
            <div className="pl-2">24/7 Support Available</div>
          </div>
          <motion.h2 
            className="text-5xl font-black text-orange-700 mb-4 leading-tight text-left"
            initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            viewport={{amount:1}}
            transition={{duration:0.5}}          
          >
            <span className="text-zinc-900 ">Get support for your</span> application today.
          </motion.h2>
          <motion.p 
          className="text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed text-justify"
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          viewport={{amount:1}}
          transition={{duration:0.5}}
          >
            “Have questions about your admit letter or application? Fill out the form and our counselor will guide you step-by-step.”
          </motion.p>
          <ul className="py-8">
            {
              serviceProvided.map((item) => (
                <li className="text-zinc-600 pb-4 flex gap-2 items-center" key={item}>
                  <CheckCircle className="size-4 text-red-700" />
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        {/* RIGHT — Form*/}
        <FormPage />
        </div>
        
        

      </section>
  )
}

export default ContactForm