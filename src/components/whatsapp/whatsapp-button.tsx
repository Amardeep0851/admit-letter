"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { handleWhatsappClick } from "./handle-whatsapp";
import Image from "next/image";

export default function WhatsappBubble() {
  const messages = [
    "Need help? Chat with our expert.",
    "You can directly interact with our counselor.",
    "Have questions about your admit letter?",
    "We’re here to help you instantly.",
    "Talk to our support team anytime.",
  ];

  const [showBubble, setShowBubble] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  // Animation behavior controller
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setShowBubble(true);

      timer = setTimeout(() => {
        setShowBubble(false);

        timer = setTimeout(() => {
          setMsgIndex((prev) => (prev + 1) % messages.length);
          setCycleCount((prev) => prev + 1);
        }, 4000);
      }, 5000);
    };

    if (cycleCount > 0 && cycleCount % 3 === 0) {
      timer = setTimeout(() => cycle(), 10000); 
    } else {
      cycle();
    }

    return () => clearTimeout(timer);
  }, [cycleCount, messages.length]);


  

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-3">

      {/* Animated Message Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key={msgIndex}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-red-700 text-white shadow-xl p-2 rounded-xl px-4 border border-red-800  "
          >
            <p className="text-sm leading-snug">
              {messages[msgIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button with WAVE Hover Animation */}
      <motion.button
        onClick={handleWhatsappClick}
        className=" text-white rounded-full w-[56px] h-[56px] flex items-center justify-center cursor-pointer relative "
        whileHover={{ 
          rotate: [0, -10, 10, -6, 6, 0],
          transition: { duration: 0.6 }
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open WhatsApp"
      >
      <Image src="/images/whatsapp-icon.png" fill alt="Whatsapp Button" />
      </motion.button>
    </div>
  );
}
