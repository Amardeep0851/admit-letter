"use client";

import React from "react";
import { 
  FileText, Globe, GraduationCap, User, 
  Briefcase, BookOpen, PenTool, 
  CheckCircle2, 
  Projector
} from "lucide-react";
import RequirementCard from "./requirement-card";
import CustomButton from "../ui/custom-button";
import { customScrollTo } from "@/lib/scroll-to";

const REQUIREMENTS = [
  
  {
    category: "Personal & References",
    items: [
      {
        icon: <FileText className="w-6 h-6" />,
        title: "Statement of Purpose",
        desc: "A personal essay describing your goals and motivations.",
        badge: "Highly Critical"
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Letters of Recommendation",
        desc: "Reference letters from your professors or past employers.",
        badge: "2-3 Letters"
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "Portfolio / Essays",
        desc: "Required for Arts/Design courses or specific universities.",
        badge: "Optional"
      }
    ]
  },
  {
    category: "Academics & Tests",
    items: [
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Academic Transcripts",
        desc: "Official marksheets from your previous school or college.",
        badge: "Mandatory"
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "English Proficiency",
        desc: "TOEFL / IELTS test scores as proof of language skills.",
        badge: "Score Required"
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Entrance Exams",
        desc: "ACT/SAT for Undergrad, GMAT/GRE for Postgrad programs.",
        badge: "Course Dependent"
      }
    ]
  },
  {
    category: "Identity & Basics",
    items: [
      {
        icon: <Projector className="w-6 h-6" />,
        title: "Valid Passport",
        desc: "Must be valid for at least 6 months beyond your stay.",
        badge: "Mandatory"
      },
      {
        icon: <User className="w-6 h-6" />,
        title: "CV / Resume",
        desc: "Updated summary of your academic and professional history.",
        badge: "Mandatory"
      }
    ]
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto relative px-4 xl:px-0 ">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse"></span>
            Application Checklist
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Admission Requirements for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              Study Abroad in USA
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Ensure you have these documents ready to speed up your application process.
          </p>
        </div>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          
          {REQUIREMENTS.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-6">
              {/* Category Label */}
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest pl-2 border-l-2 border-red-500">
                {group.category}
              </h3>

              {/* Cards for this category */}
              <div className="space-y-4">
                {group.items.map((item, idx) => (
                  <RequirementCard key={idx} item={item} delay={(groupIndex * 0.2) + (idx * 0.1)} />
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-full">
               <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Need help with documents?</h4>
              <p className="text-slate-500 text-sm mt-1">
                Our team helps you draft professional SOPs and LORs that get accepted.
              </p>
            </div>
          </div>
          <CustomButton title="Get Document Help" onClick={() => customScrollTo("ContactForm")} />
          
        </div>

      </div>
    </section>
  );
};

// --- Sub-Component for the Card ---


export default RequirementsSection;