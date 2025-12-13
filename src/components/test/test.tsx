"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Globe, GraduationCap, User, 
  Briefcase, BookOpen, PenTool, 
  CheckCircle2, 
  Projector
} from "lucide-react";

// Organizing the raw data into a structured format with categories
const REQUIREMENTS = [
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
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Application Checklist
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Admission Requirements for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Study Abroad in USA
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Ensure you have these documents ready to speed up your application process.
          </p>
        </div>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {REQUIREMENTS.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-6">
              {/* Category Label */}
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-2 border-l-2 border-red-500">
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
          <button className="whitespace-nowrap px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
            Get Document Help
          </button>
        </div>

      </div>
    </section>
  );
};

// --- Sub-Component for the Card ---
const RequirementCard = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-100 transition-all cursor-default relative overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex items-start gap-4 relative z-10">
        {/* Icon Box */}
        <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {item.icon}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
             <h4 className="font-bold text-slate-900 text-base leading-tight group-hover:text-blue-700 transition-colors">
               {item.title}
             </h4>
             {/* Badge */}
             {item.badge && (
               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border 
                 ${item.badge === 'Mandatory' ? 'bg-red-50 text-red-600 border-red-100' : 
                   item.badge === 'Highly Critical' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                   'bg-slate-50 text-slate-500 border-slate-100'}`}>
                 {item.badge}
               </span>
             )}
          </div>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RequirementsSection;