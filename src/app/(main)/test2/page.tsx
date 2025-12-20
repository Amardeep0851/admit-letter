"use client"
import React, { useState } from 'react';
import { Phone, Check, ArrowRight, GraduationCap } from 'lucide-react';

type OfferCardProps = {
  university:{
    name:string;
    initial:string;
    color:string;
    date:string;
    studentName:string;
    program:string;
    semester:string;
    startDate:string;
    duration:string;
    tuition:string;
    signatory:string;
    title:string;
  };
   delay:number;
   index:number;
}

const OfferCard = ({ university, delay, index }:OfferCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`absolute w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl transition-all duration-700 ease-out cursor-pointer`}
      style={{
        zIndex: 3 - index,
        transform: isHovered 
          ? 'translateX(-20px) translateY(-20px) rotateY(8deg) scale(1.05)' 
          : `translateX(${index * 25}px) translateY(${index * 15}px) rotateY(${-index * 5}deg)`,
        opacity: isHovered ? 1 : 1 - (index * 0.15),
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8 h-full flex flex-col">
        {/* University Header */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-100">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 ${university.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
              {university.initial}
            </div>
            <div>
              <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider">University</div>
              <div className="text-lg font-bold text-gray-900 mt-1">{university.name}</div>
            </div>
          </div>
          <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            APPROVED
          </div>
        </div>

        {/* Letter Content */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
          
          <div className="relative z-10">
            <h3 className="text-center text-base font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
              Admission Offer
            </h3>
            
            <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800">{university.date}</p>
              <p className="font-semibold text-gray-800">Dear {university.studentName},</p>
              
              <p className="text-justify">
                We are delighted to inform you that you have been granted admission to the <span className="font-semibold text-gray-900">{university.program}</span> at {university.name} beginning in {university.semester}.
              </p>
              
              <div className="bg-white rounded-lg p-3 my-3">
                <p className="font-semibold text-gray-800 mb-2">Program Details:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Start Date: {university.startDate}</li>
                  <li>• Duration: {university.duration}</li>
                  <li>• Tuition: {university.tuition}</li>
                </ul>
              </div>

              <p className="text-justify">
                Congratulations on your achievement. We look forward to welcoming you to our community.
              </p>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{university.signatory}</p>
                <p className="text-xs text-gray-500">{university.title}</p>
              </div>
            </div>
          </div>

          {/* Official Stamp */}
          <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center opacity-20">
            <span className="text-xs font-bold text-red-500 rotate-12">OFFICIAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const universities = [
    {
      name: "Melbourne Univ.",
      initial: "M",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      date: "April 5, 2025",
      studentName: "Ravi Kumar",
      program: "Master of Computer Science",
      semester: "September 2025",
      startDate: "September 8, 2025",
      duration: "2 years",
      tuition: "$45,000/year",
      signatory: "Maria Thompson",
      title: "Director of Admissions"
    },
    {
      name: "Toronto Univ.",
      initial: "T",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      date: "March 28, 2025",
      studentName: "Ravi Kumar",
      program: "MBA Program",
      semester: "Fall 2025",
      startDate: "September 15, 2025",
      duration: "2 years",
      tuition: "$42,000/year",
      signatory: "Dr. James Wilson",
      title: "Dean of Admissions"
    },
    {
      name: "Stanford Univ.",
      initial: "S",
      color: "bg-gradient-to-br from-red-600 to-red-800",
      date: "April 12, 2025",
      studentName: "Ravi Kumar",
      program: "MS in Data Science",
      semester: "Fall 2025",
      startDate: "September 20, 2025",
      duration: "2 years",
      tuition: "$55,000/year",
      signatory: "Dr. Sarah Chen",
      title: "Graduate Admissions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          

          {/* Right Content - Offer Cards */}
          <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '1500px' }}>
            <div className="relative w-full h-full">
              {universities.map((university, index) => (
                <OfferCard
                  key={index}
                  university={university}
                  delay={index * 100}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-semibold shadow-2xl shadow-red-900/50 transition-all duration-300 hover:scale-105 z-50">
        Need help? Chat with our expert
      </button>
    </div>
  );
}