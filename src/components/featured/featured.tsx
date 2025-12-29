"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Featured media outlets/platforms
  const featuredLogos = [
    {
      name: "ANI",
      logo: "/images/featured/1.png",
      grayscale: true,
    },
    {
      name: "Flipboard",
      logo: "/images/featured/2.png",
      grayscale: true,
    },
    {
      name: "Dailyhunt",
      logo: "/images/featured/3.png",
      grayscale: true,
    },
    {
      name: "Google News",
      logo: "/images/featured/4.png",
      grayscale: true,
    },
    {
      name: "Medium",
      logo: "/images/featured/5.png",
      grayscale: true,
    },
    {
      name: "Entrepreneur World",
      logo: "/images/featured/6.png",
      grayscale: true,
    },
    {
      name: "Attention India News",
      logo: "/images/featured/7.png",
      grayscale: true,
    },
    {
      name: "The First Talk",
      logo: "/images/featured/8.png",
      grayscale: true,
    },
  ];

  useEffect(() => {
    const logos = document.querySelectorAll('.featured-logo');
    
    logos.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        {
          opacity: 0.6,
          y: 60,
          scale: 0.7,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logo,
            start: 'top 55%',
            end: 'bottom 0%',
            scrub: true,
            // markers:true
            // toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-zinc-100 to-zinc-50 py-20 px-4 xl:px-0 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl " />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl " />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <div className="flex justify-center items-center">
            <h2 
              className="flex gap-2 items-center font-semibold bg-red-100 text-red-600 px-4 py-1.5  rounded-md mb-4 shadow-sm/20">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Media Presence & Mentions</span>
          </h2>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Featured <span className="text-red-700"> In</span>
          </h2>
          
          <p className="text-lg  text-gray-600  mx-auto">
            Our announcements and content have appeared across various media and content platforms.
          </p>
        </motion.header>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 min-[432px]:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 md:gap-12 items-center ">
          {featuredLogos.map((item, index) => (
            <div
              key={index}
              className="featured-logo group"
            >
              <div className="relative h-20 md:h-24 flex items-center justify-center p-4 transition-all duration-300  hover:scale-105">
                <div className="relative w-full h-full grayscale-25 hover:grayscale-0  transition-all duration-300">
                  <Image
                    src={item.logo}
                    alt={`Featured in ${item.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Featured;