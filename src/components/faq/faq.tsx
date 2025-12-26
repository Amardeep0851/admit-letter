"use client";

import { AnimatePresence} from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RightFaq from "./right-faq";
import { useState } from "react";
import { Button } from "@/components/ui/button";


type FaqItem =
  | {
      id: string;
      question: string;
      answer: string;
    }
  | {
      id: string;
      question: string;
      answer: {
        step:string;
        content:string;
      }[];
    };

const faqData:FaqItem[] = [
  {
    id: "item-1",
    question: "* Wait, offer letter for just ₹1? What's the catch?*",
    answer:
      "No catch! The ₹1 is a promotional token payment to get started. Our expert counselors assess your profile for FREE and help you apply to universities where you have strong chances of acceptance. Additional services (document prep, application fees, language training) are separate and optional.",
  },
  {
    id: "item-2",
    question: "How does the ₹1 offer letter process actually work?",
    answer:[
      {step:"Step 1: ",content:"Pay ₹1 and fill our assessment form"},
      {step:"Step 2: ",content:"Our counselors review your profile and suggest 3-5 universities"},
      {step:"Step 3: ",content:"We help prepare and submit applications"},
      {step:"Step 4: ",content:"Track applications and receive offer letters"},
      {step:"Step 5: ",content:"Choose your dream university and proceed with enrollment"},
    ],
  },
  {
    id: "item-3",
    question:
      "Is this legit or some kind of scam?",
    answer:
      "100% legitimate! We're registered education consultants with 12 years of experience. You can verify our credentials, read student testimonials, and we provide full transparency on university partnerships and success rates.",
  },
  {
    id: "item-4",
    question: "How long does it take to get an offer letter?",
    answer:
      "Typically 2–4 weeks after application submission, but timelines vary by university and country. Some universities respond within 7–10 days, while others may take 6–8 weeks. We provide realistic timelines upfront based on your chosen universities.",
  },
  {
    id: "item-5",
    question: "What if I have low grades? Can I still get an offer?",
    answer:
      "Yes. We specialize in finding universities that match your overall profile. Even with average grades, there are good programs available. We focus on profile strength, not just marks.",
  },
  {
    id: "item-6",
    question: "Do you guarantee I'll get an offer letter?",
    answer:
      "No ethical consultant can guarantee an offer. However, our success rate is 97%. If you don’t receive any offers from our recommended universities, we’ll refund your service fees or help you explore alternative pathways.",
  },
  {
    id: "item-7",
    question: "After paying ₹1, what other costs should I expect?",
    answer:
      "University application fees vary by university (₹2,000–15,000 per application). Optional services include document preparation, language preparation courses, and visa guidance. There are no hidden fees — we share a complete cost breakdown upfront.",
  },
  {
    id: "item-8",
    question: "Can I just pay ₹1 and handle everything else myself?",
    answer:
      "Absolutely. The ₹1 gives you university recommendations and basic guidance. You’re free to handle applications, documentation, and preparation independently if you prefer.",
  },
  {
    id: "item-9",
    question: "Do I need to take IELTS or TOEFL before applying?",
    answer:
      "Not always. Many universities accept applications without English test scores and allow you to submit them later. Some also offer conditional admissions or their own English assessments.",
  },
  {
    id: "item-10",
    question: "What’s included in your language preparation courses?",
    answer:
      "IELTS, TOEFL, and PTE training with mock tests, speaking practice sessions, writing feedback, and score improvement strategies. Both online and offline batches are available.",
  },
  {
    id: "item-11",
    question: "Can you help with countries other than the US, UK, and Canada?",
    answer:
      "Yes. We cover 15+ countries including Germany, Australia, New Zealand, Ireland, Dubai, Singapore, and more. Each country has different requirements and costs, which we explain clearly.",
  },
  {
    id: "item-12",
    question: "What if the university rejects my application?",
    answer:
      "Rejections are a normal part of the process. We apply to multiple universities to maximize your chances. If one rejects, others may accept. We also provide feedback to strengthen future applications.",
  },
  {
    id: "item-13",
    question: "Do you have tie-ups with universities or are you just middlemen?",
    answer:
      "We are official representatives for 50+ universities and authorized agents for many more. This allows us to provide accurate insights and, in some cases, faster application processing.",
  },
  {
    id: "item-14",
    question: "Can I talk to other students who used your service?",
    answer:
      "Yes. We can connect you with current students or recent admits who are willing to share their experiences. You can also check our testimonials and social media reviews.",
  },
  {
    id: "item-15",
    question: "What if I need help after getting the offer letter?",
    answer:
      "We provide post-offer support including visa guidance, accommodation assistance, pre-departure briefings, and connecting you with current students at your chosen university.",
  },
  {
    id: "item-16",
    question: "Can I apply to universities that aren’t very famous but still good?",
    answer:
      "Definitely. We focus on universities with strong programs in your field, good job placement, and reasonable costs. Lesser-known universities often offer better value and opportunities.",
  },
  {
    id: "item-17",
    question: "What if my parents don’t support my study abroad plans?",
    answer:
      "This is common. We offer parent counseling sessions to explain the process, career prospects, return on investment, and scholarship opportunities so families can make informed decisions.",
  },
  {
    id: "item-18",
    question: "Is it too late to apply for an upcoming intake?",
    answer:
      "Maybe not. Many universities have rolling admissions or late deadlines. Contact us with your timeline and preferred countries, and we’ll check what’s still possible.",
  },
  {
    id: "item-19",
    question: "Can you help me choose between multiple offer letters?",
    answer:
      "Yes. We provide detailed comparisons of programs, costs, location, career prospects, and immigration pathways to help you choose the best option for your goals.",
  },
];

export default function FaqSection() {
  const [loadQuestions, setLoadQuestions] = useState<number>(5);
  const handleLoadMore = () => {
    setLoadQuestions((prev) => {
      if(prev+5 > faqData.length ){
        return faqData.length 
      }
      else {
          return prev+5
        }
    } )
  }
  console.log(loadQuestions);
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative xl:px-0">
      <div className="space-y-4  flex flex-col justify-center items-center pb-12 ">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 ">
            Do you have <span className="text-red-700">questions</span>?
          </h2>
          <p className="text-gray-500 text-lg">
            We’ve answered the most common questions to help you get started.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 ">
         <div className="space-y-8 col-span-4 order-2 lg:order-1">
        <Accordion type="single" collapsible className="w-full space-y-4">
         
          {
            
          faqData.slice(0, loadQuestions).map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              
              className="border border-zinc-200 shadow-sm border-l-4 border-l-red-700 data-[state=open]:bg-white data-[state=open]:border-red-100 data-[state=open]:shadow-md rounded-md transition-all duration-300 overflow-hidden "
            >
              <AccordionTrigger className="px-6 py-5 text-left  font-semibold text-lg text-slate-700 hover:text-slate-900 hover:no-underline [&[data-state=open]>svg]:text-red-600 [&[data-state=open]]:text-red-700 transition-all duration-200 ">
                
                {faq.question}
              </AccordionTrigger>

             <AnimatePresence mode="wait">
                <AccordionContent className="pr-6 pb-6 pl-7 text-slate-500 text-base leading-relaxed transition-all ">
                {
                  Array.isArray(faq.answer)
                  ? faq.answer.map((item, index) => (
                    <p key={index}>
                      <span className="font-bold">{item.step}</span> {item.content}
                    </p>
                  ))
                  :faq.answer
                }
                </AccordionContent>
             </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
        <div className=" flex items-center justify-center">
          <Button 
          onClick={handleLoadMore} 
          size='lg' 
          className="cursor-pointer"
          disabled={faqData.length === loadQuestions}
          >
          Load More
        </Button>
        </div>
      </div>
      <RightFaq />
      </div>
     
    </section>
  );
}
