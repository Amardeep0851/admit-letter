"use client"
import Image from "next/image"
import React from 'react'
import {motion} from "framer-motion";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { AtSign, Mail, MessageSquare, Phone, PhoneCallIcon, PhoneIncoming, PhoneOutgoing, User } from "lucide-react";

function ContactForm() {
  return (
    <div className="grid grid-cols-1 max-w-7xl mx-auto relative px-4 xl:px-0 lg:grid-cols-2 gap-4 py-12 lg:py-24 pr-4 overflow-hidden">
        
        {/* LEFT — Text Section */}
        {/* <Image 
          src="/images/contact-us-agent3.png" 
            fill 
            alt="Agent" 
            objectFit="cover" 
            objectPosition="center" 
            className="opacity-5" 
          /> */}
        <div className="flex flex-col  justify-center px-4 relative ">
          <motion.h2 
            className="text-4xl font-semibold text-orange-700 mb-4 leading-tight text-justify"
            initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}          
          >
            Get support for your application today.
          </motion.h2>
          <motion.p 
          className="text-zinc-600 dark:text-zinc-200 text-lg leading-relaxed text-justify"
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5}}
          >
            “Have questions about your admit letter or application? Fill out the form and our counselor will guide you step-by-step.”
          </motion.p>
          
        </div>

        {/* RIGHT — Form*/}
        <motion.form 
        className="dark:bg-zinc-900/50 bg-zinc-200/50  z-10 border dark:border-zinc-700 border-zinc-300  p-8 rounded-sm shadow-2xl mr-4"
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
            className="float-end"
          >
            Send Message
          </Button>
        </motion.form>

      </div>
  )
}

export default ContactForm