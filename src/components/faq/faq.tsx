"use client";

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
    question: "Do session credits expire if I don't use all my monthly session credits?",
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

export function FaqSection() {
  return (
    <section className="py-16 px-4 grid grid-cols-7 max-w-7xl mx-auto relative xl:px-0 "> 
    <div className="mx-auto space-y-8 col-span-4">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className=""
            >
              <AccordionTrigger 
                className="text-gray-900 hover:no-underline py-5 text-left font-semibold text-lg [&[data-state=open]>svg]:text-red-700"
              >
                {faq.question}
              </AccordionTrigger>
              
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="col-span-3 flex justify-center items-center relative">
          <img
          src="/images/faq.png"
          alt="Frequntly Ask Demo Image."
          className="absolute"
          />
      </div>
    </section>
  );
}