"use client";

import React, { useState } from 'react';
import { Calendar, Wallet, Clock, Languages, ArrowRight, CheckCircle2 } from 'lucide-react';
import InfoCard from "./info-card";

const COUNTRIES = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸', // Using emojis for demo, replace with SVGs/Images
    intake: 'Jan / May / Aug',
    expenses: '₹20L - ₹40L', // Realistic yearly expense
    deadline: '4-8 Months prior',
    exams: 'IELTS / TOEFL / DET',
    color: 'bg-blue-50', // Subtle theme for each country
    accent: 'text-blue-600',
    button: 'bg-blue-700 hover:bg-blue-800'
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    intake: 'Sep / Jan',
    expenses: '₹15L - ₹30L',
    deadline: '3-6 Months prior',
    exams: 'IELTS / PTE',
    color: 'bg-red-50',
    accent: 'text-red-700',
    button: 'bg-red-700 hover:bg-red-800'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    intake: 'Sep / Jan / May',
    expenses: '₹12L - ₹25L',
    deadline: '6-9 Months prior',
    exams: 'IELTS / TOEFL',
    color: 'bg-red-50',
    accent: 'text-red-600',
    button: 'bg-red-600 hover:bg-red-700'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    intake: 'Feb / July',
    expenses: '₹18L - ₹35L',
    deadline: '4-6 Months prior',
    exams: 'IELTS / PTE',
    color: 'bg-indigo-50',
    accent: 'text-indigo-600',
    button: 'bg-indigo-600 hover:bg-indigo-700'
  },
   {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    intake: 'Apr / Oct',
    expenses: '₹0L - ₹10L',
    deadline: '5-7 Months prior',
    exams: 'IELTS / German',
    color: 'bg-amber-50',
    accent: 'text-amber-600',
    button: 'bg-amber-600 hover:bg-amber-700'
  },


];

const CountriesSection2 = () => {
  const [activeTab, setActiveTab] = useState(COUNTRIES[0]);

  return (
    <div className="w-full bg-slate-50 py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto ">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">
            Where do you want to study?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Choose your dream destination to see intake dates, estimated costs, and requirements.
          </p>
        </div>

        {/* --- THE REDESIGN STARTS HERE --- */}
        <div className="flex flex-col gap-6">
          
          {/* 1. The Tabs (Scrollable on mobile, centered on desktop) */}
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center no-scrollbar">
            {COUNTRIES.map((country) => (
              <button
                key={country.id}
                onClick={() => setActiveTab(country)}
                className={`
                  relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap
                  ${activeTab.id === country.id 
                    ? 'bg-white border-slate-200 shadow-md text-slate-900 scale-105' 
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-white/60 hover:text-slate-700'}
                `}
              >
                <span className="text-xl">{country.flag}</span>
                {country.name}
                {/* Active Indicator Dot */}
                {activeTab.id === country.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full md:hidden"></span>
                )}
              </button>
            ))}
          </div>

          {/* 2. The Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-500">
            
            {/* Top Bar with Dynamic Color */}
            <div className={`h-2 w-full ${activeTab.button}`}></div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Left Side: The "Specs" */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="text-5xl border shadow-sm rounded-xl p-2 bg-slate-50">{activeTab.flag}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Study in {activeTab.name}</h3>
                    <p className="text-slate-500 text-sm">Everything you need to know before you apply.</p>
                  </div>
                </div>

                {/* The Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard 
                    icon={<Calendar className="w-5 h-5 text-blue-600" />}
                    label="Upcoming Intakes"
                    value={activeTab.intake}
                    bg="bg-blue-50"
                  />
                  <InfoCard 
                    icon={<Wallet className="w-5 h-5 text-green-600" />}
                    label="Est. Annual Expenses"
                    value={activeTab.expenses}
                    bg="bg-green-50"
                  />
                  <InfoCard 
                    icon={<Clock className="w-5 h-5 text-orange-600" />}
                    label="Apply Before"
                    value={activeTab.deadline}
                    bg="bg-orange-50"
                  />
                   <InfoCard 
                    icon={<Languages className="w-5 h-5 text-purple-600" />}
                    label="Accepted Exams"
                    value={activeTab.exams}
                    bg="bg-purple-50"
                  />
                </div>
              </div>

              {/* Right Side: The Offer (The "Hook") */}
              <div className={`rounded-2xl p-6 ${activeTab.color} border border-white/50 flex flex-col justify-between items-start`}>
                <div className="space-y-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm ${activeTab.accent}`}>
                    Limited Offer
                  </span>
                  <h4 className={`text-xl font-bold ${activeTab.accent}`}>
                    Ready to apply to {activeTab.name}?
                  </h4>
                  <ul className="space-y-2">
                     <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 ${activeTab.accent}`}/> Shortlist Universities
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 ${activeTab.accent}`}/> Review SOP & LORs
                     </li>
                     <li className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 ${activeTab.accent}`}/> Visa Assistance
                     </li>
                  </ul>
                </div>

                <div className="w-full mt-8">
                  <button className={`w-full group py-3 px-6 rounded-xl text-white font-semibold shadow-lg shadow-slate-300 transition-all transform active:scale-95 flex items-center justify-center gap-2 ${activeTab.button}`}>
                    Start for just ₹1
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-2">
                    Offer valid for first consultation.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CountriesSection2;