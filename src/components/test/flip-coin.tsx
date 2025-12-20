'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Award, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

const CoinFlipToLetter = () => {
  const [isFlipping, setIsFlipping] = useState(true)
  const [showLetter, setShowLetter] = useState(false)
  const [hasFlipped, setHasFlipped] = useState(false)

  // Start the animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Wait a bit, then start coin flip
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Coin flip animation (3 flips)
      for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      // Coin goes up
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Coin disappears and letter appears
      setIsFlipping(false)
      await new Promise(resolve => setTimeout(resolve, 300))
      setShowLetter(true)
      setHasFlipped(true)
    }
    
    sequence()
  }, [])

  const handleRestart = () => {
    setHasFlipped(false)
    setShowLetter(false)
    setIsFlipping(true)
    
    // Restart animation sequence
    setTimeout(() => {
      const sequence = async () => {
        for (let i = 0; i < 3; i++) {
          await new Promise(resolve => setTimeout(resolve, 300))
        }
        
        await new Promise(resolve => setTimeout(resolve, 800))
        setIsFlipping(false)
        await new Promise(resolve => setTimeout(resolve, 300))
        setShowLetter(true)
        setHasFlipped(true)
      }
      
      sequence()
    }, 300)
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-[500px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg"></div>
      
      {/* Main container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your Admission Journey
          </h2>
          <p className="text-gray-600">
            Start with ₹1 coin, receive your verified letter
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* Coin Flip Animation */}
          <AnimatePresence>
            {isFlipping && (
              <>
                {/* Bottom coin (starting position) */}
                <motion.div
                  initial={{ y: 100, opacity: 0, rotateY: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="absolute"
                >
                  {/* Coin with multiple flips */}
                  <motion.div
                    animate={{
                      rotateY: [0, 180, 360, 540, 720, 900],
                      y: [0, -120, 0, -120, 0, -120],
                      scale: [1, 1.1, 1, 1.1, 1, 1.1]
                    }}
                    transition={{
                      duration: 2.4,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      repeat: 0
                    }}
                    className="relative"
                  >
                    {/* Coin */}
                    <div className="relative w-32 h-32">
                      {/* Coin front */}
                      <motion.div
                        animate={{ rotateY: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-xl border-8 border-yellow-300"
                      >
                        {/* Coin design - ₹ symbol */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl font-bold text-white drop-shadow-lg">
                            ₹
                          </div>
                        </div>
                        
                        {/* Coin shine */}
                        <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
                        <div className="absolute top-6 right-6 w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
                      </motion.div>
                      
                      {/* Coin back (hidden) */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full shadow-xl border-8 border-amber-400"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl font-bold text-white/90">1</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Coin shine effect */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-md"
                    />
                  </motion.div>
                  
                  {/* Coin trail effect */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Letter Reveal Animation */}
          <AnimatePresence>
            {showLetter && (
              <motion.div
                initial={{ 
                  scale: 0.5, 
                  opacity: 0, 
                  rotateX: 90,
                  y: 50 
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotateX: 0,
                  y: 0 
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  delay: 0.2
                }}
                className="absolute"
              >
                {/* Letter Container */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-80 overflow-hidden border-2 border-blue-100">
                  {/* Decorative header stripe */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: [-400, 400] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  
                  {/* Letter content */}
                  <div className="relative z-10">
                    {/* Letter header */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          ADMIT<span className="text-blue-600">LETTER</span>
                        </h3>
                        <p className="text-sm text-gray-500">Official Admission Service</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold">
                        <CheckCircle className="h-4 w-4" />
                        VERIFIED
                      </div>
                    </div>
                    
                    {/* Letter body */}
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          OFFER OF ADMISSION
                        </h4>
                        <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          This certifies that <span className="font-bold text-blue-700">Jane Wilson</span> has been 
                          admitted to the <span className="font-bold text-blue-700">Computer Science</span> program.
                        </p>
                        
                        <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                          <div className="flex items-center gap-3">
                            <Award className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-bold text-gray-800">University of Innovation</div>
                              <div className="text-sm text-gray-600">Fall 2024 Semester</div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600">
                          Official offer letter • Valid for enrollment • No hidden charges
                        </p>
                      </div>
                    </div>
                    
                    {/* Stamp */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", delay: 0.8, stiffness: 150 }}
                      className="absolute -bottom-4 -right-4"
                    >
                      <div className="relative">
                        <div className="h-20 w-20 rounded-full border-4 border-dashed border-red-300 bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center rotate-12 shadow-lg">
                          <div className="text-center">
                            <div className="font-bold text-red-700 text-xs">OFFICIAL</div>
                            <div className="text-[10px] text-red-600">STAMP</div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-2 border-2 border-red-200/30 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Confetti effect */}
                  <AnimatePresence>
                    {showLetter && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, y: 0, x: 0 }}
                            animate={{ 
                              scale: [0, 1, 0],
                              y: [-20, -100],
                              x: Math.sin(i) * 100
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                              repeat: 0
                            }}
                            className="absolute"
                            style={{
                              left: `${25 + (i % 4) * 15}%`,
                              top: '50%',
                            }}
                          >
                            <Sparkles className="h-6 w-6 text-yellow-400" />
                          </motion.div>
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instruction text */}
          <motion.div
            animate={{ opacity: isFlipping || !hasFlipped ? 1 : 0 }}
            className="absolute -bottom-12 text-center"
          >
            <p className="text-gray-600 text-sm">
              {isFlipping ? "Coin is flipping..." : "Letter revealed!"}
            </p>
          </motion.div>
        </div>

        {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hasFlipped ? 1 : 0, y: hasFlipped ? 0 : 20 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <Button
            onClick={handleRestart}
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            Watch Animation Again
          </Button>
        </motion.div>

        {/* Step indicators */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isFlipping ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
              1
            </div>
            <span className="text-sm text-gray-600 mt-2">Coin Flip</span>
          </div>
          <div className="w-16 h-1 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${showLetter ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
              2
            </div>
            <span className="text-sm text-gray-600 mt-2">Letter Reveal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinFlipToLetter