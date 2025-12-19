"use client"
import React from 'react';
import {AnimatePresence, easeInOut, motion} from "framer-motion"
import { Calendar, Wallet, Clock, Languages} from 'lucide-react';


import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger, 
} from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import RightTab from "./right-tab";
import InfoCard from "./info-card";
import CountryHeader from "./country-header";
import Flag from "react-world-flags";

function CountriesSection3() {
  
const COUNTRIES = [
  {
    id: 'usa',
    name: 'USA',
    flag: 'US',
    intake: 'Jan / Aug / Sep',
    expenses: '₹25L – ₹45L',
    deadline: '6–9 Months prior',
    exams: 'IELTS / TOEFL / DET',
    color: 'bg-blue-50',
    accent: 'text-blue-600',
    button: 'bg-blue-700 hover:bg-blue-800',
  },

  {
    id: 'uk',
    name: 'UK',
    flag: 'GB',
    intake: 'Sep / Jan',
    expenses: '₹18L – ₹35L',
    deadline: '6–9 Months prior',
    exams: 'IELTS / PTE',
    color: 'bg-red-50',
    accent: 'text-red-700',
    button: 'bg-red-700 hover:bg-red-800',
  },

  {
    id: 'canada',
    name: 'Canada',
    flag: 'CA',
    intake: 'Jan / May / Sep',
    expenses: '₹18L – ₹35L',
    deadline: '6–9 Months prior',
    exams: 'IELTS / TOEFL / PTE',
    color: 'bg-rose-50',
    accent: 'text-rose-600',
    button: 'bg-rose-600 hover:bg-rose-700',
  },

  {
    id: 'australia',
    name: 'Australia',
    flag: 'AU',
    intake: 'Feb / Jul',
    expenses: '₹20L – ₹40L',
    deadline: '5–8 Months prior',
    exams: 'IELTS / PTE',
    color: 'bg-indigo-50',
    accent: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-700',
  },

  {
    id: 'germany',
    name: 'Germany',
    flag: 'DE',
    intake: 'Apr / Oct',
    expenses: '₹0L – ₹15L',
    deadline: '6–8 Months prior',
    exams: 'IELTS / German',
    color: 'bg-amber-50',
    accent: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700',
  },
  
    {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: 'AE',
    intake: 'Jan / Sep',
    expenses: '₹10L – ₹25L',
    deadline: '5–7 Months prior',
    exams: 'IELTS (some waive)',
    color: 'bg-rose-50',
    accent: 'text-rose-600',
    button: 'bg-rose-600 hover:bg-rose-700'
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: 'NZ',
    intake: 'Feb / Jul',
    expenses: '₹15L – ₹30L',
    deadline: '6–8 Months prior',
    exams: 'IELTS / PTE',
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
    button: 'bg-emerald-600 hover:bg-emerald-700'
  }
];

  return (
    <section className="max-w-7xl m-auto px-4 xl:px-0 py-20 font-sans">
      <header className="flex justify-center flex-col items-center space-y-4 pb-8">
        <h2 className="text-4xl font-bold text-zinc-800 text-center ">Where do you want to study?</h2>
        <p className="text-zinc-500 text-center">Choose your dream destination to see intake dates, estimated costs, and requirements.</p>
      </header>

      <Tabs defaultValue={COUNTRIES[0].name} className="w-full ">
        {/* <TabsList className="flex justify-center gap-8 self-center">
      
      {
        COUNTRIES.map((country, index) => ( 
          <TabsTrigger key={index} value={country.name} className="cursor-pointer bg-white shadow-md  data-[state=active]:bg-red-700 data-[state=active]:text-white font-bold text-base hover:border-red-700 transition-all duration-200 px-10 py-2 h-32  flex-col">
            <Flag code={country.flag} className="w-[100px] h-[38px] border-2 border-zinc-200 rounded-lg object-cover" />
            {country.name}
          </TabsTrigger>
        ))
      }
        </TabsList> */}
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 sm:h-32 gap-4 justify-center self-center h-64 lg:grid-cols-7 lg:h-16">
      
      {
        COUNTRIES.map((country, index) => ( 
          <TabsTrigger key={index} value={country.name} className=" px-6 py-2 cursor-pointer bg-white shadow-md  data-[state=active]:bg-red-700 data-[state=active]:text-white font-bold text-base hover:border-red-700 transition-all duration-200 h-12 min-w-32">
           <Flag code={country.flag} className="size-6 border-2 border-zinc-200 rounded-full shadow-sm object-cover" />  {country.name}
          </TabsTrigger>
        ))
      }
        </TabsList>
        
      {
        COUNTRIES.map((country, index) => (
          <TabsContent 
              key={index} 
              value={country.name} 
              >
              <AnimatePresence mode="wait">
                <motion.div 
                  className={cn("bg-white p-8 rounded-md mb-8 mt-4 border-t-8 border-t-red-700 ", )}
                  initial={{x:-40, opacity:0, skewX:3}} 
                  animate={{x:0,  opacity:1, skewX:0}} 
                  exit={{y:20, opacity:0, skewX:3}}
                  transition={{duration:0.3, ease:easeInOut}}
                >
                  <div className="grid lg:grid-cols-9 ">
                    <div className="lg:col-span-6 w-full">

                      <CountryHeader country={country.name} flag={country.flag} />

                    <div className="py-8 sm:grid sm:grid-cols-2 gap-8  flex-col lg:flex-row ">
                      <InfoCard 
                      icon={<Calendar className="size-4 text-blue-700" /> } 
                      bg="bg-blue-100"
                      label="Upcoming Intakes"
                      value={country.intake}
                    />
                      <InfoCard 
                      icon={<Clock className="size-4 text-orange-700" /> } 
                      bg="bg-orange-100"
                      label="Apply Before"
                      value={country.deadline}
                    />
                      <InfoCard 
                      icon={<Wallet className="size-4 text-green-700" /> } 
                      bg="bg-green-100"
                      label="Est. Annual Expenses"
                      value={country.expenses}
                    />
                      <InfoCard 
                      icon={<Languages className="size-4  text-violet-700" /> } 
                      bg="bg-violet-100"
                      label="Accepted Exams"
                      value={country.exams}
                    />
                    </div>
                    </div>
                    <RightTab country={country.name} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
        ))
      }
      </Tabs>
    </section>
  )
}

export default CountriesSection3