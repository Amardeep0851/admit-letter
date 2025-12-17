"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Do I need to buy my own Zoom account and link it?",
    answer:
      "No, you don't need your own Zoom account. Our platform provides integrated Zoom links for all your sessions automatically.",
  },
  {
    id: "item-2",
    question: "How are sessions counted in session-based billing plans?",
    answer:
      "Sessions are counted based on the duration of the call. A standard session is typically 60 minutes. Details can be found in your plan settings.",
  },
  {
    id: "item-3",
    question:
      "Do session credits expire if I don't use all my monthly session credits?",
    answer:
      "Yes, for most monthly plans, unused session credits expire at the end of the billing cycle and do not roll over.",
  },
  {
    id: "item-4",
    question: "How are seats counted in seat-based plans?",
    answer:
      "A 'seat' refers to a single user license. Each instructor or student who needs access to the platform requires an active seat.",
  },
  {
    id: "item-5",
    question: "Can I replace an instructor or tutor in a seat-based plan?",
    answer:
      "Yes, you can deactivate an old instructor's account and assign their seat to a new instructor at any time.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative xl:px-0">
      <div className="space-y-6  flex flex-col justify-center items-center pb-12 ">
          <h2 className="text-4xl font-bold text-gray-900">
            Do you have questions?
          </h2>
          <p className="text-gray-500 text-lg">
            We’ve answered the most common questions to help you get started.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 ">
         <div className="space-y-8 col-span-4 order-2 lg:order-1">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              
              className="border border-zinc-200 shadow-sm border-l-4 border-l-red-700 data-[state=open]:bg-white data-[state=open]:border-red-100 data-[state=open]:shadow-md rounded-md transition-all duration-300 overflow-hidden "
            >
              <AccordionTrigger className="px-6 py-5 text-left  font-semibold text-lg text-slate-700 hover:text-slate-900 hover:no-underline [&[data-state=open]>svg]:text-red-600 [&[data-state=open]]:text-red-700 transition-all duration-200 ">
                
                {faq.question}
              </AccordionTrigger>

             <AnimatePresence mode="wait">
                <AccordionContent className="px-6 pb-6 text-slate-500 text-base leading-relaxed transition-all ">
                {faq.answer}
                </AccordionContent>
             </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className=" flex justify-center items-start w-full col-span-3 order-1 lg:order-2 ">
        <div className="w-[400px] aspect-square relative">
          <Image
            src="/images/faq.png"
            alt="Frequntly Ask Demo Image."
            className="absolute"
            fill
          />
          <motion.div
            className="h-[90px] aspect-square absolute right-20 -top-5"
            animate={{ x: [0, 5, 0, -5, 0], y: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0.5, 0.9, 1] }}
          >
            <Image
              src="/images/questionmark1.png"
              alt="Frequntly Ask Demo Image."
              className="absolute"
              fill
            />
          </motion.div>

          <motion.div
            className="h-[130px] aspect-square absolute left-25 top-5"
            animate={{ x: [5, 0, -5, 0, 0], y: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, times: [0.5, 0.9, 1] }}
          >
            <Image
              src="/images/questionmark2.png"
              alt="Frequntly Ask Demo Image."
              className="absolute"
              fill
            />
          </motion.div>
        </div>
      </div>
      </div>
     
    </section>
  );
}
