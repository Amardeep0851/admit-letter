"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RightColumn from "../hero-section/right-column";



const CoinFlipLetter = () => {
  const [showCoin, setShowCoin] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Coin stays visible for 2 seconds, then starts flipping
    const timer = setTimeout(() => {
      setShowCoin(false);
      // Letter appears right after coin scales to 0
      setTimeout(() => {
        setShowLetter(true);
      }, 1000); // This matches the coin exit duration
    }, 2000); // Coin stays for 2 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <div className="h-[500px] relative flex justify-center items-center w-[400px]">
        
        {/* Coin Animation */}
        <AnimatePresence>
          {showCoin && (
            <motion.div
              initial={{ scale: 1, rotateY: 0 }}
              animate={{
                scale: 1,
                rotateY: 0,
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
              {/* Coin Front */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl flex items-center justify-center border-8 border-yellow-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-yellow-700 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-yellow-900">₹1</div>
                  <div className="text-xs font-bold text-yellow-800 mt-1">ADMIT LETTER</div>
                </div>
                
                {/* Coin Details */}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Letter Animation */}
        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{ 
                scale: 0,
                opacity: 0,
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
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
                <RightColumn />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sparkle Effects */}
        {showLetter && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
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
    </div>
  );
};

export default CoinFlipLetter;