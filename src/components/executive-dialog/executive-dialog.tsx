"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Copy,
  Check,
  User,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CustomButtonOutlineBlack } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";

const ExecutiveContactDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+91-8360828696";
  const phoneNumberClean = "918360828696";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumberClean}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumberClean}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@admitletter.com";
  };
  return (
    <>
      {/* Trigger Button */}
      <CustomButtonOutlineBlack
        title="Talk to executive "
        onClick={() => setIsOpen(true)}
      />

      
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className={cn("p-0 overflow-hidden border-0 gap-0 transition-all duration-300 ", isOpen ? "scale-90 skew-0 opacity-100" : "scale-0 skew-12 opacity-0")}>
              <DialogHeader className={cn("relative bg-gradient-to-br from-red-700 to-red-800 px-6 py-4 text-white")}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm ">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <DialogTitle className="sm:text-2xl text-xl text-left font-bold mb-1 text-white">
                      Talk to Our Executive
                    </DialogTitle>
                    <DialogDescription className="text-red-100 text-sm flex items-center gap-1 ">
                      <Clock className="w-4 h-4" />
                      <span>Mon-Sat, 9 AM - 6 PM IST</span>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

            {/* Content */}
            <div className="p-6 space-y-4 bg-white/10">
              {/* Phone Number Display */}
              <div className="bg-zinc-50 rounded-xl p-4 border-2 border-zinc-100">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 tracking-wide">
                    {phoneNumber}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Call Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCall}
                  className=""
                >
                  <Button variant="default" className="w-full cursor-pointer h-12">
                    <Phone className="w-7 h-7" />
                    <div className="font-semibold text-base">Call Now</div>
                  </Button>
                </motion.div>

                {/* Copy Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopy}
                  className=""
                >
                  <Button className="h-12 w-full" variant="red">
                    {copied ? (
                        <Check className="w-10 h-10" />
                      ) : (
                        <Copy className="w-10 h-10" />
                      )}
                    <div className="text-center">
                      <div className="font-semibold text-base">
                        {copied ? "Copied!" : "Copy Number"}
                      </div>
                      
                    </div>
                  </Button>
                </motion.div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="space-y-2 pt-2">
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Other ways to reach us:
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 rounded-xl transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-gray-900">
                      WhatsApp Chat
                    </div>
                    <div className="text-sm text-gray-600">
                      Instant messaging support
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    </>
  );
};

export default ExecutiveContactDialog;
