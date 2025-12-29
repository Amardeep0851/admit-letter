import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "./slider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const RightTestimonial = () => {
  const [windowSize, setWindowSize] = useState(0); // Initialize with 0 to be safe
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const [mounted, setMounted] = useState(false); // To prevent hydration errors

  const TESTIMONIALS = [
    {
      id: 1,
      name: "Vikrant Bawa",
      role: "Algoma University",
      image: "/images/testimonials/t1.png",
      rating: 5,
      text: "Admit Letter's expert guidance combined with the Decoding F-1 Visa Interview E-Book helped me understand the interview process clearly. This preparation helped me crack my F-1 visa interview successfully.",
    },
    {
      id: 2,
      name: "Tanya",
      role: "Toranto College",
      image: "/images/testimonials/t2.png",
      rating: 5,
      text: "I am truly thankful to Admit Letter for their support. Their expert counselling helped me to crack usa  study visa and their  Decoding F-1 Visa Interview E-Book by Admit Letter played a major role in my preparation. ",
    },
    {
      id: 3,
      name: "Amandeep Singh",
      role: "Toranto College",
      image: "/images/testimonials/t3.png",
      rating: 5,
      text: "I received excellent guidance from Admit Letter. Their mock interviews and documentation support played a key role in my visa approval. The detailed guidance helped me crack my F-1 visa interview.",
    },
    {
      id: 4,
      name: "Rajveer Singh",
      role: "Toranto College",
      image: "/images/testimonials/t4.png",
      rating: 5,
      text: "Admit Letter made the entire visa process smooth and transparent. The Decoding F-1 Visa Interview E-Book helped me handle tricky interview questions with confidence, resulting in my successful visa approval. ",
    },
    {
      id: 5,
      name: "Guldeep Singh",
      role: "Toranto College",
      image: "/images/testimonials/t5.png",
      rating: 5,
      text: "Admit Letter guided me after my wife moved to the USA. Their clear guidance and documentation support helped me and our daughter successfully receive our dependent visas.",
    },
    {
      id: 6,
      name: "Meena",
      role: "Toranto College",
      image: "/images/testimonials/t6.png",
      rating: 5,
      text: "Their expert counselling and interview preparation helped me clear my F-1 visa interview with confidence. Because of their transparent process and continuous support, I was able to achieve my dream of studying in the USA.",
    },
    {
      id: 7,
      name: "Sahibjit Singh",
      role: "Toranto College",
      image: "/images/testimonials/t7.png",
      rating: 5,
      text: "I had a great experience with Admit Letter. Their step-by-step guidance and visa interview preparation using Admit Letter’s Decoding F-1 Visa Interview E-Book made my USA study visa process smooth and stress-free.",
    },
    {
      id: 8,
      name: "Anshdeep Singh",
      role: "Toranto College",
      image: "/images/testimonials/t8.png",
      rating: 5,
      text: "Admit Letter supported me at every stage of my USA study visa journey. The Decoding F-1 Visa Interview E-Book prepared me for real interview questions and helped me achieve my visa approval with confidence",
    },
    {
      id: 9,
      name: "Gurwinder Singh",
      role: "Toranto College",
      image: "/images/testimonials/t9.png",
      rating: 5,
      text: "I am thankful to Admit Letter for their continuous support. The Decoding F-1 Visa Interview E-Book played an important role in helping me stay calm and confident during my F-1 visa interview.",
    }, 
    {
      id: 10,
      name: "Aman Kumar",
      role: "Toranto College",
      image: "/images/testimonials/t10.png",
      rating: 5,
      text: "Admit Letter guided me throughout my USA study visa journey. Their professional approach and constant support helped me achieve my goal. Also, Admit Letter’s Decoding F-1 Visa Interview E-Book made interview preparation very easy.",
    },
  ];

  useEffect(() => {

    setMounted(true);
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth <= 600) {
        setTotalSlides(1);
      } else {
        setTotalSlides(2);
      }
    };

    handleWindowSize(); // Run immediately
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + totalSlides;
      // Loop back correctly
      return nextIndex >= TESTIMONIALS.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        const remainder = TESTIMONIALS.length % totalSlides;
        return (
          TESTIMONIALS.length - (remainder === 0 ? totalSlides : remainder)
        );
      }
      return prev - totalSlides;
    });
  };

  // Prevent rendering until client-side matches to avoid layout shifts
  if (!mounted) return null;

  const totalPages = Math.ceil(TESTIMONIALS.length / totalSlides);

  return (
    <div className="lg:col-span-6 relative">
      <div className="relative ">
        {/* Navigation Buttons */}
        <Button
          onClick={prevSlide}
          variant="red"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer shadow-sm hover:shadow-red-600 shadow-zinc-900 z-50"
        >
          <ChevronLeft className="w-6 h-6 text-zinc-200 group-hover:text-zinc-50" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-pointer shadow-sm hover:shadow-red-600 shadow-zinc-900 z-50"
          variant="red"
        >
          <ChevronRight className="w-6 h-6 text-zinc-200 group-hover:text-zinc-50" />
        </Button>

        {/* Slider Content */}
        <div className="flex flex-row gap-4 h-full">
          {" "}
          {/* changed gap-8 to gap-4 for better mobile fit */}
          <div
            className={`flex-shrink-0 ${
              totalSlides === 2 ? "w-[calc(50%-0.5rem)]" : "w-full"
            }`}
          >
            <Slider TESTIMONIALS={TESTIMONIALS} currentIndex={currentIndex} />
          </div>
          {totalSlides === 2 && (
            <div className="flex-shrink-0 w-[calc(50%-0.5rem)]">
              <Slider
                TESTIMONIALS={TESTIMONIALS}
                currentIndex={(currentIndex + 1) % TESTIMONIALS.length}
              />
            </div>
          )}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-row gap-2 bg-white shadow-md p-2 rounded-full border border-slate-100">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={cn(
                "rounded-full bg-red-700 transition-all duration-300",
                // *** THE FIX IS HERE ***
                Math.floor(currentIndex / totalSlides) === pageIndex
                  ? "w-8 h-2"
                  : "w-2 h-2 opacity-30"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightTestimonial;
