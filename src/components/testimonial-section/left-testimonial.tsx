import React from 'react';
import {motion} from "framer-motion"
import { MessageCircle } from "lucide-react";

function LeftTestimonial() {
  return (
    <div className="lg:col-span-6 lg:pr-4 ">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Yellow Icon Badge */}
              <div className="flex items-center gap-3 mb-2 text-zinc-950">
                <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="font-medium tracking-wide">Students feedback</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold  leading-tight mb-4">
                Trusted by students across India.
              </h2>
              
              <p className="text-zinc-600 leading-relaxed mb-4 text-justify ">
                Every month, hundreds of students receive their admit letters through our platform — fast, simple, and fully verified.
              </p>

              {/* Stats Block */}
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold ">100%</span>
                <div className="h-12 w-[2px] bg-red-700" /> {/* Vertical Divider */}
                <span className="text-zinc-500 text-sm max-w-[120px] text-center">
                  Successful admit letter delivery.
                </span>
              </div>
            </motion.div>
          </div>
  )
}

export default LeftTestimonial