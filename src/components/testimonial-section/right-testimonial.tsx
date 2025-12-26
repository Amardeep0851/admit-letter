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
      name: "Sukhjit Singh1",
      role: "Algoma University",
      image: "/images/offer-letter-with-person.jpg",
      rating: 5,
      text: "Got my admit letter in less than a week. Honestly didn&quot;t expect it to be this simple. ₹1 for this service is a steal",
    },
    {
      id: 2,
      name: "Rahul Sharma2",
      role: "Toranto College",
      image: "/images/offer-letter-with-person2.jpg",
      rating: 5,
      text: "I was struggling with applications for months. These guys handled everything and I finally have my admit letter. Super smooth process.",
    },
    {
      id: 3,
      name: "Rahul Sharma3",
      role: "Toranto College",
      image: "/images/offer-letter-with-person2.jpg",
      rating: 5,
      text: "I submitted the form, shared my documents, and they took care of the rest. Received my official admit letter exactly as promised.",
    },
    {
      id: 4,
      name: "Rahul Sharma4",
      role: "Toranto College",
      image: "/images/offer-letter-with-person2.jpg",
      rating: 5,
      text: "I thought the ₹1 offer was too good to be true, but it&quot;s legit. They applied on my behalf and sent me the admit letter directly.",
    },
    {
      id: 5,
      name: "Rahul Sharma5",
      role: "Toranto College",
      image: "/images/offer-letter-with-person2.jpg",
      rating: 5,
      text: "Very professional team. They verified my profile, suggested better universities, and my admit letter arrived without any hassle.",
    },
    {
      id: 6,
      name: "Rahul Sharma6",
      role: "Toranto College",
      image: "/images/offer-letter-with-person2.jpg",
      rating: 5,
      text: "Perfect for students who don’t know where to start. I called them, gave my details, and got my admit letter within days.",
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
