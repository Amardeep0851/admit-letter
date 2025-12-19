"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";

type University = {
  intake: string;
  applyingTimeBefore: string;
  Language: string;
  expenses: string;
};

const universityData: Record<string, University[]> = {
  USA: [
    {
      intake: "Jan/May,Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  CANADA: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  UK: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  AUSTRALIA: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  UAE: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  GERMANY: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
  IRELAND: [
    {
      intake: "Jan/May/Aug",
      applyingTimeBefore: "4-8 Months prior",
      expenses: "90,000-1,00,00",
      Language: "IELTS/DET/TOFEL",
    },
  ],
};

export default function CountriesSection() {
  const [active, setActive] = useState("USA");

  return (
    <motion.section
      className="py-20 px-4 xl:px-0 max-w-7xl mx-auto  "
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.6, once: true }}
    >
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">
          Where do you want to study?
        </h2>
        <p className="text-gray-500">
          Choose your country and explore intake, expenses, and other details.
        </p>
      </div>

      <Tabs value={active} onValueChange={setActive} className="w-full">
        <TabsList className="flex overflow-x-auto w-full bg-transparent p-0 mb-4 h-24 gap-6">
          {[
            {country:"USA", image:"/images/usa.png"},
            {country:"UK", image:"/images/usa.png"},
            {country:"AUSTRALIA", image:"/images/usa.png"},
            {country:"UAE", image:"/images/usa.png"},
            {country:"GERMANY", image:"/images/usa.png"},
            {country:"CANADA", image:"/images/usa.png"},
            {country:"DUBAI", image:"/images/usa.png"},
            {country:"NEW ZEALAND", image:"/images/usa.png"},
          ].map((country) => (
            <TabsTrigger
              key={country.country}
              value={country.country}
              className="px-5 py-2 rounded-md border text-sm font-medium bg-white data-[state=active]:bg-red-700 border-zinc-100 cursor-pointer
                data-[state=active]:text-white data-[state=active]:cursor-not-allowed data-[state=active]:border-red-700 
                hover:border-red-700 transition whitespace-nowrap flex flex-col p-4"
            > 
              <div className="w-20 aspect-video relative">
                <Image src={`${country.image}`} fill alt="This is the text" className="rounded-md" />
              </div>
              {country.country.charAt(0).toUpperCase() + country.country.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(universityData).map((country) => (
          <TabsContent key={country} value={country}>
            <AnimatePresence mode="wait">
              <motion.div
                key={country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 gap-6"
              >
                {universityData[country].map((u, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="border rounded-md p-6 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    {/* GRID WITH 4 COLUMNS */}
                    <div className="grid  grid-cols-4 gap-4">
                      {/* LABEL ROW */}
                      <div className="text-sm font-semibold text-gray-800 text-center">
                        Intake
                      </div>
                      
                      <div className="text-sm font-semibold text-gray-800 text-center">
                        Expenses
                      </div>
                      <div className="text-sm font-semibold text-gray-800 text-center">
                        Apply Before
                      </div>
                      <div className="text-sm font-semibold text-gray-800 text-center">
                        Language
                      </div>

                      {/* VALUE ROW */}
                      <div className="text-gray-600 font-medium text-center">
                        {u.intake}
                      </div>

                      <div className="text-center">
                        <Badge variant="destructive" className="bg-red-700 rounded-md text-xs">
                        {u.expenses}
                      </Badge>
                      </div>

                      <div className="text-gray-600 text-md text-center">
                        {u.applyingTimeBefore}
                      </div>
                      <div className="text-gray-600 font-medium text-center">
                        {u.Language}
                      </div>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        ))}
      </Tabs>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Want help applying to these countries?
        </h3>

        <Button className="px-8" variant="red">
          Start for ₹1 →
        </Button>
      </div>
    </motion.section>
  );
}
