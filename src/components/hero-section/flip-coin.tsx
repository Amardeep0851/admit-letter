"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingCard from "./floating-card";
import Image from "next/image";

// Sample data for different letters/images

const slides = [
  { 
    src: "/images/letters/webster-university.jpg", 
    alt: "Students office letter from webster university", 
    universityOrCollege:"u",
    institute:"Webster University",
    FirstLetter:"W",    
  }, 
  { 
    src: "/images//letters/montclair-state-university.jpg", 
    alt: "student offer letter for montclair state university ", 
    universityOrCollege:"u",
    institute:"Montclair State University ",
    FirstLetter:"M",    
  }, 
  { 
    src: "/images//letters/algoma-university.jpg", 
    alt: "student offer letter for algoma university ", 
    universityOrCollege:"u",
    institute:"Algoma university ",
    FirstLetter:"A",    
  }, 
  { 
    src: "/images//letters/convertry-university.jpg", 
    alt: "student offer letter for conventry university group ", 
    universityOrCollege:"u",
    institute:"Conventry University Group",
    FirstLetter:"C",    
  }, 
  { 
    src: "/images//letters/umas-boston.jpg", 
    alt: "student offer letter for UMass Boston ", 
    universityOrCollege:"u",
    institute:"UMass Boston ",
    FirstLetter:"U",    
  }, 
  { 
    src: "/images//letters/northen-arziona-university.jpg", 
    alt: "student offer letter for Northern Arizona University ", 
    universityOrCollege:"u",
    institute:"Northern Arizona University ",
    FirstLetter:"N",    
  }, 
  { 
    src: "/images//letters/new-york-institute-of-technology.jpg", 
    alt: "student offer letter for New York Institute of Technology ", 
    universityOrCollege:"u",
    institute:"New York Institute of Technology ",
    FirstLetter:"N",    
  }, 
  { 
    src: "/images//letters/green-river-college.jpg", 
    alt: "student offer letter for Green River College ", 
    universityOrCollege:"u",
    institute:"Green River College ",
    FirstLetter:"G",    
  }, 
   { 
    src: "/images//letters/university-of-sunderland.jpg", 
    alt: "student offer letter for University of Sunderland ", 
    universityOrCollege:"u",
    institute:"University of Sunderland ",
    FirstLetter:"S",    
  }, 
   { 
    src: "/images//letters/university-of-regina.jpg", 
    alt: "student offer letter for University of Regina ", 
    universityOrCollege:"u",
    institute:"University of Regina ",
    FirstLetter:"R",    
  }, 
  { 
    src: "/images//letters/auburn.jpg", 
    alt: "student offer letter for Auburn Montgomery ", 
    universityOrCollege:"u",
    institute:"Auburn Montgomery ",
    FirstLetter:"A",    
  }, 
];

const CoinFlipLetter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCoin, setShowCoin] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to start the coin-to-letter animation
  const startAnimation = () => {
    setShowCoin(true);
    setShowLetter(false);
    setAnimationComplete(false);
    setIsTransitioning(true);

    // Coin stays visible for 2 seconds, then starts flipping
    setTimeout(() => {
      setShowCoin(false);
      // Letter appears right after coin scales to 0
      setTimeout(() => {
        setShowLetter(true);
        setIsTransitioning(false);
      }, 1000); // This matches the coin exit duration
    }, 2000); // Coin stays for 2 seconds
  };

  // Function to transition to next letter
  const transitionToNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    // Hide current letter
    setShowLetter(false);
    setAnimationComplete(false);

    // Wait for letter to fade out, then change index and start new animation
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      startAnimation();
    }, 500); // Wait for letter exit animation
  };

  // Initial animation on mount
  useEffect(() => {
    startAnimation();
  }, []);

  // Auto-advance to next letter every 8 seconds
  useEffect(() => {
    const autoAdvance = setInterval(() => {
      transitionToNext();
    }, 8000); // Change every 8 seconds (2s coin + 1s flip + 5s letter display)

    return () => clearInterval(autoAdvance);
  }, [currentIndex, isTransitioning]);

  const currentLetter = slides[currentIndex];

  return (
    <div className=" col-span-2 flex justify-center items-center flex-col ">
      <div className="w-[320px] h-[470px] min-[390px]:w-[370px]  relative flex justify-center items-center" >
        
        {/* Coin Animation */}
        <AnimatePresence>
          {showCoin && (
            <motion.div
              key={`coin-${currentIndex}`}
              initial={{ scale: 0, rotateY: 0, opacity: 0 }}
              animate={{
                scale: 1,
                rotateY: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              exit={{
                rotateY: [0, 180, 360, 540, 720],
                scale: [1, 0.9, 0.7, 0.4, 0],
                transition: { 
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  times: [0, 0.25, 0.5, 0.75, 1]
                }
              }}
              className="absolute"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative xl:w-72 xl:h-72 md:w-64 md:h-64 w-60 h-60 rounded-full shadow-2xl flex items-center justify-center border-yellow-300
              ">
                <Image src="/images/coin.png"
              fill
              alt="1 Rupee Coin."
              className=""
              />
                {/* 
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-yellow-700 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-yellow-900">₹1</div>
                  <div className="text-xs font-bold text-yellow-800 mt-1">ADMIT LETTER</div>
                </div>
                
                <div className="absolute inset-0 rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-3 bg-yellow-600"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 30}deg) translateY(-90px)`,
                        transformOrigin: 'center'
                      }}
                    />
                  ))}
                </div>
                */}
              </div> 
              
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter Animation */}
        <AnimatePresence mode="wait">
          {showLetter && (
            <motion.div
              key={`letter-${currentIndex}`}
              initial={{ 
                scale: 0,
                opacity: 0,
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
              }}
              onAnimationComplete={() => setAnimationComplete(true)}
              className="w-full max-w-md"
            >
              <motion.div
                animate={animationComplete ? {
                  y: [0, -10, 0],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Pass current letter data to RightColumn */}
                <FloatingCard slide={currentLetter } index={currentIndex}  />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sparkle Effects */}
        {showLetter && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${currentIndex}-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: Math.cos(i * 45 * Math.PI / 180) * 200,
                  y: Math.sin(i * 45 * Math.PI / 180) * 200,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute w-2 h-2 left-[200px] bottom-1/2 bg-yellow-400 rounded-full"
                style={{
                  boxShadow: '0 0 10px rgba(250, 204, 21, 0.8)'
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-4 w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentIndex) {
                setShowLetter(false);
                setAnimationComplete(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  startAnimation();
                }, 500);
              }
            }}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-red-700' 
                : 'w-2 bg-red-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default CoinFlipLetter;