"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, Phone } from "lucide-react";

const FAQS = [
  {
    question: "Do I need to buy my own Zoom account?",
    answer: "No. We provide the platform access directly. You just need to log in to your dashboard at the scheduled time, and the session will begin automatically."
  },
  {
    question: "How are sessions counted in billing?",
    answer: "Sessions are deducted only after the class is successfully completed. If a tutor cancels or you reschedule 24 hours prior, your credit remains safe."
  },
  {
    question: "Can I replace my instructor?",
    answer: "Absolutely. We believe in the perfect match. If you aren't satisfied with your current mentor, you can request a change instantly from your profile settings."
  },
  {
    question: "Is the ₹1 admit letter legit?",
    answer: "Yes! We charge a nominal ₹1 fee to verify serious applicants. The rest of our revenue comes from university partnerships, so we don't need to overcharge you."
  },
  {
    question: "What happens if my visa gets rejected?",
    answer: "In the rare event of a rejection, our team provides a free re-application service and helps you draft a new Statement of Purpose (SOP) to address the officer's concerns."
  }
];

function FaqSection2() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Header & Support (Sticky) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="lg:sticky lg:top-24">
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase">Support</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-3 leading-tight">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Everything you need to know about the product and billing. Can’t find the answer you’re looking for?
            </p>

            {/* The "Escape Hatch" Card */}
            <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <h3 className="text-lg font-bold text-slate-900 relative z-10">Still have questions?</h3>
              <p className="text-slate-500 text-sm mt-2 mb-6 relative z-10">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              
              <button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 relative z-10">
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Accordion */}
        <div className="lg:col-span-8 space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${activeIndex === index ? 'border-red-200 bg-white shadow-lg shadow-slate-200/40' : 'border-transparent bg-transparent hover:bg-white/50'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-slate-900' : 'text-slate-600'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-all ${activeIndex === index ? 'bg-red-100 text-red-600 rotate-180' : 'bg-white text-slate-400'}`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection2;