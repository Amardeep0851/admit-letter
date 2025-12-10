// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-green overflow-hidden">
      {/* Background Decorative Elements (Optional: adds the 'web' feel) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-600 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-green-600 opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide">98% Success Rate</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700">Study Abroad</span> Dreams Into Reality
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Join thousands of students who have received offer letters from top universities in the UK, Canada, and USA. Your future starts with a single click.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-green-600 border border-transparent rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 shadow-lg shadow-green-600/30">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                How it works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-500 mb-3">Trusted by students from:</p>
              <div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for Uni Logos - Replace with actual SVGs */}
                <span className="font-serif font-bold text-slate-400">Toronto</span>
                <span className="font-serif font-bold text-slate-400">Cambridge</span>
                <span className="font-serif font-bold text-slate-400">Harvard</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Character Image */}
          <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
             {/* Abstract shape behind the student similar to the reference image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-90 -z-10"></div>
            
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[auto]">
              {/* IMPORTANT: Replace '/images/student-offer.png' with your actual generated image path. 
                  Use 'contain' to ensure the whole offer letter and face are visible.
              */}
              <Image
                src="/images/offer-letter-with-person.png" 
                alt="Happy Indian student holding an offer letter from a foreign university"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl"
                priority
              />
              
              {/* Floating Badge (Optional - adds depth) */}
              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Status</p>
                  <p className="text-sm font-bold text-slate-900">Visa Approved</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;