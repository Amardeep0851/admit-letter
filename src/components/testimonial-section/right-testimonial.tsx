import React, { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


const RightTestimonial = () => {
  
// mock data - in a real app, this would come from an API or props
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sukhjit Singh",
    role: "Algoma University",
    image: "/images/offer-letter-with-person.png", // Replace with your image path
    rating: 5,
    text: "Got my admit letter in less than a week. Honestly didn’t expect it to be this simple. ₹1 for this service is a steal",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Toranto College",
    image: "/images/offer-letter-with-person2.png", // Replace with your image path
    rating: 5,
    text: "I was struggling with applications for months. These guys handled everything and I finally have my admit letter. Super smooth process.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Toranto College",
    image: "/images/offer-letter-with-person2.png", // Replace with your image path
    rating: 5,
    text: "I submitted the form, shared my documents, and they took care of the rest. Received my official admit letter exactly as promised.",
  },{
    id: 2,
    name: "Rahul Sharma",
    role: "Toranto College",
    image: "/images/offer-letter-with-person2.png", // Replace with your image path
    rating: 5,
    text: "I thought the ₹1 offer was too good to be true, but it’s legit. They applied on my behalf and sent me the admit letter directly.",
  },{
    id: 2,
    name: "Rahul Sharma",
    role: "Toranto College",
    image: "/images/offer-letter-with-person2.png", // Replace with your image path
    rating: 5,
    text: "Very professional team. They verified my profile, suggested better universities, and my admit letter arrived without any hassle.",
  },{
    id: 2,
    name: "Rahul Sharma",
    role: "Toranto College",
    image: "/images/offer-letter-with-person2.png", // Replace with your image path
    rating: 5,
    text: "Perfect for students who don’t know where to start. I called them, gave my details, and got my admit letter within days.",
  },
];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };
  return (
    <div className="lg:col-span-6 relative">
            
            {/* The White Card */}
            <div className="bg-white rounded-md  shadow-lg relative z-10 min-h-[300px] flex flex-col md:flex-row border border-zinc-200">
              
              {/* Navigation Buttons (Floating on the edges) */}
              <Button 
                onClick={prevSlide}
                variant="red"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer shadow-sm hover:shadow-red-600 shadow-zinc-900"
              >
                <ChevronLeft className="w-6 h-6 text-zinc-200 group-hover:text-zinc-50" />
              </Button>

              <Button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-50 shadow-sm hover:shadow-red-600 shadow-zinc-900"
                variant="red"

              >
                <ChevronRight className="w-6 h-6 text-zinc-200 group-hover:text-zinc-50" />
              </Button>

              {/* Card Content with AnimatePresence for smooth transitions */}
              <div className="overflow-hidden flex justify-between w-full">
                <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row w-full h-full"
                >
                    {/* Content Side */}
                    <div className="w-full md:w-3/5 p-4 lg:px-8 py-4 flex flex-col justify-center ">
                        <blockquote className="text-gray-600 leading-relaxed mb-8 text-lg text-justify">
                            "{TESTIMONIALS[currentIndex].text}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex  flex-col items-end">
                            <h4 className="text-xl font-bold text-gray-900">
                                {TESTIMONIALS[currentIndex].name}
                            </h4>
                            <p className="text-gray-500 font-medium">
                                {TESTIMONIALS[currentIndex].role}
                            </p>
                        </div>
                    </div>
                    {/* Image Side */}
                    <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-gray-100 rounded-md">
                         {/* Replace src with your actual image path */}
                        <Image
                          src={TESTIMONIALS[currentIndex].image}
                          alt={TESTIMONIALS[currentIndex].name}
                          fill
                          className="object-cover object-top rounded-md"
                        />
                    </div>
                </motion.div>
              </AnimatePresence>
              </div>

            </div>
          </div>
  )
}

export default RightTestimonial