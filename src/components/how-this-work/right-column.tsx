"use client";
import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckLineIcon,
  FileHeart,
  FileInput,
  GraduationCap,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function RightColumn() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full space-y-2 col-span-3 order-1 md:order-2 mb-6 md:mb-0"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // animate ONCE when visible
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-2 text-gray-700 font-medium "
      >
        <GraduationCap className="w-6 h-6 text-yellow-600" />
        <span>We help you get into your dream college.</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl lg:text-5xl font-bold text-red-700 leading-tight pb-4"
      >
        How does this work?
      </motion.h1>

      {[
        {
          icon: "1",
          content: "Submit your details — call us or fill out the form.",
        },
        { icon: "2", content: "We check your profile and required documents." },
        { icon: "3", content: "Our team submits your application." },
        {
          icon: "4",
          content: "You receive the official admit letter for ₹1 only.",
        },
      ].map((item, index) => (
        <motion.div variants={itemVariants} className="relative pl-8 pb-3" key={index}>
          {/* Dot */}
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-red-600"></div>

          {/* Line */}
          {index <= 2 ?<div className="absolute left-1.5 top-5 w-[2px] h-full bg-red-200"></div> : ""}
          

          <h3 className="text-xl font-semibold text-gray-900">
            {item.content}
          </h3>
        </motion.div>
      ))}

      {/* CTA Button */}
      <motion.div variants={itemVariants} >
        <Button variant="red">
        <motion.div whileHover={{x:3}} className="flex items-center">
          Start Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
         
        </motion.div>
        </Button>
      </motion.div>

      {/* Feature Block 1 */}
      <motion.div
        variants={itemVariants}
        className="bg-zinc-200 py-2 px-3 mt-4 rounded-md flex items-center space-x-3"
      >
        <div className="flex-shrink-0 ">
          <BookOpen className="w-5 h-5 text-red-700" />
        </div>
        <div>
          <p className="text-zinc-600 leading-relaxed">
            It’s an official document issued by the university or college.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default RightColumn;
