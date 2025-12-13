"use client";
import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion";
import { AtSign, CheckCircle, Mail,  Phone, Send, SendHorizonal, User } from "lucide-react";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

function ContactForm() {
  const serviceProvided = [
    "Direct access to admission experts",
    "Response within 2 hours",
    "Secure & Confidential",
  ]
  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto relative px-4 xl:px-0 lg:grid-cols-6 gap-8 py-12 lg:py-24 pr-4 overflow-hidden font-sans">
        
        {/* LEFT — Text Section */}
        
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
        <motion.form 
        className=" bg-white col-span-3  z-10 border border-zinc-200  p-8 rounded-md shadow-xl mr-4"
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
          
          <div className="mb-6">
            <label className="text-sm mb-1 flex items-center gap-x-1.5"><User className="size-4" /> Your Name (<span className="text-red-700 text-sm">Required</span>)</label>
            <Input
              type="text"
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>
          <div className="mb-6">
            <label className="text-sm mb-1 flex items-center gap-x-1.5"><Phone className="size-4" />Phone Number (<span className="text-red-700 text-sm">Required</span>)</label>
            <Input
              type="email"
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm mb-1 flex items-center gap-x-1.5"><AtSign className="size-4" />Email Address</label>
            <Input
              type="email"
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>
          

          <div className="mb-6">
            <label className="text-sm mb-1 flex items-center gap-x-1.5"><Mail className="size-4" />Message</label>
            <Textarea
              rows={5}
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>

          <Button
            type="submit"
            variant="red"
            className="w-full py-7 flex gap-2 "
          >
            Send Message
            <SendHorizonal className="size-4 group-hover:translate-x-2" />
          </Button>
          <p className="text-center py-2 text-sm text-zinc-500">By sending this message, you agree to our privacy policy.</p>
        </motion.form>

      </div>
  )
}

export default ContactForm